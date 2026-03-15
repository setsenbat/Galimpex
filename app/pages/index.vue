<template>
  <div>
    <!-- Hero Section -->
    <section class="relative md:h-[90vh] min-h-[80vh] pt-20 bg-cover bg-[right_80%] bg-no-repeat flex flex-col" :style="{ backgroundImage: `url(${heroBg})` }">
      <!-- Dark overlay -->
      <div class="absolute inset-0"></div>

      <!-- Building image pinned to bottom-right of section -->
      <!-- <div class="absolute bottom-0 right-0 h-[40vh] md:h-[60vh] flex-shrink-0 overflow-hidden z-0">
        <img :src="choijinImage" alt="" class="h-full w-auto object-bottom" />
      </div> -->

      <!-- Content -->
      <div class="relative z-10 flex-1 flex items-center px-4 md:px-6">
        <div class="max-w-7xl mx-auto w-full">
          <div class="max-w-lg md:max-w-none">
            <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-text leading-tight mb-4">
              {{ $t('landing.hero.title') }}
            </h1>
            <h2 class="text-lg md:text-xl font-bold text-brand-text/90 mb-4">
              {{ $t('landing.hero.subtitle') }}
            </h2>
            <p class="text-sm text-brand-text/70 leading-relaxed mb-8 max-w-sm">
              {{ $t('landing.hero.description') }}
            </p>
            <div class="flex items-center gap-3">
              <button class="bg-brand-green transition delay-150 duration-300 ease-in-out hover:scale-110 hover:bg-[#AFFF6F] hover:text-brand-text text-white text-sm font-medium rounded px-5 py-2.5">
                {{ $t('landing.hero.ctaPrimary') }}
              </button>
              <button class="bg-gray-600 transition delay-150 duration-300 ease-in-out hover:scale-110 hover:bg-gray-300 hover:text-brand-text text-white text-sm font-medium rounded px-5 py-2.5">
                {{ $t('landing.hero.ctaSecondary') }}
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Stats strip pinned to bottom, with checklist card floating above its right -->
      <div class="relative z-10 max-w-7xl mx-auto w-full px-4 md:px-6 pb-0">
        <!-- Checklist card pinned just above the right of the stats strip -->
        <div class="hidden sm:block absolute bottom-full right-4 md:right-6 mb-3 w-[calc(100vw-2rem)] sm:w-72">
          <div class="bg-white border border-[#C10007] shadow-lg rounded p-4">
            <div class="flex items-center justify-between mb-2">
              <span class="font-bold text-brand-text text-sm">{{ $t('landing.hero.checklist.title') }}</span>
              <span class="text-xs text-brand-red font-medium">{{ $t('landing.hero.checklist.badge') }}</span>
              <ClientOnly>
                <DotLottieVue v-if="taiCheUrl" :src="taiCheUrl" autoplay loop class="w-10 h-10 flex-shrink-0" />
              </ClientOnly>
            </div>
            <ul class="space-y-2">
              <li class="flex items-start gap-2 text-xs text-gray-700">
                <Icon name="heroicons:check" class="w-3.5 h-3.5 text-brand-red mt-0.5 flex-shrink-0" />
                {{ $t('landing.hero.checklist.extinguisher') }}
              </li>
              <li class="flex items-start gap-2 text-xs text-gray-700">
                <Icon name="heroicons:check" class="w-3.5 h-3.5 text-brand-red mt-0.5 flex-shrink-0" />
                {{ $t('landing.hero.checklist.alarm') }}
              </li>
              <li class="flex items-start gap-2 text-xs text-gray-700">
                <Icon name="heroicons:check" class="w-3.5 h-3.5 text-brand-red mt-0.5 flex-shrink-0" />
                {{ $t('landing.hero.checklist.evacuation') }}
              </li>
              <li class="flex items-start gap-2 text-xs text-gray-700">
                <Icon name="heroicons:check" class="w-3.5 h-3.5 text-brand-red mt-0.5 flex-shrink-0" />
                {{ $t('landing.hero.checklist.training') }}
              </li>
              <li class="flex items-start gap-2 text-xs text-gray-700">
                <Icon name="heroicons:check" class="w-3.5 h-3.5 text-brand-red mt-0.5 flex-shrink-0" />
                {{ $t('landing.hero.checklist.recycling') }}
              </li>
            </ul>
          </div>
        </div>
        <div class="w-full sm:w-[70%] mx-auto border border-white/20 rounded-t grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 divide-x-0 sm:divide-x divide-white/20 bg-black/40 backdrop-blur-sm" style="background-color: #EEEFF1;">
          <div class="flex items-center gap-3 px-4 md:px-8 py-1.5 md:py-3" style="border-left: 5px solid #C10007; border-right: 3px solid #fff;">
            <span class="w-2.5 h-2.5 rounded-full bg-brand-red flex-shrink-0"></span>
            <div>
              <div class="font-bold text-brand-text text-sm">{{ $t('landing.hero.stats.fast') }}</div>
              <div class="text-xs text-brand-text/60">{{ $t('landing.hero.stats.response') }}</div>
            </div>
          </div>
          <div class="flex items-center gap-3 px-4 md:px-8 py-1.5 md:py-3" style="border-left: 5px solid #3C7A48; border-right: 3px solid #fff;">
            <span class="w-2.5 h-2.5 rounded-full bg-brand-green flex-shrink-0"></span>
            <div>
              <div class="font-bold text-brand-text text-sm">{{ $t('landing.hero.stats.standard') }}</div>
              <div class="text-xs text-brand-text/60">{{ $t('landing.hero.stats.compliance') }}</div>
            </div>
          </div>
          <div class="flex items-center gap-3 px-4 md:px-8 py-1.5 md:py-3" style="border-left: 5px solid #E9A800;">
            <span class="w-2.5 h-2.5 rounded-full bg-brand-yellow flex-shrink-0"></span>
            <div>
              <div class="font-bold text-brand-text text-sm">{{ $t('landing.hero.stats.endToEnd') }}</div>
              <div class="text-xs text-brand-text/60">{{ $t('landing.hero.stats.service') }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-16">
      <h2 class="text-2xl md:text-3xl font-bold text-brand-text mb-2">{{ $t('landing.services.title') }}</h2>
      <p class="text-sm text-gray-500 mb-8">{{ $t('landing.services.description') }}</p>
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        <div v-for="service in services" :key="service.key" class="border border-gray-200 rounded overflow-hidden">
          <img :src="service.image" :alt="service.title" class="w-full h-32 object-cover" />
          <div class="p-3">
            <div class="font-semibold text-brand-text text-sm mb-1">{{ service.title }}</div>
            <p class="text-xs text-gray-500 leading-relaxed">{{ service.description }}</p>
            <a :href="`/services#service-${service.key}`" class="inline-block mt-2 text-xs text-brand-red font-medium hover:underline">{{ $t('landing.services.learnMore') }}</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Subscription Packages -->
    <section id="packages" class="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-16 border-t border-gray-100">
      <h2 class="text-2xl md:text-3xl font-bold text-brand-text mb-8">{{ $t('landing.packages.title') }}</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Basic -->
        <div class="border border-gray-200 rounded p-6">
          <div class="font-bold text-brand-text text-lg mb-1">{{ $t('landing.packages.basic.title') }}</div>
          <div class="flex items-baseline gap-1 mb-1">
            <span class="text-sm text-gray-700">{{ $t('landing.packages.from') }}</span>
            <span class="font-bold text-brand-text">{{ $t('landing.packages.basic.price') }}</span>
          </div>
          <div class="text-xs text-gray-500 mb-5">{{ $t('landing.packages.basic.subtitle') }}</div>
          <ul class="space-y-2.5">
            <li v-for="f in basicFeatures" :key="f" class="flex items-start gap-2 text-sm text-gray-700">
              <Icon name="heroicons:check" class="w-4 h-4 text-brand-red mt-0.5 flex-shrink-0" />
              {{ f }}
            </li>
          </ul>
        </div>

        <!-- Standard (Most popular) -->
        <div class="border-2 border-brand-red rounded p-6 relative">
          <span class="absolute -top-3 left-4 bg-brand-red text-white text-xs font-semibold px-3 py-0.5 rounded-full">
            {{ $t('landing.packages.mostPopular') }}
          </span>
          <div class="font-bold text-brand-text text-lg mb-1">{{ $t('landing.packages.standard.title') }}</div>
          <div class="flex items-baseline gap-1 mb-1">
            <span class="text-sm text-gray-700">{{ $t('landing.packages.from') }}</span>
            <span class="font-bold text-brand-text">{{ $t('landing.packages.standard.price') }}</span>
          </div>
          <div class="text-xs text-gray-500 mb-5">&nbsp;</div>
          <ul class="space-y-2.5">
            <li v-for="f in standardFeatures" :key="f" class="flex items-start gap-2 text-sm text-gray-700">
              <Icon name="heroicons:check" class="w-4 h-4 text-brand-red mt-0.5 flex-shrink-0" />
              {{ f }}
            </li>
          </ul>
        </div>

        <!-- Premium -->
        <div class="border border-gray-200 rounded p-6">
          <div class="font-bold text-brand-text text-lg mb-1">{{ $t('landing.packages.premium.title') }}</div>
          <div class="flex items-baseline gap-1 mb-1">
            <span class="text-sm text-gray-700">{{ $t('landing.packages.from') }}</span>
            <span class="font-bold text-brand-text">{{ $t('landing.packages.premium.price') }}</span>
          </div>
          <div class="text-xs text-gray-500 mb-5">{{ $t('landing.packages.premium.subtitle') }}</div>
          <ul class="space-y-2.5">
            <li v-for="f in premiumFeatures" :key="f" class="flex items-start gap-2 text-sm text-gray-700">
              <Icon name="heroicons:check" class="w-4 h-4 text-brand-red mt-0.5 flex-shrink-0" />
              {{ f }}
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Compliance & Quality -->
    <section id="compliance" class="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-16 border-t border-gray-100">
      <h2 class="text-2xl md:text-3xl font-bold text-brand-text mb-8">{{ $t('landing.compliance.title') }}</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div v-for="card in complianceCards" :key="card.title" class="border border-gray-200 rounded p-6">
          <div class="font-semibold text-brand-text mb-2">{{ card.title }}</div>
          <p class="text-sm text-gray-500 leading-relaxed">{{ card.description }}</p>
        </div>
      </div>
    </section>

    <!-- Trust / Certifications -->
    <section class="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-16 border-t border-gray-100">
      <h2 class="text-2xl md:text-3xl font-bold text-brand-text mb-2">{{ $t('landing.trust.title') }}</h2>
      <p class="text-sm text-gray-500 mb-8">{{ $t('landing.trust.description') }}</p>
      <div class="flex flex-wrap items-center gap-4 md:gap-6">
        <div class="flex flex-col items-center gap-2 border border-gray-200 rounded p-4 min-w-[90px] text-center">
          <img src="~/assets/images/webImages/iso-9001-2015.png" alt="ISO 9001" class="h-10 object-contain" />
          <span class="text-xs font-bold text-gray-700">ISO 9001</span>
        </div>
        <div class="flex flex-col items-center gap-2 border border-gray-200 rounded p-4 min-w-[90px] text-center">
          <img src="~/assets/images/projectImages/mns_logo.png" alt="MNS" class="h-10 object-contain" />
          <span class="text-xs font-bold text-gray-700">MNS</span>
        </div>
        <div class="flex flex-col items-center gap-2 border border-gray-200 rounded p-4 min-w-[90px] text-center">
          <img src="~/assets/images/webImages/Nfpa-Logo-Vector.svg-.png" alt="NFPA" class="h-10 object-contain" />
          <span class="text-xs font-bold text-gray-700">NFPA</span>
        </div>
        <div class="flex flex-col items-center gap-2 border border-gray-200 rounded p-4 min-w-[90px] text-center">
          <img src="~/assets/images/webImages/CE.png" alt="CE" class="h-10 object-contain" />
          <span class="text-xs font-bold text-gray-700">CE</span>
        </div>
        <div class="flex flex-col items-center gap-2 border border-gray-200 rounded p-4 min-w-[90px] text-center">
          <img src="~/assets/images/webImages/UL.png" alt="UL Listed" class="h-10 object-contain" />
          <span class="text-xs font-bold text-gray-700">UL Listed</span>
        </div>
      </div>
    </section>

    <!-- Partners -->
    <section class="border-t border-gray-100 bg-gray-50 py-10 md:py-14 px-4 md:px-6">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-lg font-semibold text-brand-text mb-6 text-center">{{ $t('landing.partners.title') }}</h2>
        <div class="flex flex-wrap justify-center items-center gap-4 md:gap-6">
          <div class="bg-white border border-gray-100 rounded p-3 flex items-center justify-center h-16 w-28">
            <img src="~/assets/images/distributorLogo/mircom-vector-logo.png" alt="Mircom" class="max-h-8 max-w-[96px] object-contain" />
          </div>
          <div class="bg-white border border-gray-100 rounded p-3 flex items-center justify-center h-16 w-28">
            <img src="~/assets/images/distributorLogo/asenware.png" alt="ASENWARE" class="max-h-8 max-w-[96px] object-contain" />
          </div>
          <div class="bg-white border border-gray-100 rounded p-3 flex items-center justify-center h-16 w-28">
            <img src="~/assets/images/distributorLogo/bolid.png" alt="BOLID" class="max-h-8 max-w-[96px] object-contain" />
          </div>
          <div class="bg-white border border-gray-100 rounded p-3 flex items-center justify-center h-16 w-28">
            <img src="~/assets/images/distributorLogo/Logo-MECH-20241.png" alt="MECH" class="max-h-8 max-w-[96px] object-contain" />
          </div>
          <div class="bg-white border border-gray-100 rounded p-3 flex items-center justify-center h-16 w-28">
            <img src="~/assets/images/distributorLogo/viber_image_2026-01-07_12-43-51-405.png" alt="forede" class="max-h-8 max-w-[96px] object-contain" />
          </div>
          <div class="bg-white border border-gray-100 rounded p-3 flex items-center justify-center h-16 w-28">
            <img src="~/assets/images/distributorLogo/fm.png" alt="FM Approved" class="max-h-8 max-w-[96px] object-contain" />
          </div>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section id="contact" class="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-16 border-t border-gray-100">
      <h2 class="text-2xl md:text-3xl font-bold text-brand-text mb-8">{{ $t('landing.contact.title') }}</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        <!-- Contact info -->
        <div class="space-y-4">
          <div class="flex items-start gap-3 text-sm text-gray-700">
            <Icon name="heroicons:envelope" class="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
            sales@galimpex.mn
          </div>
          <div class="flex items-start gap-3 text-sm text-gray-700">
            <Icon name="heroicons:phone" class="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
            11-463614
          </div>
          <div class="flex items-start gap-3 text-sm text-gray-700">
            <Icon name="heroicons:map-pin" class="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
            {{ $t('landing.contact.address') }}
          </div>
        </div>

        <!-- Contact form -->
        <div class="space-y-3">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input
              type="text"
              :placeholder="$t('landing.contact.namePlaceholder')"
              class="w-full border border-gray-200 rounded px-4 py-2.5 text-sm text-brand-text placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
            <input
              type="text"
              :placeholder="$t('landing.contact.companyPlaceholder')"
              class="w-full border border-gray-200 rounded px-4 py-2.5 text-sm text-brand-text placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input
              type="tel"
              :placeholder="$t('landing.contact.phonePlaceholder')"
              class="w-full border border-gray-200 rounded px-4 py-2.5 text-sm text-brand-text placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
            <input
              type="email"
              :placeholder="$t('landing.contact.emailPlaceholder')"
              class="w-full border border-gray-200 rounded px-4 py-2.5 text-sm text-brand-text placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
          </div>
          <textarea
            :placeholder="$t('landing.contact.messagePlaceholder')"
            rows="4"
            class="w-full border border-gray-200 rounded px-4 py-2.5 text-sm text-brand-text placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 resize-none"
          ></textarea>
          <button class="w-full bg-brand-navy text-white font-semibold text-sm py-3 rounded hover:bg-slate-800 transition-colors">
            {{ $t('landing.contact.submit') }}
          </button>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
// import choijinImage from '~/assets/images/heroRightImage/choijin_my.svg?url'
import heroBg from '~/assets/images/hero3.png?url'
import imgSupply from '~/assets/images/webImages/iso 4kg.png?url'
import imgInstall from '~/assets/images/webImages/fire-sprinklers-system-for-warehouses.jpg?url'
import imgInspect from '~/assets/images/webImages/fire-extinguisher-refilling-work-1000x1000.jpeg?url'
import imgDrills from '~/assets/images/webImages/mitchell-luo-wXs0mncHyfI-unsplash.jpg?url'
import imgReport from '~/assets/images/webImages/image123.png?url'
import { DotLottieVue } from '@lottiefiles/dotlottie-vue'
import taiCheData from '~/assets/images/lottiefiles/tai-che.json'

const taiCheUrl = ref('')

onMounted(() => {
  const blob = new Blob([JSON.stringify(taiCheData)], { type: 'application/json' })
  taiCheUrl.value = URL.createObjectURL(blob)
})

const { t } = useI18n()

const services = computed(() => [
  { key: 'supply', title: t('landing.services.supply.title'), description: t('landing.services.supply.description'), image: imgSupply },
  { key: 'installation', title: t('landing.services.installation.title'), description: t('landing.services.installation.description'), image: imgInstall },
  { key: 'inspection', title: t('landing.services.inspection.title'), description: t('landing.services.inspection.description'), image: imgInspect },
  { key: 'drills', title: t('landing.services.drills.title'), description: t('landing.services.drills.description'), image: imgDrills },
  { key: 'reporting', title: t('landing.services.reporting.title'), description: t('landing.services.reporting.description'), image: imgReport },
])

const basicFeatures = computed(() => [
  t('landing.packages.basic.annual'),
  t('landing.packages.basic.refill'),
  t('landing.packages.basic.support'),
])

const standardFeatures = computed(() => [
  t('landing.packages.standard.quarterly'),
  t('landing.packages.standard.training'),
  t('landing.packages.standard.checklist'),
  t('landing.packages.standard.sla'),
])

const premiumFeatures = computed(() => [
  t('landing.packages.premium.monthly'),
  t('landing.packages.premium.maintenance'),
  t('landing.packages.premium.reporting'),
  t('landing.packages.premium.engineer'),
])

const complianceCards = computed(() => [
  { title: t('landing.compliance.checklists.title'), description: t('landing.compliance.checklists.description') },
  { title: t('landing.compliance.proof.title'), description: t('landing.compliance.proof.description') },
  { title: t('landing.compliance.culture.title'), description: t('landing.compliance.culture.description') },
])


</script>
