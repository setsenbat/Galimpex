<template>
  <div class="font-sans text-brand-text">

    <!-- Page Header -->
    <section class="pt-32 pb-16 px-4 md:px-6 max-w-7xl mx-auto">
      <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-text leading-tight mb-4">
        {{ $t('landing.services.title') }}
      </h1>
      <p class="text-sm md:text-base text-gray-500 max-w-2xl leading-relaxed">
        {{ $t('landing.services.description') }}
      </p>
    </section>

    <!-- Services Grid -->
    <section class="px-4 md:px-6 pb-16 max-w-7xl mx-auto">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        <!-- Equipment Supply -->
        <div class="border border-gray-200 rounded-lg overflow-hidden group hover:shadow-md transition-shadow">
          <div class="relative overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80"
              :alt="$t('landing.services.supply.title')"
              class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div class="absolute top-3 left-3 bg-brand-red text-white text-xs font-semibold px-2.5 py-1 rounded">
              {{ $t('landing.services.supply.title') }}
            </div>
          </div>
          <div class="p-5">
            <h2 class="font-bold text-brand-text text-base mb-2">{{ $t('landing.services.supply.title') }}</h2>
            <p class="text-sm text-gray-500 leading-relaxed mb-4">{{ $t('landing.services.supply.description') }}</p>
            <a href="/#contact" class="inline-flex items-center gap-1 text-sm text-brand-red font-medium hover:underline">
              {{ $t('landing.services.learnMore') }}
            </a>
          </div>
        </div>

        <!-- System Installation -->
        <div class="border border-gray-200 rounded-lg overflow-hidden group hover:shadow-md transition-shadow">
          <div class="relative overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=600&q=80"
              :alt="$t('landing.services.installation.title')"
              class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div class="absolute top-3 left-3 bg-brand-red text-white text-xs font-semibold px-2.5 py-1 rounded">
              {{ $t('landing.services.installation.title') }}
            </div>
          </div>
          <div class="p-5">
            <h2 class="font-bold text-brand-text text-base mb-2">{{ $t('landing.services.installation.title') }}</h2>
            <p class="text-sm text-gray-500 leading-relaxed mb-4">{{ $t('landing.services.installation.description') }}</p>
            <a href="/#contact" class="inline-flex items-center gap-1 text-sm text-brand-red font-medium hover:underline">
              {{ $t('landing.services.learnMore') }}
            </a>
          </div>
        </div>

        <!-- Inspection & Refill -->
        <div class="border border-gray-200 rounded-lg overflow-hidden group hover:shadow-md transition-shadow">
          <div class="relative overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80"
              :alt="$t('landing.services.inspection.title')"
              class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div class="absolute top-3 left-3 bg-brand-green text-white text-xs font-semibold px-2.5 py-1 rounded">
              {{ $t('landing.services.inspection.title') }}
            </div>
          </div>
          <div class="p-5">
            <h2 class="font-bold text-brand-text text-base mb-2">{{ $t('landing.services.inspection.title') }}</h2>
            <p class="text-sm text-gray-500 leading-relaxed mb-4">{{ $t('landing.services.inspection.description') }}</p>
            <a href="/#contact" class="inline-flex items-center gap-1 text-sm text-brand-red font-medium hover:underline">
              {{ $t('landing.services.learnMore') }}
            </a>
          </div>
        </div>

        <!-- Training & Drills -->
        <div class="border border-gray-200 rounded-lg overflow-hidden group hover:shadow-md transition-shadow">
          <div class="relative overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80"
              :alt="$t('landing.services.drills.title')"
              class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div class="absolute top-3 left-3 bg-brand-yellow text-brand-text text-xs font-semibold px-2.5 py-1 rounded">
              {{ $t('landing.services.drills.title') }}
            </div>
          </div>
          <div class="p-5">
            <h2 class="font-bold text-brand-text text-base mb-2">{{ $t('landing.services.drills.title') }}</h2>
            <p class="text-sm text-gray-500 leading-relaxed mb-4">{{ $t('landing.services.drills.description') }}</p>
            <a href="/#contact" class="inline-flex items-center gap-1 text-sm text-brand-red font-medium hover:underline">
              {{ $t('landing.services.learnMore') }}
            </a>
          </div>
        </div>

        <!-- Audit-ready Reporting -->
        <div class="border border-gray-200 rounded-lg overflow-hidden group hover:shadow-md transition-shadow">
          <div class="relative overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80"
              :alt="$t('landing.services.reporting.title')"
              class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div class="absolute top-3 left-3 bg-brand-green text-white text-xs font-semibold px-2.5 py-1 rounded">
              {{ $t('landing.services.reporting.title') }}
            </div>
          </div>
          <div class="p-5">
            <h2 class="font-bold text-brand-text text-base mb-2">{{ $t('landing.services.reporting.title') }}</h2>
            <p class="text-sm text-gray-500 leading-relaxed mb-4">{{ $t('landing.services.reporting.description') }}</p>
            <a href="/#contact" class="inline-flex items-center gap-1 text-sm text-brand-red font-medium hover:underline">
              {{ $t('landing.services.learnMore') }}
            </a>
          </div>
        </div>

        <!-- CTA Card -->
        <div class="border-2 border-brand-red rounded-lg p-5 flex flex-col justify-between bg-red-50">
          <div>
            <h2 class="font-bold text-brand-text text-base mb-2">{{ $t('landing.nav.getQuote') }}</h2>
            <p class="text-sm text-gray-500 leading-relaxed mb-6">{{ $t('landing.hero.description') }}</p>
          </div>
          <a
            href="/#contact"
            class="inline-block px-5 py-2.5 bg-brand-red text-white text-sm font-medium rounded hover:bg-red-700 transition-colors w-fit"
          >
            {{ $t('landing.nav.getQuote') }}
          </a>
        </div>

      </div>
    </section>

    <!-- Standards strip -->
    <section class="border-t border-gray-100 py-10 px-4 md:px-6 max-w-7xl mx-auto">
      <div class="flex flex-wrap items-center gap-4 md:gap-10">
        <div
          v-for="cert in ['ISO 9001', 'MNS', 'NFPA', 'CE']"
          :key="cert"
          class="flex items-center justify-center border border-gray-200 rounded px-6 py-4 text-sm font-bold text-gray-700 min-w-[90px]"
        >
          {{ cert }}
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Services — Gal Impex'
})
</script>
