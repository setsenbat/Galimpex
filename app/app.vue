<template>
  <div class="font-sans text-brand-text">

    <!-- Navbar -->
    <header class="w-full border-b border-gray-200 fixed top-0 z-50" style="background-color: #EEEFF1;">
      <div class="mx-auto px-6 h-20 flex items-center justify-between">
        <!-- Logo -->
        <a href="/" class="flex items-center ml-6">
          <img src="~/assets/images/logo/logo_horizontal.png" alt="Gal Impex" style="height: 3.5rem; width: auto; display: block;" />
        </a>
        <!-- Nav links -->
        <nav class="hidden md:flex items-center gap-8">
          <a href="#about" class="text-sm text-gray-600 hover:text-brand-text transition-colors">{{ $t('landing.nav.about') }}</a>
          <a href="#services" class="text-sm text-gray-600 hover:text-brand-text transition-colors">{{ $t('landing.nav.services') }}</a>
          <a href="#packages" class="text-sm text-gray-600 hover:text-brand-text transition-colors">{{ $t('landing.nav.packages') }}</a>
          <a href="#compliance" class="text-sm text-gray-600 hover:text-brand-text transition-colors">{{ $t('landing.nav.compliance') }}</a>
          <a href="#projects" class="text-sm text-gray-600 hover:text-brand-text transition-colors">{{ $t('landing.nav.projects') }}</a>
          <a href="#contact" class="text-sm text-gray-600 hover:text-brand-text transition-colors">{{ $t('landing.nav.contact') }}</a>
        </nav>
        <!-- CTA buttons -->
        <div class="flex items-center gap-2">
          <a href="#contact" class="px-4 py-2 bg-brand-red text-white text-sm font-medium rounded hover:bg-red-700 transition-colors">
            {{ $t('landing.nav.getQuote') }}
          </a>
          <a href="#packages" class="px-4 py-2 bg-brand-yellow text-white text-brand-text text-sm font-medium rounded hover:opacity-90 transition-colors mr-6">
            {{ $t('landing.nav.subscription') }}
          </a>
          <LanguageBar />
        </div>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="relative md:h-[90vh] h-[60vh] bg-[75%_55%] md:bg-cover bg-no-repeat flex flex-col" :style="{ backgroundImage: `url(${heroImage})`, backgroundSize: '50% auto' }">
      <!-- Dark overlay -->
      <div class="absolute inset-0"></div>

      <!-- Content -->
      <div class="relative z-10 flex-1 flex items-center px-6">
        <div class="max-w-7xl mx-auto w-full">
          <h1 class="text-5xl font-bold text-brand-text leading-tight mb-4">
            {{ $t('landing.hero.title') }}
          </h1>
          <h2 class="text-xl font-bold text-brand-text/90 mb-4">
            {{ $t('landing.hero.subtitle') }}
          </h2>
          <p class="text-sm text-brand-text/70 leading-relaxed mb-8 max-w-sm">
            {{ $t('landing.hero.description') }}
          </p>
          <div class="flex items-center gap-3">
            <a href="#contact" class="px-5 py-2.5 bg-brand-red text-white text-sm font-medium rounded hover:bg-red-700 transition-colors">
              {{ $t('landing.hero.ctaPrimary') }}
            </a>
            <a href="#services" class="px-5 py-2.5 border border-white/60 bg-gray-600 text-white text-sm font-medium rounded hover:bg-gray-300 transition-colors">
              {{ $t('landing.hero.ctaSecondary') }}
            </a>
          </div>
        </div>
      </div>

      <!-- Stats strip pinned to bottom, with checklist card floating above its right -->
      <div class="relative z-10 max-w-7xl mx-auto w-full px-6 pb-0">
        <!-- Checklist card pinned just above the right of the stats strip -->
        <div class="absolute bottom-full right-6 mb-3 w-72">
          <div class="bg-white border border-gray-200 shadow-lg rounded p-4">
            <div class="flex items-center justify-between mb-2">
              <span class="font-bold text-brand-text text-sm">{{ $t('landing.hero.checklist.title') }}</span>
              <span class="text-xs text-brand-red font-medium">{{ $t('landing.hero.checklist.badge') }}</span>
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
            </ul>
          </div>
        </div>
        <div class="border border-white/20 rounded-t grid grid-cols-3 divide-x divide-white/20 bg-black/40 backdrop-blur-sm" style="background-color: #EEEFF1;">
          <div class="flex items-center gap-3 px-8 py-5" style="border-left: 5px solid #C10007; border-right: 3px solid #fff;">
            <span class="w-2.5 h-2.5 rounded-full bg-brand-red flex-shrink-0"></span>
            <div>
              <div class="font-bold text-brand-text text-sm">{{ $t('landing.hero.stats.fast') }}</div>
              <div class="text-xs text-brand-text/60">{{ $t('landing.hero.stats.response') }}</div>
            </div>
          </div>
          <div class="flex items-center gap-3 px-8 py-5" style="border-left: 5px solid #3C7A48; border-right: 3px solid #fff;">
            <span class="w-2.5 h-2.5 rounded-full bg-brand-green flex-shrink-0"></span>
            <div>
              <div class="font-bold text-brand-text text-sm">{{ $t('landing.hero.stats.standard') }}</div>
              <div class="text-xs text-brand-text/60">{{ $t('landing.hero.stats.compliance') }}</div>
            </div>
          </div>
          <div class="flex items-center gap-3 px-8 py-5" style="border-left: 5px solid #E9A800;">
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
    <section id="services" class="max-w-7xl mx-auto px-6 py-16">
      <h2 class="text-3xl font-bold text-brand-text mb-2">{{ $t('landing.services.title') }}</h2>
      <p class="text-sm text-gray-500 mb-8">{{ $t('landing.services.description') }}</p>
      <div class="grid grid-cols-5 gap-4">
        <div v-for="service in services" :key="service.key" class="border border-gray-200 rounded overflow-hidden">
          <img :src="service.image" :alt="service.title" class="w-full h-32 object-cover" />
          <div class="p-3">
            <div class="font-semibold text-brand-text text-sm mb-1">{{ service.title }}</div>
            <p class="text-xs text-gray-500 leading-relaxed">{{ service.description }}</p>
            <a href="#contact" class="inline-block mt-2 text-xs text-brand-red font-medium hover:underline">{{ $t('landing.services.learnMore') }}</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Subscription Packages -->
    <section id="packages" class="max-w-7xl mx-auto px-6 py-16 border-t border-gray-100">
      <h2 class="text-3xl font-bold text-brand-text mb-8">{{ $t('landing.packages.title') }}</h2>
      <div class="grid grid-cols-3 gap-6">
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
    <section id="compliance" class="max-w-7xl mx-auto px-6 py-16 border-t border-gray-100">
      <h2 class="text-3xl font-bold text-brand-text mb-8">{{ $t('landing.compliance.title') }}</h2>
      <div class="grid grid-cols-3 gap-6">
        <div v-for="card in complianceCards" :key="card.title" class="border border-gray-200 rounded p-6">
          <div class="font-semibold text-brand-text mb-2">{{ card.title }}</div>
          <p class="text-sm text-gray-500 leading-relaxed">{{ card.description }}</p>
        </div>
      </div>
    </section>

    <!-- Trust / Certifications -->
    <section class="max-w-7xl mx-auto px-6 py-16 border-t border-gray-100">
      <h2 class="text-3xl font-bold text-brand-text mb-2">{{ $t('landing.trust.title') }}</h2>
      <p class="text-sm text-gray-500 mb-8">{{ $t('landing.trust.description') }}</p>
      <div class="flex items-center gap-10">
        <div v-for="cert in certifications" :key="cert" class="flex items-center justify-center border border-gray-200 rounded px-6 py-4 text-sm font-bold text-gray-700 min-w-[90px]">
          {{ cert }}
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section id="contact" class="max-w-7xl mx-auto px-6 py-16 border-t border-gray-100">
      <h2 class="text-3xl font-bold text-brand-text mb-8">{{ $t('landing.contact.title') }}</h2>
      <div class="grid grid-cols-2 gap-16">
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
          <div class="grid grid-cols-2 gap-3">
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
          <div class="grid grid-cols-2 gap-3">
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

    <!-- Footer -->
    <footer class="border-t border-gray-200 py-12" style="background-color: #EEEFF1;">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid grid-cols-5 gap-8 mb-10">
          <!-- Brand -->
          <div class="col-span-2">
            <div class="flex items-center gap-3 mb-3">
              <div class="w-9 h-9 bg-gray-900 text-white flex items-center justify-center font-bold text-sm rounded-sm">
                GI
              </div>
              <div class="leading-tight">
                <div class="font-bold text-brand-text text-sm">Gal Impex</div>
                <div class="text-xs text-gray-500">{{ $t('landing.footer.tagline') }}</div>
              </div>
            </div>
            <p class="text-xs text-gray-500 leading-relaxed">
              {{ $t('landing.footer.description') }}
            </p>
          </div>
          <!-- Company -->
          <div>
            <div class="font-semibold text-brand-text text-sm mb-3">{{ $t('landing.footer.company.title') }}</div>
            <ul class="space-y-2 text-xs text-gray-500">
              <li><a href="#about" class="hover:text-brand-text transition-colors">{{ $t('landing.footer.company.about') }}</a></li>
              <li><a href="#projects" class="hover:text-brand-text transition-colors">{{ $t('landing.footer.company.projects') }}</a></li>
              <li><a href="#contact" class="hover:text-brand-text transition-colors">{{ $t('landing.footer.company.careers') }}</a></li>
            </ul>
          </div>
          <!-- Services -->
          <div>
            <div class="font-semibold text-brand-text text-sm mb-3">{{ $t('landing.footer.services.title') }}</div>
            <ul class="space-y-2 text-xs text-gray-500">
              <li><a href="#services" class="hover:text-brand-text transition-colors">{{ $t('landing.footer.services.supply') }}</a></li>
              <li><a href="#services" class="hover:text-brand-text transition-colors">{{ $t('landing.footer.services.installation') }}</a></li>
              <li><a href="#services" class="hover:text-brand-text transition-colors">{{ $t('landing.footer.services.inspection') }}</a></li>
              <li><a href="#services" class="hover:text-brand-text transition-colors">{{ $t('landing.footer.services.training') }}</a></li>
            </ul>
          </div>
          <!-- Compliance -->
          <div>
            <div class="font-semibold text-brand-text text-sm mb-3">{{ $t('landing.footer.compliance.title') }}</div>
            <ul class="space-y-2 text-xs text-gray-500">
              <li><a href="#compliance" class="hover:text-brand-text transition-colors">{{ $t('landing.footer.compliance.standards') }}</a></li>
              <li><a href="#compliance" class="hover:text-brand-text transition-colors">{{ $t('landing.footer.compliance.certifications') }}</a></li>
              <li><a href="#contact" class="hover:text-brand-text transition-colors">{{ $t('landing.footer.compliance.contact') }}</a></li>
            </ul>
          </div>
        </div>
        <div class="border-t border-gray-200 pt-6 text-center text-xs text-gray-400">
          © {{ new Date().getFullYear() }} Gal Impex. {{ $t('landing.footer.copyright') }}
        </div>
      </div>
    </footer>

  </div>
</template>

<script setup lang="ts">
import heroImage from '~/assets/images/Hero5.png'

const { t } = useI18n()

const services = computed(() => [
  { key: 'supply', title: t('landing.services.supply.title'), description: t('landing.services.supply.description'), image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80' },
  { key: 'installation', title: t('landing.services.installation.title'), description: t('landing.services.installation.description'), image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=400&q=80' },
  { key: 'inspection', title: t('landing.services.inspection.title'), description: t('landing.services.inspection.description'), image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&q=80' },
  { key: 'drills', title: t('landing.services.drills.title'), description: t('landing.services.drills.description'), image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&q=80' },
  { key: 'reporting', title: t('landing.services.reporting.title'), description: t('landing.services.reporting.description'), image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&q=80' },
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

const certifications = ['ISO 9001', 'MNS', 'NFPA', 'CE']
</script>
