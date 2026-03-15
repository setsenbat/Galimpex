<template>
  <div class="font-sans text-brand-text">

    <!-- Hero -->
    <section class="relative pt-32 pb-16 px-4 md:px-6 bg-brand-text bg-cover bg-center" :style="{ backgroundImage: `url(${heroBg})` }">
      <div class="absolute inset-0 bg-black/70"></div>
      <div class="max-w-7xl mx-auto relative z-10">
        <p class="text-xs font-semibold uppercase tracking-widest text-brand-yellow mb-3">{{ $t('contactPage.hero.title') }}</p>
        <h1 class="text-3xl md:text-5xl font-bold text-white leading-tight mb-4 max-w-2xl">
          {{ $t('contactPage.hero.subtitle') }}
        </h1>
        <p class="text-sm md:text-base text-gray-300 max-w-xl leading-relaxed mb-8">
          {{ $t('contactPage.hero.description') }}
        </p>
        <div class="flex flex-wrap gap-3">
          <a href="#contact-form" class="px-5 py-2.5 bg-brand-red text-white text-sm font-semibold rounded hover:bg-red-700 transition-colors">
            {{ $t('contactPage.hero.ctaPrimary') }}
          </a>
          <a href="tel:11463614" class="px-5 py-2.5 border border-white text-white text-sm font-semibold rounded hover:bg-white hover:text-brand-text transition-colors">
            {{ $t('contactPage.hero.ctaSecondary') }}
          </a>
        </div>
      </div>
    </section>

    <!-- Contact Overview -->
    <section class="py-12 px-4 md:px-6 max-w-7xl mx-auto">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
        <a v-for="dept in departments" :key="dept.titleKey" :href="`mailto:${dept.email}`" class="flex items-start gap-4 p-5 border border-gray-200 rounded-lg hover:border-brand-red hover:shadow-sm transition-all group">
          <Icon name="heroicons:envelope" class="w-6 h-6 text-brand-red flex-shrink-0 mt-0.5" />
          <div>
            <div class="text-sm font-semibold text-brand-text mb-1">{{ $t(dept.titleKey) }}</div>
            <div class="text-sm text-gray-500 group-hover:text-brand-red transition-colors">{{ dept.email }}</div>
          </div>
        </a>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <a v-for="phone in phones" :key="phone.titleKey" :href="`tel:${phone.number.replace(/-/g, '')}`" class="flex items-start gap-4 p-5 border border-gray-200 rounded-lg hover:border-brand-red hover:shadow-sm transition-all group">
          <Icon name="heroicons:phone" class="w-6 h-6 text-brand-red flex-shrink-0 mt-0.5" />
          <div>
            <div class="text-sm font-semibold text-brand-text mb-1">{{ $t(phone.titleKey) }}</div>
            <div class="text-sm text-gray-500 group-hover:text-brand-red transition-colors">{{ $t(phone.numberKey) }}</div>
          </div>
        </a>
      </div>
    </section>

    <!-- Office Locations -->
    <section class="py-12 px-4 md:px-6 bg-gray-50">
      <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

        <!-- Head Office -->
        <div class="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <div class="p-6">
            <div class="flex items-center gap-2 mb-4">
              <Icon name="heroicons:building-office-2" class="w-6 h-6 text-brand-red" />
              <h2 class="text-lg font-bold text-brand-text">{{ $t('contactPage.headOffice.title') }}</h2>
            </div>
            <div class="space-y-3 text-sm text-gray-600">
              <div class="flex items-start gap-2">
                <Icon name="heroicons:map-pin" class="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                <span>{{ $t('contactPage.headOffice.address') }}</span>
              </div>
              <div class="flex items-center gap-2">
                <Icon name="heroicons:envelope" class="w-4 h-4 text-gray-400 flex-shrink-0" />
                <a href="mailto:sales@galimpex.mn" class="hover:text-brand-red transition-colors">sales@galimpex.mn</a>
              </div>
              <div class="flex items-center gap-2">
                <Icon name="heroicons:globe-alt" class="w-4 h-4 text-gray-400 flex-shrink-0" />
                <a href="https://www.galimpex.mn" target="_blank" class="hover:text-brand-red transition-colors">{{ $t('contactPage.headOffice.website') }}</a>
              </div>
              <div class="flex items-start gap-2">
                <Icon name="heroicons:phone" class="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                <div class="flex flex-col gap-1">
                  <a href="tel:11463614" class="hover:text-brand-red transition-colors">{{ $t('contactPage.headOffice.hotline1') }}</a>
                  <a href="tel:94990101" class="hover:text-brand-red transition-colors">{{ $t('contactPage.headOffice.hotline2') }}</a>
                  <a href="tel:80870101" class="hover:text-brand-red transition-colors">{{ $t('contactPage.headOffice.hotline3') }}</a>
                </div>
              </div>
            </div>
          </div>
          <div class="h-48 bg-gray-200 relative overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2673.5!2d106.9154!3d47.9177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDU1JzAzLjYiTiAxMDbCsDU0JzU1LjQiRQ!5e0!3m2!1sen!2smn!4v1"
              width="100%"
              height="100%"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              class="absolute inset-0"
            ></iframe>
          </div>
        </div>

        <!-- Warehouse -->
        <div class="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <div class="p-6">
            <div class="flex items-center gap-2 mb-4">
              <Icon name="heroicons:archive-box" class="w-6 h-6 text-brand-green" />
              <h2 class="text-lg font-bold text-brand-text">{{ $t('contactPage.warehouse.title') }}</h2>
            </div>
            <div class="space-y-3 text-sm text-gray-600">
              <div class="flex items-start gap-2">
                <Icon name="heroicons:map-pin" class="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                <span>{{ $t('contactPage.warehouse.address') }}</span>
              </div>
              <div class="flex items-center gap-2">
                <Icon name="heroicons:envelope" class="w-4 h-4 text-gray-400 flex-shrink-0" />
                <a href="mailto:sales@galimpex.mn" class="hover:text-brand-red transition-colors">sales@galimpex.mn</a>
              </div>
              <div class="flex items-start gap-2">
                <Icon name="heroicons:phone" class="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                <div class="flex flex-col gap-1">
                  <a href="tel:11463614" class="hover:text-brand-red transition-colors">{{ $t('contactPage.warehouse.phone1') }}</a>
                  <a href="tel:80670101" class="hover:text-brand-red transition-colors">{{ $t('contactPage.warehouse.phone2') }}</a>
                </div>
              </div>
            </div>
          </div>
          <div class="h-48 bg-gray-200 relative overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2678.5!2d106.8234!3d47.8877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDUzJzE1LjciTiAxMDbCsDQ5JzI0LjIiRQ!5e0!3m2!1sen!2smn!4v1"
              width="100%"
              height="100%"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              class="absolute inset-0"
            ></iframe>
          </div>
        </div>

      </div>
    </section>

    <!-- Contact Form + Business Hours -->
    <section id="contact-form" class="py-16 px-4 md:px-6 max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">

        <!-- Form -->
        <div class="lg:col-span-2">
          <h2 class="text-2xl font-bold text-brand-text mb-6">{{ $t('contactPage.form.title') }}</h2>
          <form class="space-y-4" @submit.prevent>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                :placeholder="$t('contactPage.form.name')"
                class="w-full px-4 py-3 border border-gray-200 rounded text-sm focus:outline-none focus:border-brand-red transition-colors"
              />
              <input
                type="text"
                :placeholder="$t('contactPage.form.company')"
                class="w-full px-4 py-3 border border-gray-200 rounded text-sm focus:outline-none focus:border-brand-red transition-colors"
              />
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="tel"
                :placeholder="$t('contactPage.form.phone')"
                class="w-full px-4 py-3 border border-gray-200 rounded text-sm focus:outline-none focus:border-brand-red transition-colors"
              />
              <input
                type="email"
                :placeholder="$t('contactPage.form.email')"
                class="w-full px-4 py-3 border border-gray-200 rounded text-sm focus:outline-none focus:border-brand-red transition-colors"
              />
            </div>
            <select class="w-full px-4 py-3 border border-gray-200 rounded text-sm text-gray-500 focus:outline-none focus:border-brand-red transition-colors bg-white">
              <option value="">{{ $t('contactPage.form.service') }}</option>
              <option value="supply">{{ $t('contactPage.form.serviceOptions.supply') }}</option>
              <option value="installation">{{ $t('contactPage.form.serviceOptions.installation') }}</option>
              <option value="inspection">{{ $t('contactPage.form.serviceOptions.inspection') }}</option>
              <option value="training">{{ $t('contactPage.form.serviceOptions.training') }}</option>
              <option value="compliance">{{ $t('contactPage.form.serviceOptions.compliance') }}</option>
            </select>
            <textarea
              rows="5"
              :placeholder="$t('contactPage.form.message')"
              class="w-full px-4 py-3 border border-gray-200 rounded text-sm focus:outline-none focus:border-brand-red transition-colors resize-none"
            ></textarea>
            <button
              type="submit"
              class="px-6 py-3 bg-brand-red text-white text-sm font-semibold rounded hover:bg-red-700 transition-colors"
            >
              {{ $t('contactPage.form.submit') }}
            </button>
          </form>
        </div>

        <!-- Sidebar -->
        <div class="space-y-6">
          <!-- Business Hours -->
          <div class="border border-gray-200 rounded-lg p-6">
            <h3 class="font-bold text-brand-text mb-4">{{ $t('contactPage.hours.title') }}</h3>
            <div class="space-y-2 text-sm text-gray-600">
              <div class="font-medium text-brand-text">{{ $t('contactPage.hours.weekdays') }}</div>
              <div class="text-lg font-bold text-brand-red">{{ $t('contactPage.hours.time') }}</div>
              <p class="text-xs text-gray-500 leading-relaxed pt-2 border-t border-gray-100">
                {{ $t('contactPage.hours.emergency') }}
              </p>
            </div>
          </div>

          <!-- Quick Contact -->
          <div class="border border-gray-200 rounded-lg p-6 space-y-4">
            <h3 class="font-bold text-brand-text">Quick Contact</h3>
            <a href="mailto:sales@galimpex.mn" class="flex items-center gap-3 text-sm text-gray-600 hover:text-brand-red transition-colors">
              <Icon name="heroicons:envelope" class="w-5 h-5 text-brand-red flex-shrink-0" />
              sales@galimpex.mn
            </a>
            <a href="tel:11463614" class="flex items-center gap-3 text-sm text-gray-600 hover:text-brand-red transition-colors">
              <Icon name="heroicons:phone" class="w-5 h-5 text-brand-red flex-shrink-0" />
              11-463614
            </a>
            <a href="tel:80840101" class="flex items-center gap-3 text-sm text-gray-600 hover:text-brand-red transition-colors">
              <Icon name="heroicons:phone-arrow-down-left" class="w-5 h-5 text-brand-green flex-shrink-0" />
              80840101
            </a>
          </div>
        </div>

      </div>
    </section>

    <!-- CTA -->
    <section class="py-16 px-4 md:px-6 bg-brand-text">
      <div class="max-w-2xl mx-auto text-center">
        <h2 class="text-2xl md:text-3xl font-bold text-white mb-4">{{ $t('contactPage.cta.title') }}</h2>
        <p class="text-sm md:text-base text-gray-300 leading-relaxed mb-8">{{ $t('contactPage.cta.description') }}</p>
        <a href="#contact-form" class="inline-block px-6 py-3 bg-brand-red text-white text-sm font-semibold rounded hover:bg-red-700 transition-colors">
          {{ $t('contactPage.cta.button') }}
        </a>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import heroBg from '~/assets/images/webImages/isawred-PDbrz9VEAFA-unsplash.jpg?url'

useHead({
  title: 'Contact — Gal Impex'
})

const departments = [
  { titleKey: 'contactPage.overview.generalTitle', email: 'info@galimpex.mn' },
  { titleKey: 'contactPage.overview.salesTitle', email: 'sales@galimpex.mn' },
  { titleKey: 'contactPage.overview.techTitle', email: 'systems@galimpex.mn' }
]

const phones = [
  { titleKey: 'contactPage.overview.salesHotlineTitle', numberKey: 'contactPage.overview.salesHotlinePhone', number: '11-463614' },
  { titleKey: 'contactPage.overview.techSupportTitle', numberKey: 'contactPage.overview.techSupportPhone', number: '80840101' }
]
</script>
