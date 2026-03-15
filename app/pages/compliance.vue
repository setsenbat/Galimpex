<template>
  <div class="font-sans text-brand-text">

    <!-- Hero -->
    <section class="relative pt-32 pb-20 px-4 md:px-6 bg-brand-text bg-cover bg-center" :style="{ backgroundImage: `url(${heroBg})` }">
      <div class="absolute inset-0 bg-black/70"></div>
      <div class="max-w-7xl mx-auto relative z-10">
        <h1 class="text-3xl md:text-5xl font-bold text-white leading-tight mb-4 max-w-3xl">
          {{ $t('compliancePage.hero.title') }}
        </h1>
        <p class="text-sm md:text-base text-gray-300 max-w-2xl leading-relaxed mb-8">
          {{ $t('compliancePage.hero.description') }}
        </p>
        <a href="/contact" class="inline-block px-5 py-2.5 bg-brand-red text-white text-sm font-semibold rounded hover:bg-red-700 transition-colors">
          {{ $t('compliancePage.hero.button') }}
        </a>
      </div>
    </section>

    <!-- Why Compliance Matters -->
    <section class="py-16 px-4 md:px-6 max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 class="text-2xl md:text-3xl font-bold text-brand-text mb-4">{{ $t('compliancePage.why.title') }}</h2>
          <p class="text-sm md:text-base text-gray-600 leading-relaxed mb-6">{{ $t('compliancePage.why.description') }}</p>
          <ul class="space-y-3">
            <li v-for="item in whyItems" :key="item" class="flex items-start gap-3">
              <Icon name="heroicons:check-circle" class="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
              <span class="text-sm text-gray-700">{{ $t(item) }}</span>
            </li>
          </ul>
        </div>
        <div class="bg-brand-red/5 border border-brand-red/20 rounded-lg p-8">
          <Icon name="heroicons:shield-check" class="w-12 h-12 text-brand-red mb-4" />
          <p class="text-sm text-gray-600 leading-relaxed italic">
            "Regular fire safety inspection and documentation keep your organization prepared for any regulatory inspection — and any emergency."
          </p>
        </div>
      </div>
    </section>

    <!-- Standards We Follow -->
    <section class="py-16 px-4 md:px-6 bg-gray-50">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-2xl md:text-3xl font-bold text-brand-text mb-2 text-center">{{ $t('compliancePage.standards.title') }}</h2>
        <p class="text-sm text-gray-500 text-center mb-8 max-w-xl mx-auto">{{ $t('compliancePage.standards.description') }}</p>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div class="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-sm transition-shadow">
            <img src="~/assets/images/projectImages/mns_logo.png" alt="MNS" class="h-10 mx-auto mb-3 object-contain" />
            <div class="text-sm text-gray-500">{{ $t('compliancePage.standards.mnsLabel') }}</div>
          </div>
          <div class="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-sm transition-shadow">
            <img src="~/assets/images/webImages/Nfpa-Logo-Vector.svg-.png" alt="NFPA" class="h-10 mx-auto mb-3 object-contain" />
            <div class="text-sm text-gray-500">{{ $t('compliancePage.standards.nfpaLabel') }}</div>
          </div>
          <div class="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-sm transition-shadow">
            <img src="~/assets/images/webImages/iso-9001-2015.png" alt="ISO 9001" class="h-10 mx-auto mb-3 object-contain" />
            <div class="text-sm text-gray-500">{{ $t('compliancePage.standards.isoLabel') }}</div>
          </div>
          <div class="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-sm transition-shadow">
            <img src="~/assets/images/distributorLogo/fm.png" alt="FM Approved" class="h-10 mx-auto mb-3 object-contain" />
            <div class="text-sm text-gray-500">{{ $t('compliancePage.standards.fmLabel') }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Compliance Services -->
    <section class="py-16 px-4 md:px-6 max-w-7xl mx-auto">
      <h2 class="text-2xl md:text-3xl font-bold text-brand-text mb-8">{{ $t('compliancePage.services.title') }}</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <a
          v-for="service in complianceServices"
          :key="service.key"
          href="/services"
          class="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:border-brand-red hover:shadow-sm transition-all group"
        >
          <Icon :name="service.icon" class="w-6 h-6 text-brand-red flex-shrink-0" />
          <span class="text-sm font-medium text-gray-700 group-hover:text-brand-text transition-colors">{{ $t(service.key) }}</span>
          <Icon name="heroicons:arrow-right" class="w-4 h-4 text-gray-400 ml-auto group-hover:text-brand-red transition-colors" />
        </a>
      </div>
    </section>

    <!-- Documentation & Reporting -->
    <section class="py-16 px-4 md:px-6 bg-gray-50">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 class="text-2xl md:text-3xl font-bold text-brand-text mb-4">{{ $t('compliancePage.documentation.title') }}</h2>
            <p class="text-sm md:text-base text-gray-600 leading-relaxed mb-6">{{ $t('compliancePage.documentation.description') }}</p>
            <ul class="space-y-3">
              <li v-for="item in documentationItems" :key="item" class="flex items-start gap-3">
                <Icon name="heroicons:document-check" class="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                <span class="text-sm text-gray-700">{{ $t(item) }}</span>
              </li>
            </ul>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div v-for="doc in docCards" :key="doc.key" class="bg-white border border-gray-200 rounded-lg p-5 text-center">
              <Icon :name="doc.icon" class="w-8 h-8 mx-auto mb-2" :class="doc.color" />
              <div class="text-xs font-semibold text-brand-text">{{ $t(doc.key) }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Compliance Process -->
    <section class="py-16 px-4 md:px-6 max-w-7xl mx-auto">
      <h2 class="text-2xl md:text-3xl font-bold text-brand-text mb-10 text-center">{{ $t('compliancePage.process.title') }}</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
        <div v-for="(step, index) in processSteps" :key="step.key" class="text-center">
          <div class="w-12 h-12 rounded-full bg-brand-red text-white flex items-center justify-center text-lg font-bold mx-auto mb-3">
            {{ index + 1 }}
          </div>
          <p class="text-sm font-medium text-brand-text">{{ $t(step.key) }}</p>
        </div>
      </div>
    </section>

    <!-- Industries We Support -->
    <section class="py-16 px-4 md:px-6 bg-gray-50">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">{{ $t('compliancePage.industries.title') }}</h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          <div v-for="industry in industries" :key="industry.key" class="flex flex-col items-center text-center p-4 border border-gray-200 bg-white rounded-lg hover:shadow-sm transition-shadow">
            <Icon :name="industry.icon" class="w-7 h-7 text-brand-red mb-2" />
            <span class="text-xs font-medium text-brand-text">{{ $t(industry.key) }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16 px-4 md:px-6 bg-brand-red">
      <div class="max-w-2xl mx-auto text-center">
        <h2 class="text-2xl md:text-3xl font-bold text-white mb-4">{{ $t('compliancePage.cta.title') }}</h2>
        <p class="text-sm md:text-base text-red-100 leading-relaxed mb-8">{{ $t('compliancePage.cta.description') }}</p>
        <a href="/contact" class="inline-block px-6 py-3 bg-white text-brand-red text-sm font-semibold rounded hover:bg-gray-100 transition-colors">
          {{ $t('compliancePage.cta.button') }}
        </a>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import heroBg from '~/assets/images/webImages/fire-extinguisher-system-data-storage-in-data-war-2024-11-03-08-08-43-utc.webp?url'

useHead({
  title: 'Compliance — Gal Impex'
})

const whyItems = [
  'compliancePage.why.risk',
  'compliancePage.why.regulatory',
  'compliancePage.why.safety',
  'compliancePage.why.readiness'
]


const complianceServices = [
  { icon: 'heroicons:magnifying-glass', key: 'compliancePage.services.inspection' },
  { icon: 'heroicons:fire', key: 'compliancePage.services.extinguisher' },
  { icon: 'heroicons:bell-alert', key: 'compliancePage.services.alarm' },
  { icon: 'heroicons:light-bulb', key: 'compliancePage.services.signage' },
  { icon: 'heroicons:exclamation-triangle', key: 'compliancePage.services.risk' },
  { icon: 'heroicons:academic-cap', key: 'compliancePage.services.training' }
]

const documentationItems = [
  'compliancePage.documentation.checklists',
  'compliancePage.documentation.reports',
  'compliancePage.documentation.logs',
  'compliancePage.documentation.recommendations'
]

const docCards = [
  { icon: 'heroicons:clipboard-document-list', color: 'text-brand-red', key: 'compliancePage.documentation.checklists' },
  { icon: 'heroicons:document-text', color: 'text-brand-green', key: 'compliancePage.documentation.reports' },
  { icon: 'heroicons:wrench-screwdriver', color: 'text-brand-yellow', key: 'compliancePage.documentation.logs' },
  { icon: 'heroicons:chat-bubble-left-ellipsis', color: 'text-brand-text', key: 'compliancePage.documentation.recommendations' }
]

const processSteps = [
  { key: 'compliancePage.process.step1' },
  { key: 'compliancePage.process.step2' },
  { key: 'compliancePage.process.step3' },
  { key: 'compliancePage.process.step4' },
  { key: 'compliancePage.process.step5' }
]

const industries = [
  { icon: 'heroicons:building-office', key: 'compliancePage.industries.commercial' },
  { icon: 'heroicons:cog-6-tooth', key: 'compliancePage.industries.industrial' },
  { icon: 'heroicons:archive-box', key: 'compliancePage.industries.warehouses' },
  { icon: 'heroicons:academic-cap', key: 'compliancePage.industries.schools' },
  { icon: 'heroicons:heart', key: 'compliancePage.industries.hospitals' },
  { icon: 'heroicons:building-storefront', key: 'compliancePage.industries.hotels' }
]
</script>
