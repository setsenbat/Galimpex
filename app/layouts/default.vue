<template>
  <div class="font-sans text-brand-text">

    <NavBar />

    <!-- Page content -->
    <slot />

    <!-- Footer -->
    <footer class="border-t border-gray-200 py-12" style="background-color: #EEEFF1;">
      <div class="max-w-7xl mx-auto px-4 md:px-6">
        <div class="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8 mb-10">
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

