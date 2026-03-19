<template>
  <div class="font-sans text-brand-text">

    <!-- Hero -->
    <section class="relative pt-32 pb-16 px-4 md:px-6 bg-brand-text bg-cover bg-center" :style="{ backgroundImage: `url(${heroBg})` }">
      <div class="absolute inset-0 bg-black/70"></div>
      <div class="max-w-7xl mx-auto relative z-10">
        <p class="text-xs font-semibold uppercase tracking-widest text-brand-yellow mb-3">{{ $t('packagesPage.hero.title') }}</p>
        <p class="text-base md:text-lg text-gray-300 max-w-2xl leading-relaxed mb-8">
          {{ $t('packagesPage.hero.description') }}
        </p>
        <div class="flex flex-wrap gap-3 mb-10">
          <a href="#contact-form" class="px-5 py-2.5 bg-brand-red text-white text-sm font-semibold rounded hover:bg-red-700 transition-colors">
            {{ $t('packagesPage.hero.ctaPrimary') }}
          </a>
          <a href="/contact" class="px-5 py-2.5 border border-white text-white text-sm font-semibold rounded hover:bg-white hover:text-brand-text transition-colors">
            {{ $t('packagesPage.hero.ctaSecondary') }}
          </a>
        </div>
        <!-- Trust row -->
        <div class="flex flex-wrap gap-4 md:gap-8">
          <div v-for="i in 4" :key="i" class="flex items-center gap-2 text-sm text-green-400">
            <Icon name="heroicons:check-circle" class="w-4 h-4 flex-shrink-0" />
            <span>{{ $t(`packagesPage.hero.trust${i}`) }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Package Cards -->
    <section class="py-16 px-4 md:px-6 max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">

        <!-- Basic -->
        <div class="border border-gray-200 rounded-lg p-8">
          <div class="mb-4">
            <div class="font-bold text-brand-text text-xl mb-1">{{ $t('landing.packages.basic.title') }}</div>
            <div class="text-xs text-gray-400 mb-4">{{ $t('packagesPage.packages.basic.target') }}</div>
            <div class="flex items-baseline gap-1">
              <span class="text-sm text-gray-500">{{ $t('landing.packages.from') }}</span>
              <span class="text-3xl font-bold text-brand-text">{{ $t('landing.packages.basic.price') }}</span>
            </div>
            <div class="text-xs text-gray-400 mt-1">/ {{ $t('landing.packages.basic.annual') }}</div>
          </div>
          <ul class="space-y-3 mb-8">
            <li v-for="i in 4" :key="i" class="flex items-start gap-2 text-sm text-gray-700">
              <Icon name="heroicons:check-circle" class="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
              {{ $t(`packagesPage.packages.basic.feature${i}`) }}
            </li>
          </ul>
          <a href="#contact-form" class="block w-full text-center px-5 py-3 border border-brand-red text-brand-red text-sm font-semibold rounded hover:bg-brand-red hover:text-white transition-colors">
            {{ $t('packagesPage.packages.basic.cta') }}
          </a>
        </div>

        <!-- Standard (Most popular) -->
        <div class="border-2 border-brand-red rounded-lg p-8 relative shadow-lg">
          <span class="absolute -top-3.5 left-6 bg-brand-red text-white text-xs font-semibold px-4 py-1 rounded-full">
            {{ $t('landing.packages.mostPopular') }}
          </span>
          <div class="mb-4">
            <div class="font-bold text-brand-text text-xl mb-1">{{ $t('landing.packages.standard.title') }}</div>
            <div class="text-xs text-gray-400 mb-4">{{ $t('packagesPage.packages.standard.target') }}</div>
            <div class="flex items-baseline gap-1">
              <span class="text-sm text-gray-500">{{ $t('landing.packages.from') }}</span>
              <span class="text-3xl font-bold text-brand-text">{{ $t('landing.packages.standard.price') }}</span>
            </div>
            <div class="text-xs text-gray-400 mt-1">/ {{ $t('landing.packages.standard.quarterly') }}</div>
          </div>
          <ul class="space-y-3 mb-8">
            <li v-for="i in 5" :key="i" class="flex items-start gap-2 text-sm text-gray-700">
              <Icon name="heroicons:check-circle" class="w-5 h-5 text-brand-red mt-0.5 flex-shrink-0" />
              {{ $t(`packagesPage.packages.standard.feature${i}`) }}
            </li>
          </ul>
          <a href="#contact-form" class="block w-full text-center px-5 py-3 bg-brand-red text-white text-sm font-semibold rounded hover:bg-red-700 transition-colors">
            {{ $t('packagesPage.packages.standard.cta') }}
          </a>
        </div>

        <!-- Premium -->
        <div class="border border-gray-200 rounded-lg p-8">
          <div class="mb-4">
            <div class="font-bold text-brand-text text-xl mb-1">{{ $t('landing.packages.premium.title') }}</div>
            <div class="text-xs text-gray-400 mb-4">{{ $t('packagesPage.packages.premium.target') }}</div>
            <div class="flex items-baseline gap-1">
              <span class="text-sm text-gray-500">{{ $t('landing.packages.from') }}</span>
              <span class="text-3xl font-bold text-brand-text">{{ $t('landing.packages.premium.price') }}</span>
            </div>
            <div class="text-xs text-gray-400 mt-1">/ {{ $t('landing.packages.premium.monthly') }}</div>
          </div>
          <ul class="space-y-3 mb-8">
            <li v-for="i in 6" :key="i" class="flex items-start gap-2 text-sm text-gray-700">
              <Icon name="heroicons:check-circle" class="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
              {{ $t(`packagesPage.packages.premium.feature${i}`) }}
            </li>
          </ul>
          <a href="/contact" class="block w-full text-center px-5 py-3 border border-brand-red text-brand-red text-sm font-semibold rounded hover:bg-brand-red hover:text-white transition-colors">
            {{ $t('packagesPage.packages.premium.cta') }}
          </a>
        </div>

      </div>
    </section>

    <!-- Included in Every Package -->
    <section class="py-12 px-4 md:px-6 bg-brand-green/10 border-y border-brand-green/20">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-xl font-bold text-brand-text mb-6 text-center">{{ $t('packagesPage.included.title') }}</h2>
        <div class="flex flex-wrap justify-center gap-4 md:gap-8">
          <div v-for="i in 5" :key="i" class="flex items-center gap-2 text-sm text-gray-700">
            <Icon name="heroicons:check-circle" class="w-5 h-5 text-brand-green flex-shrink-0" />
            {{ $t(`packagesPage.included.item${i}`) }}
          </div>
        </div>
      </div>
    </section>

    <!-- Detailed Comparison Table -->
    <section class="py-16 px-4 md:px-6 max-w-7xl mx-auto">
      <h2 class="text-2xl md:text-3xl font-bold text-brand-text mb-8">{{ $t('packagesPage.comparison.title') }}</h2>
      <div class="overflow-x-auto">
        <table class="w-full border-collapse text-sm">
          <thead>
            <tr class="border-b-2 border-gray-200">
              <th class="text-left py-3 px-4 font-semibold text-brand-text w-1/2">{{ $t('packagesPage.comparison.feature') }}</th>
              <th class="text-center py-3 px-4 font-semibold text-brand-text">{{ $t('packagesPage.comparison.basic') }}</th>
              <th class="text-center py-3 px-4 font-semibold text-brand-red border-x border-brand-red/20 bg-red-50">{{ $t('packagesPage.comparison.standard') }}</th>
              <th class="text-center py-3 px-4 font-semibold text-brand-text">{{ $t('packagesPage.comparison.premium') }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in comparisonRows" :key="row.feature" class="border-b border-gray-100 hover:bg-gray-50">
              <td class="py-3 px-4 text-gray-700">{{ $t(row.feature) }}</td>
              <td class="py-3 px-4 text-center text-gray-600">
                <template v-if="row.basic === 'check'">
                  <Icon name="heroicons:check" class="w-4 h-4 text-brand-green mx-auto" />
                </template>
                <template v-else-if="row.basic === 'dash'">
                  <span class="text-gray-300">—</span>
                </template>
                <template v-else>{{ $t(row.basic) }}</template>
              </td>
              <td class="py-3 px-4 text-center text-gray-600 bg-red-50 border-x border-brand-red/20">
                <template v-if="row.standard === 'check'">
                  <Icon name="heroicons:check" class="w-4 h-4 text-brand-red mx-auto" />
                </template>
                <template v-else-if="row.standard === 'dash'">
                  <span class="text-gray-300">—</span>
                </template>
                <template v-else>{{ $t(row.standard) }}</template>
              </td>
              <td class="py-3 px-4 text-center text-gray-600">
                <template v-if="row.premium === 'check'">
                  <Icon name="heroicons:check" class="w-4 h-4 text-brand-green mx-auto" />
                </template>
                <template v-else-if="row.premium === 'dash'">
                  <span class="text-gray-300">—</span>
                </template>
                <template v-else>{{ $t(row.premium) }}</template>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- Who Is This For -->
    <section class="py-16 px-4 md:px-6 bg-gray-50">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">{{ $t('packagesPage.whoFor.title') }}</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div v-for="tier in whoForTiers" :key="tier.titleKey" class="bg-white border rounded-lg p-6 text-center" :class="tier.border">
            <Icon :name="tier.icon" class="w-10 h-10 mx-auto mb-3" :class="tier.color" />
            <div class="font-bold text-brand-text text-lg mb-2">{{ $t(tier.titleKey) }}</div>
            <p class="text-sm text-gray-500">{{ $t(tier.targetKey) }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works -->
    <section class="py-16 px-4 md:px-6 max-w-7xl mx-auto">
      <h2 class="text-2xl md:text-3xl font-bold text-brand-text mb-10 text-center">{{ $t('packagesPage.process.title') }}</h2>
      <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4">
        <div v-for="(step, index) in processSteps" :key="step.key" class="text-center">
          <div class="w-12 h-12 rounded-full bg-brand-red text-white flex items-center justify-center text-lg font-bold mx-auto mb-3">
            {{ index + 1 }}
          </div>
          <p class="text-sm font-medium text-brand-text">{{ $t(step.key) }}</p>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="py-16 px-4 md:px-6 bg-gray-50">
      <div class="max-w-3xl mx-auto">
        <h2 class="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">{{ $t('packagesPage.faq.title') }}</h2>
        <div class="space-y-4">
          <div
            v-for="(faq, index) in faqs"
            :key="faq.qKey"
            class="bg-white border border-gray-200 rounded-lg overflow-hidden"
          >
            <button
              class="w-full flex items-center justify-between px-6 py-4 text-left font-semibold text-brand-text text-sm hover:text-brand-red transition-colors"
              @click="openFaq === index ? openFaq = null : openFaq = index"
            >
              {{ $t(faq.qKey) }}
              <Icon
                name="heroicons:chevron-down"
                class="w-5 h-5 flex-shrink-0 transition-transform"
                :class="openFaq === index ? 'rotate-180' : ''"
              />
            </button>
            <div v-if="openFaq === index" class="px-6 pb-5 text-sm text-gray-600 leading-relaxed">
              {{ $t(faq.aKey) }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Band -->
    <section class="py-14 px-4 md:px-6 bg-brand-red">
      <div class="max-w-2xl mx-auto text-center">
        <h2 class="text-2xl md:text-3xl font-bold text-white mb-4">{{ $t('packagesPage.cta.title') }}</h2>
        <p class="text-sm md:text-base text-red-100 leading-relaxed mb-8">{{ $t('packagesPage.cta.description') }}</p>
        <div class="flex flex-wrap justify-center gap-3">
          <a href="#contact-form" class="px-6 py-3 bg-white text-brand-red text-sm font-semibold rounded hover:bg-gray-100 transition-colors">
            {{ $t('packagesPage.cta.ctaPrimary') }}
          </a>
          <a href="/contact" class="px-6 py-3 border border-white text-white text-sm font-semibold rounded hover:bg-white hover:text-brand-red transition-colors">
            {{ $t('packagesPage.cta.ctaSecondary') }}
          </a>
        </div>
      </div>
    </section>

    <!-- Contact Form + Sidebar -->
    <section id="contact-form" class="py-16 px-4 md:px-6 max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">

        <!-- Form -->
        <div class="lg:col-span-2">
          <h2 class="text-2xl font-bold text-brand-text mb-6">{{ $t('packagesPage.form.title') }}</h2>
          <form class="space-y-4" @submit.prevent>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="text" :placeholder="$t('landing.contact.namePlaceholder')" class="w-full px-4 py-3 border border-gray-200 rounded text-sm focus:outline-none focus:border-brand-red transition-colors" />
              <input type="text" :placeholder="$t('landing.contact.companyPlaceholder')" class="w-full px-4 py-3 border border-gray-200 rounded text-sm focus:outline-none focus:border-brand-red transition-colors" />
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="tel" :placeholder="$t('landing.contact.phonePlaceholder')" class="w-full px-4 py-3 border border-gray-200 rounded text-sm focus:outline-none focus:border-brand-red transition-colors" />
              <input type="email" :placeholder="$t('landing.contact.emailPlaceholder')" class="w-full px-4 py-3 border border-gray-200 rounded text-sm focus:outline-none focus:border-brand-red transition-colors" />
            </div>
            <select class="w-full px-4 py-3 border border-gray-200 rounded text-sm text-gray-500 focus:outline-none focus:border-brand-red transition-colors bg-white">
              <option value="">{{ $t('packagesPage.form.facilityType') }}</option>
              <option value="office">Office / Commercial</option>
              <option value="industrial">Industrial / Warehouse</option>
              <option value="school">School / Hospital</option>
              <option value="hotel">Hotel / Public building</option>
            </select>
            <select class="w-full px-4 py-3 border border-gray-200 rounded text-sm text-gray-500 focus:outline-none focus:border-brand-red transition-colors bg-white">
              <option value="">{{ $t('packagesPage.form.interestedPackage') }}</option>
              <option value="basic">{{ $t('landing.packages.basic.title') }}</option>
              <option value="standard">{{ $t('landing.packages.standard.title') }}</option>
              <option value="premium">{{ $t('landing.packages.premium.title') }}</option>
            </select>
            <textarea rows="4" :placeholder="$t('landing.contact.messagePlaceholder')" class="w-full px-4 py-3 border border-gray-200 rounded text-sm focus:outline-none focus:border-brand-red transition-colors resize-none"></textarea>
            <button type="submit" class="px-6 py-3 bg-brand-red text-white text-sm font-semibold rounded hover:bg-red-700 transition-colors">
              {{ $t('packagesPage.form.submit') }}
            </button>
          </form>
        </div>

        <!-- Sidebar -->
        <div class="space-y-5">
          <div class="border border-gray-200 rounded-lg p-6">
            <h3 class="font-bold text-brand-text mb-4">{{ $t('packagesPage.form.sidebarTitle') }}</h3>
            <div class="space-y-3">
              <a href="tel:11463614" class="flex items-center gap-3 text-sm text-gray-600 hover:text-brand-red transition-colors">
                <Icon name="heroicons:phone" class="w-5 h-5 text-brand-red flex-shrink-0" />
                {{ $t('packagesPage.form.sidebarCall') }} — 11-463614
              </a>
              <a href="mailto:sales@galimpex.mn" class="flex items-center gap-3 text-sm text-gray-600 hover:text-brand-red transition-colors">
                <Icon name="heroicons:envelope" class="w-5 h-5 text-brand-red flex-shrink-0" />
                {{ $t('packagesPage.form.sidebarEmail') }}
              </a>
              <div class="flex items-center gap-3 text-sm text-gray-500">
                <Icon name="heroicons:clock" class="w-5 h-5 text-gray-400 flex-shrink-0" />
                {{ $t('packagesPage.form.sidebarHours') }}
              </div>
            </div>
          </div>
          <!-- Package quick overview -->
          <div class="border border-gray-200 rounded-lg p-6 space-y-3">
            <div v-for="pkg in packageSummary" :key="pkg.name" class="flex items-center justify-between text-sm">
              <span class="font-semibold text-brand-text">{{ pkg.name }}</span>
              <span class="text-gray-500">{{ pkg.freq }}</span>
            </div>
          </div>
        </div>

      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import heroBg from '~/assets/images/webImages/getty-images-y0GoEcI3p4A-unsplash.jpg?url'

useHead({
  title: 'Packages — Gal Impex'
})

const openFaq = ref<number | null>(null)

const comparisonRows = [
  {
    feature: 'packagesPage.comparison.inspection',
    basic: 'packagesPage.comparison.annual',
    standard: 'packagesPage.comparison.quarterly',
    premium: 'packagesPage.comparison.monthly'
  },
  {
    feature: 'packagesPage.comparison.refill',
    basic: 'check',
    standard: 'check',
    premium: 'check'
  },
  {
    feature: 'packagesPage.comparison.system',
    basic: 'packagesPage.comparison.optional',
    standard: 'check',
    premium: 'check'
  },
  {
    feature: 'packagesPage.comparison.training',
    basic: 'packagesPage.comparison.optional',
    standard: 'check',
    premium: 'check'
  },
  {
    feature: 'packagesPage.comparison.reports',
    basic: 'packagesPage.comparison.basicReports',
    standard: 'packagesPage.comparison.standardReports',
    premium: 'packagesPage.comparison.fullReports'
  },
  {
    feature: 'packagesPage.comparison.engineer',
    basic: 'dash',
    standard: 'dash',
    premium: 'check'
  },
  {
    feature: 'packagesPage.comparison.priority',
    basic: 'dash',
    standard: 'packagesPage.comparison.standard',
    premium: 'packagesPage.comparison.priorityValue'
  }
]

const whoForTiers = [
  {
    icon: 'heroicons:building-office',
    color: 'text-brand-green',
    border: 'border-gray-200',
    titleKey: 'packagesPage.whoFor.basicTitle',
    targetKey: 'packagesPage.whoFor.basicTarget'
  },
  {
    icon: 'heroicons:building-office-2',
    color: 'text-brand-red',
    border: 'border-2 border-brand-red',
    titleKey: 'packagesPage.whoFor.standardTitle',
    targetKey: 'packagesPage.whoFor.standardTarget'
  },
  {
    icon: 'heroicons:cog-6-tooth',
    color: 'text-brand-yellow',
    border: 'border-gray-200',
    titleKey: 'packagesPage.whoFor.premiumTitle',
    targetKey: 'packagesPage.whoFor.premiumTarget'
  }
]

const processSteps = [
  { key: 'packagesPage.process.step1' },
  { key: 'packagesPage.process.step2' },
  { key: 'packagesPage.process.step3' },
  { key: 'packagesPage.process.step4' },
  { key: 'packagesPage.process.step5' }
]

const faqs = [
  { qKey: 'packagesPage.faq.q1', aKey: 'packagesPage.faq.a1' },
  { qKey: 'packagesPage.faq.q2', aKey: 'packagesPage.faq.a2' },
  { qKey: 'packagesPage.faq.q3', aKey: 'packagesPage.faq.a3' },
  { qKey: 'packagesPage.faq.q4', aKey: 'packagesPage.faq.a4' },
  { qKey: 'packagesPage.faq.q5', aKey: 'packagesPage.faq.a5' }
]

const packageSummary = [
  { name: 'Basic', freq: 'Annual' },
  { name: 'Standard', freq: 'Quarterly' },
  { name: 'Premium', freq: 'Monthly' }
]
</script>
