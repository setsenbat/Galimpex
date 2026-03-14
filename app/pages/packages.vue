<template>
  <div class="font-sans text-brand-text">

    <!-- Page Header -->
    <section class="pt-32 pb-16 px-4 md:px-6 max-w-7xl mx-auto">
      <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-text leading-tight mb-4">
        {{ $t('landing.packages.title') }}
      </h1>
      <p class="text-sm md:text-base text-gray-500 max-w-2xl leading-relaxed">
        {{ $t('landing.services.description') }}
      </p>
    </section>

    <!-- Packages Grid -->
    <section class="px-4 md:px-6 pb-16 max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">

        <!-- Basic -->
        <div class="border border-gray-200 rounded-lg p-8">
          <div class="mb-6">
            <div class="font-bold text-brand-text text-xl mb-1">{{ $t('landing.packages.basic.title') }}</div>
            <div class="text-xs text-gray-400 mb-4">{{ $t('landing.packages.basic.subtitle') }}</div>
            <div class="flex items-baseline gap-1">
              <span class="text-sm text-gray-500">{{ $t('landing.packages.from') }}</span>
              <span class="text-3xl font-bold text-brand-text">{{ $t('landing.packages.basic.price') }}</span>
            </div>
            <div class="text-xs text-gray-400 mt-1">/ {{ $t('landing.packages.basic.annual') }}</div>
          </div>
          <ul class="space-y-3 mb-8">
            <li class="flex items-start gap-2 text-sm text-gray-700">
              <Icon name="heroicons:check-circle" class="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
              {{ $t('landing.packages.basic.annual') }}
            </li>
            <li class="flex items-start gap-2 text-sm text-gray-700">
              <Icon name="heroicons:check-circle" class="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
              {{ $t('landing.packages.basic.refill') }}
            </li>
            <li class="flex items-start gap-2 text-sm text-gray-700">
              <Icon name="heroicons:check-circle" class="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
              {{ $t('landing.packages.basic.support') }}
            </li>
          </ul>
          <a href="/#contact" class="block w-full text-center px-5 py-3 border border-brand-red text-brand-red text-sm font-semibold rounded hover:bg-brand-red hover:text-white transition-colors">
            {{ $t('landing.nav.getQuote') }}
          </a>
        </div>

        <!-- Standard (Most popular) -->
        <div class="border-2 border-brand-red rounded-lg p-8 relative shadow-lg">
          <span class="absolute -top-3.5 left-6 bg-brand-red text-white text-xs font-semibold px-4 py-1 rounded-full">
            {{ $t('landing.packages.mostPopular') }}
          </span>
          <div class="mb-6">
            <div class="font-bold text-brand-text text-xl mb-1">{{ $t('landing.packages.standard.title') }}</div>
            <div class="text-xs text-gray-400 mb-4">&nbsp;</div>
            <div class="flex items-baseline gap-1">
              <span class="text-sm text-gray-500">{{ $t('landing.packages.from') }}</span>
              <span class="text-3xl font-bold text-brand-text">{{ $t('landing.packages.standard.price') }}</span>
            </div>
            <div class="text-xs text-gray-400 mt-1">/ {{ $t('landing.packages.standard.quarterly') }}</div>
          </div>
          <ul class="space-y-3 mb-8">
            <li class="flex items-start gap-2 text-sm text-gray-700">
              <Icon name="heroicons:check-circle" class="w-5 h-5 text-brand-red mt-0.5 flex-shrink-0" />
              {{ $t('landing.packages.standard.quarterly') }}
            </li>
            <li class="flex items-start gap-2 text-sm text-gray-700">
              <Icon name="heroicons:check-circle" class="w-5 h-5 text-brand-red mt-0.5 flex-shrink-0" />
              {{ $t('landing.packages.standard.training') }}
            </li>
            <li class="flex items-start gap-2 text-sm text-gray-700">
              <Icon name="heroicons:check-circle" class="w-5 h-5 text-brand-red mt-0.5 flex-shrink-0" />
              {{ $t('landing.packages.standard.checklist') }}
            </li>
            <li class="flex items-start gap-2 text-sm text-gray-700">
              <Icon name="heroicons:check-circle" class="w-5 h-5 text-brand-red mt-0.5 flex-shrink-0" />
              {{ $t('landing.packages.standard.sla') }}
            </li>
          </ul>
          <a href="/#contact" class="block w-full text-center px-5 py-3 bg-brand-red text-white text-sm font-semibold rounded hover:bg-red-700 transition-colors">
            {{ $t('landing.nav.getQuote') }}
          </a>
        </div>

        <!-- Premium -->
        <div class="border border-gray-200 rounded-lg p-8">
          <div class="mb-6">
            <div class="font-bold text-brand-text text-xl mb-1">{{ $t('landing.packages.premium.title') }}</div>
            <div class="text-xs text-gray-400 mb-4">{{ $t('landing.packages.premium.subtitle') }}</div>
            <div class="flex items-baseline gap-1">
              <span class="text-sm text-gray-500">{{ $t('landing.packages.from') }}</span>
              <span class="text-3xl font-bold text-brand-text">{{ $t('landing.packages.premium.price') }}</span>
            </div>
            <div class="text-xs text-gray-400 mt-1">/ {{ $t('landing.packages.premium.monthly') }}</div>
          </div>
          <ul class="space-y-3 mb-8">
            <li class="flex items-start gap-2 text-sm text-gray-700">
              <Icon name="heroicons:check-circle" class="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
              {{ $t('landing.packages.premium.monthly') }}
            </li>
            <li class="flex items-start gap-2 text-sm text-gray-700">
              <Icon name="heroicons:check-circle" class="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
              {{ $t('landing.packages.premium.maintenance') }}
            </li>
            <li class="flex items-start gap-2 text-sm text-gray-700">
              <Icon name="heroicons:check-circle" class="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
              {{ $t('landing.packages.premium.reporting') }}
            </li>
            <li class="flex items-start gap-2 text-sm text-gray-700">
              <Icon name="heroicons:check-circle" class="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
              {{ $t('landing.packages.premium.engineer') }}
            </li>
          </ul>
          <a href="/#contact" class="block w-full text-center px-5 py-3 border border-brand-red text-brand-red text-sm font-semibold rounded hover:bg-brand-red hover:text-white transition-colors">
            {{ $t('landing.nav.getQuote') }}
          </a>
        </div>

      </div>
    </section>

    <!-- Compliance strip -->
    <section class="border-t border-gray-100 py-12 px-4 md:px-6 max-w-7xl mx-auto">
      <h2 class="text-2xl md:text-3xl font-bold text-brand-text mb-8">{{ $t('landing.compliance.title') }}</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="border border-gray-200 rounded-lg p-6">
          <Icon name="heroicons:clipboard-document-check" class="w-8 h-8 text-brand-green mb-3" />
          <div class="font-semibold text-brand-text mb-2">{{ $t('landing.compliance.checklists.title') }}</div>
          <p class="text-sm text-gray-500 leading-relaxed">{{ $t('landing.compliance.checklists.description') }}</p>
        </div>
        <div class="border border-gray-200 rounded-lg p-6">
          <Icon name="heroicons:document-text" class="w-8 h-8 text-brand-red mb-3" />
          <div class="font-semibold text-brand-text mb-2">{{ $t('landing.compliance.proof.title') }}</div>
          <p class="text-sm text-gray-500 leading-relaxed">{{ $t('landing.compliance.proof.description') }}</p>
        </div>
        <div class="border border-gray-200 rounded-lg p-6">
          <Icon name="heroicons:users" class="w-8 h-8 text-brand-yellow mb-3" />
          <div class="font-semibold text-brand-text mb-2">{{ $t('landing.compliance.culture.title') }}</div>
          <p class="text-sm text-gray-500 leading-relaxed">{{ $t('landing.compliance.culture.description') }}</p>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Packages — Gal Impex'
})
</script>
