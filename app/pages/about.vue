<template>
  <div class="font-sans text-brand-text">

    <!-- Hero Section -->
    <section class="relative pt-32 pb-20 px-4 md:px-6 bg-brand-text bg-cover bg-center overflow-hidden" :style="{ backgroundImage: `url(${heroBg})` }">
      <div class="absolute inset-0 bg-black/70"></div>
      <div class="max-w-7xl mx-auto relative z-10">
        <p class="text-xs font-semibold uppercase tracking-widest text-brand-yellow mb-4">{{ $t('landing.nav.about') }}</p>
        <p class="text-base md:text-lg text-gray-300 max-w-2xl leading-relaxed mb-8">
          {{ $t('about.hero.description') }}
        </p>
        <div class="flex flex-wrap gap-3">
          <a href="/services" class="px-5 py-2.5 bg-brand-red text-white text-sm font-semibold rounded hover:bg-red-700 transition-colors">
            {{ $t('about.hero.ctaPrimary') }}
          </a>
          <a href="/contact" class="px-5 py-2.5 border border-white text-white text-sm font-semibold rounded hover:bg-white hover:text-brand-text transition-colors">
            {{ $t('about.hero.ctaSecondary') }}
          </a>
        </div>
      </div>
    </section>

    <!-- Our Mission -->
    <section class="py-16 px-4 md:px-6 bg-brand-red">
      <div class="max-w-7xl mx-auto text-center">
        <h2 class="text-2xl md:text-3xl font-bold text-white mb-6">{{ $t('about.mission.title') }}</h2>
        <p class="text-base md:text-lg text-red-100 max-w-3xl mx-auto leading-relaxed">
          "{{ $t('about.mission.description') }}"
        </p>
      </div>
    </section>

    <!-- Core Values -->
    <section class="py-16 px-4 md:px-6 max-w-7xl mx-auto">
      <h2 class="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">{{ $t('about.values.title') }}</h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        <div v-for="(value, icon) in coreValues" :key="value" class="flex flex-col items-center text-center p-5 border border-gray-200 rounded-lg hover:border-brand-red transition-colors">
          <Icon :name="icon" class="w-8 h-8 text-brand-red mb-3" />
          <span class="text-sm font-semibold text-brand-text">{{ $t(value) }}</span>
        </div>
      </div>
    </section>

    <!-- Timeline -->
    <section class="py-16 px-4 md:px-6 max-w-7xl mx-auto border-t border-gray-100">
      <h2 class="text-2xl md:text-3xl font-bold text-brand-text mb-12 text-center">{{ $t('about.timeline.title') }}</h2>
      <div class="relative">
        <!-- Vertical line (desktop) -->
        <div class="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2"></div>
        <div class="space-y-8 md:space-y-0">
          <div
            v-for="(item, index) in timeline"
            :key="item.year"
            class="relative md:flex md:items-center"
            :class="index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'"
          >
            <!-- Content card -->
            <div class="md:w-5/12 p-5 border border-gray-200 rounded-lg hover:shadow-sm transition-shadow"
              :class="index % 2 === 0 ? 'md:mr-auto md:text-right' : 'md:ml-auto md:text-left'"
            >
              <div class="text-2xl font-bold text-brand-red mb-1">{{ item.year }}</div>
              <p class="text-sm text-gray-600 leading-relaxed">{{ $t(item.key) }}</p>
            </div>
            <!-- Dot -->
            <div class="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-brand-red rounded-full border-2 border-white shadow-md"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- What We Do -->
    <section class="py-16 px-4 md:px-6 bg-gray-50">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">{{ $t('about.whatWeDo.title') }}</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <a
            v-for="service in services"
            :key="service.titleKey"
            href="/services"
            class="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md hover:border-brand-red transition-all group"
          >
            <Icon :name="service.icon" class="w-8 h-8 text-brand-red mb-3" />
            <h3 class="font-bold text-brand-text mb-2 group-hover:text-brand-red transition-colors">{{ $t(service.titleKey) }}</h3>
            <p class="text-sm text-gray-500 leading-relaxed">{{ $t(service.descKey) }}</p>
          </a>
        </div>
      </div>
    </section>

    <!-- Experience & Achievements -->
    <section class="py-16 px-4 md:px-6 max-w-7xl mx-auto">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div v-for="stat in stats" :key="stat.valueKey" class="text-center p-6 border rounded-lg" :class="stat.borderColor">
          <div class="text-3xl md:text-4xl font-bold mb-1" :class="stat.textColor">{{ $t(stat.valueKey) }}</div>
          <div class="text-sm text-gray-500">{{ $t(stat.labelKey) }}</div>
        </div>
      </div>
    </section>

    <!-- Distributor Partners — light bg logos -->
    <section class="py-16 px-4 md:px-6 bg-gray-50">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-2xl md:text-3xl font-bold text-brand-text mb-2 text-center">{{ $t('about.partners.title') }}</h2>
        <p class="text-sm text-gray-500 text-center mb-8">{{ $t('about.partners.description') }}</p>
        <div class="flex flex-wrap justify-center gap-4">
          <div class="bg-white border border-gray-100 rounded-lg p-4 flex items-center justify-center h-20 w-36 hover:shadow-sm transition-shadow">
            <img src="~/assets/images/distributorLogo/mircom-vector-logo.png" alt="Mircom" class="max-h-10 max-w-[120px] object-contain" />
          </div>
          <div class="bg-white border border-gray-100 rounded-lg p-4 flex items-center justify-center h-20 w-36 hover:shadow-sm transition-shadow">
            <img src="~/assets/images/distributorLogo/asenware.png" alt="ASENWARE" class="max-h-10 max-w-[120px] object-contain" />
          </div>
          <div class="bg-white border border-gray-100 rounded-lg p-4 flex items-center justify-center h-20 w-36 hover:shadow-sm transition-shadow">
            <img src="~/assets/images/distributorLogo/bolid.png" alt="BOLID" class="max-h-10 max-w-[120px] object-contain" />
          </div>
          <div class="bg-white border border-gray-100 rounded-lg p-4 flex items-center justify-center h-20 w-36 hover:shadow-sm transition-shadow">
            <img src="~/assets/images/distributorLogo/Logo-MECH-20241.png" alt="MECH" class="max-h-10 max-w-[120px] object-contain" />
          </div>
          <div class="bg-white border border-gray-100 rounded-lg p-4 flex items-center justify-center h-20 w-36 hover:shadow-sm transition-shadow">
            <img src="~/assets/images/distributorLogo/viber_image_2026-01-07_12-43-51-405.png" alt="forede" class="max-h-10 max-w-[120px] object-contain" />
          </div>
          <div class="bg-white border border-gray-100 rounded-lg p-4 flex items-center justify-center h-20 w-36 hover:shadow-sm transition-shadow">
            <img src="~/assets/images/distributorLogo/fm.png" alt="FM Approved" class="max-h-10 max-w-[120px] object-contain" />
          </div>
        </div>
      </div>
    </section>

    <!-- Certified Equipment Brands — dark bg for white logos -->
    <section class="py-16 px-4 md:px-6 bg-brand-text">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-2xl md:text-3xl font-bold text-white mb-2 text-center">{{ $t('about.partners.darkTitle') }}</h2>
        <p class="text-sm text-gray-400 text-center mb-8">{{ $t('about.partners.darkDescription') }}</p>
        <div class="flex flex-wrap justify-center gap-4">
          <div class="bg-white/10 border border-white/20 rounded-lg p-4 flex items-center justify-center h-20 w-36 hover:bg-white/20 transition-colors">
            <img src="~/assets/images/distributorLogo/flexnet.png" alt="Flexnet" class="max-h-10 max-w-[120px] object-contain" />
          </div>
          <div class="bg-white/10 border border-white/20 rounded-lg p-4 flex items-center justify-center h-20 w-36 hover:bg-white/20 transition-colors">
            <img src="~/assets/images/distributorLogo/fm200.png" alt="FM-200" class="max-h-10 max-w-[120px] object-contain" />
          </div>
          <div class="bg-white/10 border border-white/20 rounded-lg p-4 flex items-center justify-center h-20 w-36 hover:bg-white/20 transition-colors">
            <img src="~/assets/images/distributorLogo/hatsuta.png" alt="Hatsuta" class="max-h-10 max-w-[120px] object-contain" />
          </div>
          <div class="bg-white/10 border border-white/20 rounded-lg p-4 flex items-center justify-center h-20 w-36 hover:bg-white/20 transition-colors">
            <img src="~/assets/images/distributorLogo/statx.png" alt="Stat-X" class="max-h-10 max-w-[120px] object-contain" />
          </div>
        </div>
      </div>
    </section>

    <!-- Certifications -->
    <section class="py-16 px-4 md:px-6 bg-gray-50">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">{{ $t('about.certifications.title') }}</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div v-for="cert in certifications" :key="cert.titleKey" class="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-sm transition-shadow">
            <div class="text-xl font-bold text-brand-red mb-1">{{ $t(cert.titleKey) }}</div>
            <div class="text-xs text-gray-500">{{ $t(cert.labelKey) }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16 px-4 md:px-6 bg-brand-text">
      <div class="max-w-2xl mx-auto text-center">
        <h2 class="text-2xl md:text-3xl font-bold text-white mb-4">{{ $t('about.cta.title') }}</h2>
        <p class="text-sm md:text-base text-gray-300 leading-relaxed mb-8">{{ $t('about.cta.description') }}</p>
        <a href="/contact" class="inline-block px-6 py-3 bg-brand-red text-white text-sm font-semibold rounded hover:bg-red-700 transition-colors">
          {{ $t('about.cta.button') }}
        </a>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import heroBg from '~/assets/images/webImages/The-Fundamentals-of-Fire-Safety-Prevention-Detection-and-Response-scaled (1).jpg?url'

useHead({
  title: 'About — Gal Impex'
})

const coreValues = {
  'heroicons:star': 'about.values.excellence',
  'heroicons:light-bulb': 'about.values.innovation',
  'heroicons:shield-check': 'about.values.safety',
  'heroicons:scale': 'about.values.integrity',
  'heroicons:heart': 'about.values.customer'
}

const timeline = [
  { year: '1971', key: 'about.timeline.y1971' },
  { year: '1991', key: 'about.timeline.y1991' },
  { year: '2002', key: 'about.timeline.y2002' },
  { year: '2012', key: 'about.timeline.y2012' },
  { year: '2013', key: 'about.timeline.y2013' },
  { year: '2018', key: 'about.timeline.y2018' },
  { year: '2019', key: 'about.timeline.y2019' },
  { year: '2020', key: 'about.timeline.y2020' },
  { year: '2023', key: 'about.timeline.y2023' },
  { year: '2025', key: 'about.timeline.y2025' }
]

const services = [
  { icon: 'heroicons:fire', titleKey: 'landing.services.supply.title', descKey: 'landing.services.supply.description' },
  { icon: 'heroicons:cpu-chip', titleKey: 'landing.services.installation.title', descKey: 'landing.services.installation.description' },
  { icon: 'heroicons:clipboard-document-check', titleKey: 'landing.services.inspection.title', descKey: 'landing.services.inspection.description' },
  { icon: 'heroicons:academic-cap', titleKey: 'landing.services.drills.title', descKey: 'landing.services.drills.description' },
  { icon: 'heroicons:document-text', titleKey: 'landing.services.reporting.title', descKey: 'landing.services.reporting.description' }
]

const stats = [
  { valueKey: 'about.stats.years', labelKey: 'about.stats.yearsLabel', borderColor: 'border-brand-red', textColor: 'text-brand-red' },
  { valueKey: 'about.stats.projects', labelKey: 'about.stats.projectsLabel', borderColor: 'border-brand-green', textColor: 'text-brand-green' },
  { valueKey: 'about.stats.locations', labelKey: 'about.stats.locationsLabel', borderColor: 'border-brand-yellow', textColor: 'text-brand-yellow' },
  { valueKey: 'about.stats.coverage', labelKey: 'about.stats.coverageLabel', borderColor: 'border-gray-200', textColor: 'text-brand-text' }
]

const certifications = [
  { titleKey: 'about.certifications.iso', labelKey: 'about.certifications.isoLabel' },
  { titleKey: 'about.certifications.nfpa', labelKey: 'about.certifications.nfpaLabel' },
  { titleKey: 'about.certifications.mns', labelKey: 'about.certifications.mnsLabel' },
  { titleKey: 'about.certifications.government', labelKey: 'about.certifications.governmentLabel' }
]
</script>
