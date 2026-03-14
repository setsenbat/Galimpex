<template>
  <div>
    <!-- Navbar -->
    <header class="w-full fixed top-0 z-50 bg-white" >
      <div class="mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        <!-- Logo -->
        <a href="/" class="flex items-center ml-2 md:ml-6">
          <img src="~/assets/images/logo/logo_horizontal.png" alt="Gal Impex" style="height: 3.5rem; width: auto; display: block;" />
        </a>
        <!-- Nav links (desktop) -->
        <nav class="hidden md:flex items-center gap-8">
          <a href="#about" class="text-sm text-gray-600 hover:text-brand-text transition-colors">{{ $t('landing.nav.about') }}</a>
          <a href="/services" class="text-sm text-gray-600 hover:text-brand-text transition-colors">{{ $t('landing.nav.services') }}</a>
          <a href="/packages" class="text-sm text-gray-600 hover:text-brand-text transition-colors">{{ $t('landing.nav.packages') }}</a>
          <a href="#compliance" class="text-sm text-gray-600 hover:text-brand-text transition-colors">{{ $t('landing.nav.compliance') }}</a>
          <a href="#projects" class="text-sm text-gray-600 hover:text-brand-text transition-colors">{{ $t('landing.nav.projects') }}</a>
          <a href="#contact" class="text-sm text-gray-600 hover:text-brand-text transition-colors">{{ $t('landing.nav.contact') }}</a>
        </nav>
        <!-- CTA buttons + language + hamburger -->
        <div class="flex items-center gap-1 md:gap-2">
          <a href="#contact" class="px-3 md:px-4 py-2 bg-brand-red text-white text-xs md:text-sm font-medium rounded hover:bg-red-700 transition-colors">
            {{ $t('landing.nav.getQuote') }}
          </a>
          <a href="#packages" class="hidden sm:inline-block px-3 md:px-4 py-2 bg-brand-yellow text-white text-brand-text text-xs md:text-sm font-medium rounded hover:opacity-90 transition-colors mr-0 md:mr-6">
            {{ $t('landing.nav.subscription') }}
          </a>
          <LanguageBar />
          <!-- Hamburger (mobile only) -->
          <button class="md:hidden p-2 ml-1" @click="mobileMenuOpen = !mobileMenuOpen">
            <Icon :name="mobileMenuOpen ? 'heroicons:x-mark' : 'heroicons:bars-3'" class="w-6 h-6 text-brand-text" />
          </button>
        </div>
      </div>
    </header>

    <!-- Mobile nav dropdown -->
    <div v-if="mobileMenuOpen" class="md:hidden fixed top-20 left-0 w-full z-40 border-b border-gray-200 py-4 px-6 flex flex-col gap-4" style="background-color: #EEEFF1;">
      <a href="#about" class="text-sm text-gray-600 hover:text-brand-text transition-colors" @click="mobileMenuOpen = false">{{ $t('landing.nav.about') }}</a>
      <a href="/services" class="text-sm text-gray-600 hover:text-brand-text transition-colors" @click="mobileMenuOpen = false">{{ $t('landing.nav.services') }}</a>
      <a href="/packages" class="text-sm text-gray-600 hover:text-brand-text transition-colors" @click="mobileMenuOpen = false">{{ $t('landing.nav.packages') }}</a>
      <a href="#compliance" class="text-sm text-gray-600 hover:text-brand-text transition-colors" @click="mobileMenuOpen = false">{{ $t('landing.nav.compliance') }}</a>
      <a href="#projects" class="text-sm text-gray-600 hover:text-brand-text transition-colors" @click="mobileMenuOpen = false">{{ $t('landing.nav.projects') }}</a>
      <a href="#contact" class="text-sm text-gray-600 hover:text-brand-text transition-colors" @click="mobileMenuOpen = false">{{ $t('landing.nav.contact') }}</a>
      <a href="#packages" class="sm:hidden inline-block px-4 py-2 bg-brand-yellow text-brand-text text-sm font-medium rounded hover:opacity-90 transition-colors w-fit" @click="mobileMenuOpen = false">
        {{ $t('landing.nav.subscription') }}
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
const mobileMenuOpen = ref(false)
</script>
