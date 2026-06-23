import nodemailer from 'nodemailer'
import { verifyTurnstileToken } from '#turnstile'

interface ContactPayload {
  name?: string
  company?: string
  companyName?: string
  regNumber?: string
  phone?: string
  email?: string
  service?: string
  message?: string
  locale?: string
  turnstileToken?: string
}

const CONFIRMATION_TEMPLATES = {
  mn: {
    subject: 'Таны хүсэлтийг хүлээн авлаа — Fire Impex',
    greeting: (name: string) => `Сайн байна уу, ${name}.`,
    body: 'Бидэнтэй холбогдсон танд баярлалаа. Таны хүсэлтийг амжилттай хүлээн авлаа. Манай мэргэжилтнүүд таны хүсэлтийг хянаж, удахгүй тантай эргэн холбогдох болно.',
    summaryTitle: 'Таны илгээсэн мэдээлэл:',
    fields: {
      name: 'Нэр',
      company: 'Байгууллага',
      companyName: 'Байгууллагын нэр',
      regNumber: 'Регистрийн дугаар',
      phone: 'Утас',
      email: 'И-мэйл',
      service: 'Үйлчилгээ',
      message: 'Зурвас'
    },
    signOff: 'Хүндэтгэсэн,',
    signature: 'Fire Impex / Galimpex баг',
    contactLine: 'Яаралтай асуудалтай бол 11-463614 утсаар холбогдоно уу.'
  },
  en: {
    subject: 'We have received your inquiry — Fire Impex',
    greeting: (name: string) => `Dear ${name},`,
    body: 'Thank you for contacting us. We have successfully received your inquiry. Our team will review it and get back to you shortly.',
    summaryTitle: 'Your submitted information:',
    fields: {
      name: 'Name',
      company: 'Company',
      companyName: 'Company name',
      regNumber: 'Registration number',
      phone: 'Phone',
      email: 'Email',
      service: 'Service',
      message: 'Message'
    },
    signOff: 'Best regards,',
    signature: 'Fire Impex / Galimpex Team',
    contactLine: 'For urgent matters, please call 11-463614.'
  }
} as const

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default defineEventHandler(async (event) => {
  const body = await readBody<ContactPayload>(event)

  const name = body?.name?.trim() ?? ''
  const company = body?.company?.trim() ?? ''
  const companyName = body?.companyName?.trim() ?? ''
  const regNumber = body?.regNumber?.trim() ?? ''
  const phone = body?.phone?.trim() ?? ''
  const email = body?.email?.trim() ?? ''
  const service = body?.service?.trim() ?? ''
  const message = body?.message?.trim() ?? ''
  const locale = body?.locale === 'mn' ? 'mn' : 'en'

  if (!name || !companyName || !regNumber || !phone || !email || !message) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing required fields'
    })
  }

  if (!EMAIL_REGEX.test(email)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid email address'
    })
  }

  const turnstileToken = body?.turnstileToken?.trim() ?? ''
  if (!turnstileToken) {
    throw createError({ statusCode: 400, statusMessage: 'Missing CAPTCHA token' })
  }

  const turnstileResult = await verifyTurnstileToken(turnstileToken)
  if (!turnstileResult.success) {
    throw createError({ statusCode: 400, statusMessage: 'CAPTCHA verification failed' })
  }

  const config = useRuntimeConfig()

  const transporter = nodemailer.createTransport({
    host: config.smtpHost,
    port: Number(config.smtpPort),
    secure: true,
    auth: {
      user: config.smtpUser,
      pass: config.smtpPass
    }
  })

  const escape = (value: string) =>
    value
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;')

  const html = `
    <h2>New contact form submission</h2>
    <table cellpadding="6" cellspacing="0" border="0" style="font-family: Arial, sans-serif; font-size: 14px;">
      <tr><td><strong>Name:</strong></td><td>${escape(name)}</td></tr>
      <tr><td><strong>Company:</strong></td><td>${escape(company) || '-'}</td></tr>
      <tr><td><strong>Company name:</strong></td><td>${escape(companyName)}</td></tr>
      <tr><td><strong>Registration number:</strong></td><td>${escape(regNumber)}</td></tr>
      <tr><td><strong>Phone:</strong></td><td>${escape(phone)}</td></tr>
      <tr><td><strong>Email:</strong></td><td>${escape(email)}</td></tr>
      <tr><td><strong>Service:</strong></td><td>${escape(service) || '-'}</td></tr>
      <tr><td valign="top"><strong>Message:</strong></td><td>${escape(message).replace(/\n/g, '<br/>')}</td></tr>
    </table>
  `

  const text = [
    'New contact form submission',
    '',
    `Name: ${name}`,
    `Company: ${company || '-'}`,
    `Company name: ${companyName}`,
    `Registration number: ${regNumber}`,
    `Phone: ${phone}`,
    `Email: ${email}`,
    `Service: ${service || '-'}`,
    '',
    'Message:',
    message
  ].join('\n')

  try {
    await transporter.sendMail({
      from: `"Galimpex Website" <${config.smtpUser}>`,
      to: ['info@fire-impex.mn', 'sergelen@galimpex.mn'],
      replyTo: email,
      subject: `New contact form submission from ${name}`,
      text,
      html
    })
  } catch (err) {
    console.error('[contact] Failed to send notification email:', err)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to send email'
    })
  }

  // Confirmation email to the visitor (Mongolian or English based on site locale)
  const tpl = CONFIRMATION_TEMPLATES[locale]

  const summaryRowsHtml = [
    [tpl.fields.name, name],
    [tpl.fields.company, company],
    [tpl.fields.companyName, companyName],
    [tpl.fields.regNumber, regNumber],
    [tpl.fields.phone, phone],
    [tpl.fields.email, email],
    [tpl.fields.service, service],
    [tpl.fields.message, message]
  ]
    .filter(([, value]) => value)
    .map(
      ([label, value]) =>
        `<tr><td valign="top" style="padding:4px 12px 4px 0;color:#666;"><strong>${escape(label)}:</strong></td><td style="padding:4px 0;">${escape(value).replace(/\n/g, '<br/>')}</td></tr>`
    )
    .join('')

  const confirmationHtml = `
    <div style="font-family: Arial, sans-serif; font-size: 14px; color: #333; line-height: 1.6;">
      <p>${escape(tpl.greeting(name))}</p>
      <p>${escape(tpl.body)}</p>
      <h3 style="margin-top:24px;margin-bottom:8px;font-size:14px;">${escape(tpl.summaryTitle)}</h3>
      <table cellpadding="0" cellspacing="0" border="0">${summaryRowsHtml}</table>
      <p style="margin-top:24px;color:#666;">${escape(tpl.contactLine)}</p>
      <p style="margin-top:24px;">${escape(tpl.signOff)}<br/><strong>${escape(tpl.signature)}</strong></p>
    </div>
  `

  const summaryRowsText = [
    [tpl.fields.name, name],
    [tpl.fields.company, company],
    [tpl.fields.companyName, companyName],
    [tpl.fields.regNumber, regNumber],
    [tpl.fields.phone, phone],
    [tpl.fields.email, email],
    [tpl.fields.service, service],
    [tpl.fields.message, message]
  ]
    .filter(([, value]) => value)
    .map(([label, value]) => `${label}: ${value}`)
    .join('\n')

  const confirmationText = [
    tpl.greeting(name),
    '',
    tpl.body,
    '',
    tpl.summaryTitle,
    summaryRowsText,
    '',
    tpl.contactLine,
    '',
    tpl.signOff,
    tpl.signature
  ].join('\n')

  try {
    await transporter.sendMail({
      from: `"Fire Impex" <${config.smtpUser}>`,
      to: email,
      subject: tpl.subject,
      text: confirmationText,
      html: confirmationHtml
    })
  } catch (err) {
    // Don't fail the request if the confirmation fails — the inquiry has already been received.
    console.error('[contact] Failed to send confirmation email:', err)
  }

  return { success: true }
})
