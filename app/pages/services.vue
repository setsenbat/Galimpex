<template>
  <div class="font-sans text-brand-text">

    <!-- Hero -->
    <section class="relative pt-32 pb-20 px-4 md:px-6 bg-brand-text bg-cover bg-center" :style="{ backgroundImage: `url(${heroBg})` }">
      <div class="absolute inset-0 bg-black/70"></div>
      <div class="max-w-7xl mx-auto relative z-10">
        <p class="text-xs font-semibold uppercase tracking-widest text-brand-yellow mb-3">SERVICES</p>
        <h1 class="text-3xl md:text-5xl font-bold text-white leading-tight mb-4 max-w-3xl">
          {{ $t('servicesPage.hero.subtitle') }}
        </h1>
        <p class="text-sm md:text-base text-gray-300 max-w-2xl leading-relaxed mb-8">
          {{ $t('servicesPage.hero.description') }}
        </p>
        <div class="flex flex-wrap gap-3">
          <a href="#contact-form" class="px-5 py-2.5 bg-brand-red text-white text-sm font-semibold rounded hover:bg-red-700 transition-colors">
            {{ $t('servicesPage.hero.ctaPrimary') }}
          </a>
          <a href="/contact" class="px-5 py-2.5 border border-white text-white text-sm font-semibold rounded hover:bg-white hover:text-brand-text transition-colors">
            {{ $t('servicesPage.hero.ctaSecondary') }}
          </a>
        </div>
      </div>
    </section>

    <!-- Core Services Grid -->
    <section class="pt-16 pb-8 px-4 md:px-6 max-w-7xl mx-auto">
      <h2 class="text-2xl md:text-3xl font-bold text-brand-text mb-8">{{ $t('landing.services.title') }}</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        <div v-for="service in coreServices" :key="service.titleKey" class="border border-gray-200 rounded-lg overflow-hidden group hover:shadow-md transition-shadow">
          <div class="relative overflow-hidden">
            <img
              :src="service.image"
              :alt="$t(service.titleKey)"
              class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div class="absolute top-3 left-3 text-white text-xs font-semibold px-2.5 py-1 rounded" :class="service.badgeColor">
              {{ $t(service.titleKey) }}
            </div>
          </div>
          <div class="p-5">
            <h3 class="font-bold text-brand-text text-base mb-2">{{ $t(service.titleKey) }}</h3>
            <p class="text-sm text-gray-500 leading-relaxed mb-4">{{ $t(service.descKey) }}</p>
            <a :href="`#service-${service.id}`" class="inline-flex items-center gap-1 text-sm text-brand-red font-medium hover:underline">
              {{ $t('landing.services.learnMore') }}
            </a>
          </div>
        </div>

        <!-- CTA Card -->
        <div class="border-2 border-brand-red rounded-lg p-5 flex flex-col justify-between bg-red-50">
          <div>
            <h3 class="font-bold text-brand-text text-base mb-2">{{ $t('landing.nav.getQuote') }}</h3>
            <p class="text-sm text-gray-500 leading-relaxed mb-6">{{ $t('landing.hero.description') }}</p>
          </div>
          <a href="#contact-form" class="inline-block px-5 py-2.5 bg-brand-red text-white text-sm font-medium rounded hover:bg-red-700 transition-colors w-fit">
            {{ $t('landing.nav.getQuote') }}
          </a>
        </div>

      </div>
    </section>

    <!-- Detailed Service Sections -->
    <section class="py-8 px-4 md:px-6 max-w-7xl mx-auto space-y-16">

      <!-- Equipment Supply -->
      <div id="service-supply" class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center pt-8 border-t border-gray-100">
        <div>
          <div class="inline-block bg-brand-red text-white text-xs font-semibold px-3 py-1 rounded mb-4">Equipment Supply</div>
          <h2 class="text-2xl md:text-3xl font-bold text-brand-text mb-3">{{ $t('servicesPage.detailed.supply.title') }}</h2>
          <p class="text-sm text-gray-600 leading-relaxed mb-5">{{ $t('servicesPage.detailed.supply.description') }}</p>
          <ul class="space-y-2 mb-6">
            <li v-for="i in 4" :key="i" class="flex items-start gap-2 text-sm text-gray-700">
              <Icon name="heroicons:check-circle" class="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
              {{ $t(`servicesPage.detailed.supply.bullet${i}`) }}
            </li>
          </ul>
          <a href="#contact-form" class="inline-block px-5 py-2.5 bg-brand-red text-white text-sm font-semibold rounded hover:bg-red-700 transition-colors">
            {{ $t('servicesPage.detailed.supply.cta') }}
          </a>
        </div>
        <div class="rounded-lg overflow-hidden">
          <img :src="imgSupply" alt="Equipment Supply" class="w-full h-64 object-cover" />
        </div>
      </div>

      <!-- System Installation -->
      <div id="service-installation" class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center pt-8 border-t border-gray-100">
        <div class="md:order-2">
          <div class="inline-block bg-brand-red text-white text-xs font-semibold px-3 py-1 rounded mb-4">System Installation</div>
          <h2 class="text-2xl md:text-3xl font-bold text-brand-text mb-3">{{ $t('servicesPage.detailed.installation.title') }}</h2>
          <p class="text-sm text-gray-600 leading-relaxed mb-5">{{ $t('servicesPage.detailed.installation.description') }}</p>
          <ul class="space-y-2 mb-6">
            <li v-for="i in 4" :key="i" class="flex items-start gap-2 text-sm text-gray-700">
              <Icon name="heroicons:check-circle" class="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
              {{ $t(`servicesPage.detailed.installation.bullet${i}`) }}
            </li>
          </ul>
          <a href="#contact-form" class="inline-block px-5 py-2.5 bg-brand-red text-white text-sm font-semibold rounded hover:bg-red-700 transition-colors">
            {{ $t('servicesPage.detailed.installation.cta') }}
          </a>
        </div>
        <div class="rounded-lg overflow-hidden md:order-1">
          <img :src="imgInstall" alt="System Installation" class="w-full h-64 object-cover" />
        </div>
      </div>

      <!-- Inspection & Refill -->
      <div id="service-inspection" class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center pt-8 border-t border-gray-100">
        <div>
          <div class="inline-block bg-brand-green text-white text-xs font-semibold px-3 py-1 rounded mb-4">Inspection & Refill</div>
          <h2 class="text-2xl md:text-3xl font-bold text-brand-text mb-3">{{ $t('servicesPage.detailed.inspection.title') }}</h2>
          <p class="text-sm text-gray-600 leading-relaxed mb-5">{{ $t('servicesPage.detailed.inspection.description') }}</p>
          <ul class="space-y-2 mb-6">
            <li v-for="i in 4" :key="i" class="flex items-start gap-2 text-sm text-gray-700">
              <Icon name="heroicons:check-circle" class="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
              {{ $t(`servicesPage.detailed.inspection.bullet${i}`) }}
            </li>
          </ul>
          <a href="#contact-form" class="inline-block px-5 py-2.5 bg-brand-red text-white text-sm font-semibold rounded hover:bg-red-700 transition-colors">
            {{ $t('servicesPage.detailed.inspection.cta') }}
          </a>
        </div>
        <div class="rounded-lg overflow-hidden">
          <img :src="imgInspect" alt="Inspection & Refill" class="w-full h-64 object-cover" />
        </div>
      </div>

      <!-- Training & Drills -->
      <div id="service-drills" class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center pt-8 border-t border-gray-100">
        <div class="md:order-2">
          <div class="inline-block bg-brand-yellow text-brand-text text-xs font-semibold px-3 py-1 rounded mb-4">Training & Drills</div>
          <h2 class="text-2xl md:text-3xl font-bold text-brand-text mb-3">{{ $t('servicesPage.detailed.drills.title') }}</h2>
          <p class="text-sm text-gray-600 leading-relaxed mb-5">{{ $t('servicesPage.detailed.drills.description') }}</p>
          <ul class="space-y-2 mb-6">
            <li v-for="i in 4" :key="i" class="flex items-start gap-2 text-sm text-gray-700">
              <Icon name="heroicons:check-circle" class="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
              {{ $t(`servicesPage.detailed.drills.bullet${i}`) }}
            </li>
          </ul>
          <a href="#contact-form" class="inline-block px-5 py-2.5 bg-brand-red text-white text-sm font-semibold rounded hover:bg-red-700 transition-colors">
            {{ $t('servicesPage.detailed.drills.cta') }}
          </a>
        </div>
        <div class="rounded-lg overflow-hidden md:order-1">
          <img :src="imgDrills" alt="Training & Drills" class="w-full h-64 object-cover" />
        </div>
      </div>

      <!-- Audit-ready Reporting -->
      <div id="service-reporting" class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center pt-8 border-t border-gray-100">
        <div>
          <div class="inline-block bg-brand-green text-white text-xs font-semibold px-3 py-1 rounded mb-4">Audit-ready Reporting</div>
          <h2 class="text-2xl md:text-3xl font-bold text-brand-text mb-3">{{ $t('servicesPage.detailed.reporting.title') }}</h2>
          <p class="text-sm text-gray-600 leading-relaxed mb-5">{{ $t('servicesPage.detailed.reporting.description') }}</p>
          <ul class="space-y-2 mb-6">
            <li v-for="i in 4" :key="i" class="flex items-start gap-2 text-sm text-gray-700">
              <Icon name="heroicons:check-circle" class="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
              {{ $t(`servicesPage.detailed.reporting.bullet${i}`) }}
            </li>
          </ul>
          <a href="#contact-form" class="inline-block px-5 py-2.5 bg-brand-red text-white text-sm font-semibold rounded hover:bg-red-700 transition-colors">
            {{ $t('servicesPage.detailed.reporting.cta') }}
          </a>
        </div>
        <div class="rounded-lg overflow-hidden">
          <img :src="imgReport" alt="Reporting" class="w-full h-64 object-cover" />
        </div>
      </div>

    </section>

    <!-- Industries We Serve -->
    <section class="py-16 px-4 md:px-6 bg-gray-50">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-2xl md:text-3xl font-bold text-brand-text mb-8 text-center">{{ $t('servicesPage.industries.title') }}</h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          <div v-for="industry in industries" :key="industry.key" class="flex flex-col items-center text-center p-5 bg-white border border-gray-200 rounded-lg hover:shadow-sm transition-shadow">
            <Icon :name="industry.icon" class="w-8 h-8 text-brand-red mb-2" />
            <span class="text-xs font-semibold text-brand-text">{{ $t(industry.key) }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Gal Impex -->
    <section class="py-16 px-4 md:px-6 max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 class="text-2xl md:text-3xl font-bold text-brand-text mb-6">{{ $t('servicesPage.why.title') }}</h2>
          <ul class="space-y-4">
            <li v-for="i in 4" :key="i" class="flex items-start gap-3">
              <Icon name="heroicons:check-circle" class="w-6 h-6 text-brand-red mt-0.5 flex-shrink-0" />
              <span class="text-sm md:text-base text-gray-700">{{ $t(`servicesPage.why.bullet${i}`) }}</span>
            </li>
          </ul>
        </div>
        <!-- Standards -->
        <div class="flex flex-wrap gap-4 items-center">
          <div v-for="cert in ['ISO 9001', 'MNS', 'NFPA', 'CE']" :key="cert"
            class="flex items-center justify-center border border-gray-200 rounded px-6 py-4 text-sm font-bold text-gray-700 min-w-[90px]">
            {{ cert }}
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Band -->
    <section class="py-14 px-4 md:px-6 bg-brand-red">
      <div class="max-w-2xl mx-auto text-center">
        <h2 class="text-2xl md:text-3xl font-bold text-white mb-4">{{ $t('servicesPage.cta.title') }}</h2>
        <p class="text-sm md:text-base text-red-100 leading-relaxed mb-8">{{ $t('servicesPage.cta.description') }}</p>
        <a href="#contact-form" class="inline-block px-6 py-3 bg-white text-brand-red text-sm font-semibold rounded hover:bg-gray-100 transition-colors">
          {{ $t('servicesPage.cta.button') }}
        </a>
      </div>
    </section>

    <!-- Contact Form -->
    <section id="contact-form" class="py-16 px-4 md:px-6 max-w-7xl mx-auto">
      <h2 class="text-2xl font-bold text-brand-text mb-6">{{ $t('servicesPage.form.title') }}</h2>
      <form class="max-w-2xl space-y-4" @submit.prevent>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input type="text" :placeholder="$t('landing.contact.namePlaceholder')" class="w-full px-4 py-3 border border-gray-200 rounded text-sm focus:outline-none focus:border-brand-red transition-colors" />
          <input type="text" :placeholder="$t('landing.contact.companyPlaceholder')" class="w-full px-4 py-3 border border-gray-200 rounded text-sm focus:outline-none focus:border-brand-red transition-colors" />
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input type="tel" :placeholder="$t('landing.contact.phonePlaceholder')" class="w-full px-4 py-3 border border-gray-200 rounded text-sm focus:outline-none focus:border-brand-red transition-colors" />
          <input type="email" :placeholder="$t('landing.contact.emailPlaceholder')" class="w-full px-4 py-3 border border-gray-200 rounded text-sm focus:outline-none focus:border-brand-red transition-colors" />
        </div>
        <select class="w-full px-4 py-3 border border-gray-200 rounded text-sm text-gray-500 focus:outline-none focus:border-brand-red transition-colors bg-white">
          <option value="">{{ $t('servicesPage.form.service') }}</option>
          <option v-for="service in coreServices" :key="service.id" :value="service.id">{{ $t(service.titleKey) }}</option>
        </select>
        <textarea rows="4" :placeholder="$t('landing.contact.messagePlaceholder')" class="w-full px-4 py-3 border border-gray-200 rounded text-sm focus:outline-none focus:border-brand-red transition-colors resize-none"></textarea>
        <button type="submit" class="px-6 py-3 bg-brand-red text-white text-sm font-semibold rounded hover:bg-red-700 transition-colors">
          {{ $t('servicesPage.form.submit') }}
        </button>
      </form>
    </section>

  </div>
</template>

<script setup lang="ts">
import heroBg from '~/assets/images/webImages/benjamin-elliott-tVZHyZRGmKU-unsplash.jpg?url'
import imgSupply from '~/assets/images/webImages/jakub-zerdzicki-GCmVg5lztwI-unsplash.jpg?url'
import imgInstall from '~/assets/images/webImages/fire-sprinklers-system-for-warehouses.jpg?url'
import imgInspect from '~/assets/images/webImages/fire-extinguisher-refilling-work-1000x1000.jpeg?url'
import imgDrills from '~/assets/images/webImages/mitchell-luo-wXs0mncHyfI-unsplash.jpg?url'
import imgReport from '~/assets/images/webImages/image123.png?url'

useHead({
  title: 'Services — Gal Impex'
})

const coreServices = [
  {
    id: 'supply',
    titleKey: 'landing.services.supply.title',
    descKey: 'landing.services.supply.description',
    image: imgSupply,
    badgeColor: 'bg-brand-red'
  },
  {
    id: 'installation',
    titleKey: 'landing.services.installation.title',
    descKey: 'landing.services.installation.description',
    image: imgInstall,
    badgeColor: 'bg-brand-red'
  },
  {
    id: 'inspection',
    titleKey: 'landing.services.inspection.title',
    descKey: 'landing.services.inspection.description',
    image: imgInspect,
    badgeColor: 'bg-brand-green'
  },
  {
    id: 'drills',
    titleKey: 'landing.services.drills.title',
    descKey: 'landing.services.drills.description',
    image: imgDrills,
    badgeColor: 'bg-brand-yellow'
  },
  {
    id: 'reporting',
    titleKey: 'landing.services.reporting.title',
    descKey: 'landing.services.reporting.description',
    image: imgReport,
    badgeColor: 'bg-brand-green'
  }
]

const industries = [
  { icon: 'heroicons:building-office', key: 'servicesPage.industries.offices' },
  { icon: 'heroicons:cog-6-tooth', key: 'servicesPage.industries.factories' },
  { icon: 'heroicons:archive-box', key: 'servicesPage.industries.warehouses' },
  { icon: 'heroicons:heart', key: 'servicesPage.industries.hospitals' },
  { icon: 'heroicons:academic-cap', key: 'servicesPage.industries.schools' },
  { icon: 'heroicons:building-storefront', key: 'servicesPage.industries.hotels' }
]
</script>
