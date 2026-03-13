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
          <a href="#about" class="text-sm text-gray-600 hover:text-brand-text transition-colors">About</a>
          <a href="#services" class="text-sm text-gray-600 hover:text-brand-text transition-colors">Services</a>
          <a href="#packages" class="text-sm text-gray-600 hover:text-brand-text transition-colors">Packages</a>
          <a href="#compliance" class="text-sm text-gray-600 hover:text-brand-text transition-colors">Compliance</a>
          <a href="#projects" class="text-sm text-gray-600 hover:text-brand-text transition-colors">Projects</a>
          <a href="#contact" class="text-sm text-gray-600 hover:text-brand-text transition-colors">Contact</a>
        </nav>
        <!-- CTA buttons -->
        <div class="flex items-center gap-2">
          <a href="#contact" class="px-4 py-2 bg-brand-red text-white text-sm font-medium rounded hover:bg-red-700 transition-colors">
            Get a quote
          </a>
          <a href="#packages" class="px-4 py-2 bg-brand-yellow text-white text-brand-text text-sm font-medium rounded hover:opacity-90 transition-colors">
            Subscription
          </a>
        </div>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="relative h-[90vh] bg-[75%_55%] bg-no-repeat flex flex-col" :style="{ backgroundImage: `url(${heroImage})`, backgroundSize: '50% auto' }">
      <!-- Dark overlay -->
      <div class="absolute inset-0"></div>

      <!-- Content -->
      <div class="relative z-10 flex-1 flex items-center px-6">
        <div class="max-w-7xl mx-auto w-full">
          <h1 class="text-5xl font-bold text-brand-text leading-tight mb-4">
            Fire safety you can prove.
          </h1>
          <h2 class="text-xl font-bold text-brand-text/90 mb-4">
            Your trusted partner
          </h2>
          <p class="text-sm text-brand-text/70 leading-relaxed mb-8 max-w-sm">
            Gal Impex helps buildings, offices and industrial sites stay compliant with reliable fire equipment, installation and inspection programs.
          </p>
          <div class="flex items-center gap-3">
            <a href="#contact" class="px-5 py-2.5 bg-brand-red text-white text-sm font-medium rounded hover:bg-red-700 transition-colors">
              Request site survey
            </a>
            <a href="#services" class="px-5 py-2.5 border border-white/60 bg-gray-600 text-white text-sm font-medium rounded hover:bg-gray-300 transition-colors">
              Explore services
            </a>
          </div>
        </div>
      </div>

      <!-- Stats strip pinned to bottom, with checklist card floating above its left -->
      <div class="relative z-10 max-w-7xl mx-auto w-full px-6 pb-0">
        <!-- Checklist card pinned just above the left of the stats strip -->
        <div class="absolute bottom-full right-6 mb-3 w-72">
          <div class="bg-white border border-gray-200 shadow-lg rounded p-4">
            <div class="flex items-center justify-between mb-2">
              <span class="font-bold text-brand-text text-sm">Quick checklist</span>
              <span class="text-xs text-brand-red font-medium">Recommended</span>
            </div>
            <ul class="space-y-2">
              <li class="flex items-start gap-2 text-xs text-gray-700">
                <Icon name="heroicons:check" class="w-3.5 h-3.5 text-brand-red mt-0.5 flex-shrink-0" />
                Extinguisher inspection + refill log
              </li>
              <li class="flex items-start gap-2 text-xs text-gray-700">
                <Icon name="heroicons:check" class="w-3.5 h-3.5 text-brand-red mt-0.5 flex-shrink-0" />
                Alarm / detection system maintenance
              </li>
              <li class="flex items-start gap-2 text-xs text-gray-700">
                <Icon name="heroicons:check" class="w-3.5 h-3.5 text-brand-red mt-0.5 flex-shrink-0" />
                Evacuation signage + emergency lighting
              </li>
              <li class="flex items-start gap-2 text-xs text-gray-700">
                <Icon name="heroicons:check" class="w-3.5 h-3.5 text-brand-red mt-0.5 flex-shrink-0" />
                Staff training + drill support
              </li>
            </ul>
          </div>
        </div>
        <div class="border border-white/20 rounded-t grid grid-cols-3 divide-x divide-white/20 bg-black/40 backdrop-blur-sm" style="background-color: #EEEFF1;">
          <div class="flex items-center gap-3 px-8 py-5" style="border-left: 5px solid #C10007; border-right: 3px solid #fff;">
            <span class="w-2.5 h-2.5 rounded-full bg-brand-red flex-shrink-0"></span>
            <div>
              <div class="font-bold text-brand-text text-sm">Fast</div>
              <div class="text-xs text-brand-text/60">Response</div>
            </div>
          </div>
          <div class="flex items-center gap-3 px-8 py-5" style="border-left: 5px solid #3C7A48; border-right: 3px solid #fff;">
            <span class="w-2.5 h-2.5 rounded-full bg-brand-green flex-shrink-0"></span>
            <div>
              <div class="font-bold text-brand-text text-sm">MNS / NFPA</div>
              <div class="text-xs text-brand-text/60">Compliance</div>
            </div>
          </div>
          <div class="flex items-center gap-3 px-8 py-5" style="border-left: 5px solid #E9A800;">
            <span class="w-2.5 h-2.5 rounded-full bg-brand-yellow flex-shrink-0" ></span>
            <div>
              <div class="font-bold text-brand-text text-sm">End-to-end</div>
              <div class="text-xs text-brand-text/60">Service</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="max-w-7xl mx-auto px-6 py-16">
      <h2 class="text-3xl font-bold text-brand-text mb-2">Services</h2>
      <p class="text-sm text-gray-500 mb-8">
        From equipment supply to installation and ongoing maintenance — built for audits and long-term reliability.
      </p>
      <div class="grid grid-cols-5 gap-4">
        <div v-for="service in services" :key="service.title" class="border border-gray-200 rounded overflow-hidden">
          <img :src="service.image" :alt="service.title" class="w-full h-32 object-cover" />
          <div class="p-3">
            <div class="font-semibold text-brand-text text-sm mb-1">{{ service.title }}</div>
            <p class="text-xs text-gray-500 leading-relaxed">{{ service.description }}</p>
            <a href="#contact" class="inline-block mt-2 text-xs text-brand-red font-medium hover:underline">Learn more →</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Subscription Packages -->
    <section id="packages" class="max-w-7xl mx-auto px-6 py-16 border-t border-gray-100">
      <h2 class="text-3xl font-bold text-brand-text mb-8">Subscription packages</h2>
      <div class="grid grid-cols-3 gap-6">
        <!-- Basic -->
        <div class="border border-gray-200 rounded p-6">
          <div class="font-bold text-brand-text text-lg mb-1">Basic</div>
          <div class="flex items-baseline gap-1 mb-1">
            <span class="text-sm text-gray-700">From</span>
            <span class="font-bold text-brand-text">₮150,000</span>
          </div>
          <div class="text-xs text-gray-500 mb-5">For small offices</div>
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
            Most popular
          </span>
          <div class="font-bold text-brand-text text-lg mb-1">Standard</div>
          <div class="flex items-baseline gap-1 mb-1">
            <span class="text-sm text-gray-700">From</span>
            <span class="font-bold text-brand-text">₮350,000</span>
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
          <div class="font-bold text-brand-text text-lg mb-1">Premium</div>
          <div class="flex items-baseline gap-1 mb-1">
            <span class="text-sm text-gray-700">From</span>
            <span class="font-bold text-brand-text">₮750,000</span>
          </div>
          <div class="text-xs text-gray-500 mb-5">For industrial facilities</div>
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
      <h2 class="text-3xl font-bold text-brand-text mb-8">Compliance &amp; quality</h2>
      <div class="grid grid-cols-3 gap-6">
        <div class="border border-gray-200 rounded p-6">
          <div class="font-semibold text-brand-text mb-2">Standard checklists</div>
          <p class="text-sm text-gray-500 leading-relaxed">
            Inspection protocols aligned with MNS and NFPA.
          </p>
        </div>
        <div class="border border-gray-200 rounded p-6">
          <div class="font-semibold text-brand-text mb-2">Proof of service</div>
          <p class="text-sm text-gray-500 leading-relaxed">
            Logs, labels and reports ready for audits.
          </p>
        </div>
        <div class="border border-gray-200 rounded p-6">
          <div class="font-semibold text-brand-text mb-2">Safety culture</div>
          <p class="text-sm text-gray-500 leading-relaxed">
            Training programs that improve real behaviour.
          </p>
        </div>
      </div>
    </section>

    <!-- Trust / Certifications -->
    <section class="max-w-7xl mx-auto px-6 py-16 border-t border-gray-100">
      <h2 class="text-3xl font-bold text-brand-text mb-2">Trusted standards</h2>
      <p class="text-sm text-gray-500 mb-8">Certified and aligned with leading international fire safety standards.</p>
      <div class="flex items-center gap-10">
        <div v-for="cert in certifications" :key="cert" class="flex items-center justify-center border border-gray-200 rounded px-6 py-4 text-sm font-bold text-gray-700 min-w-[90px]">
          {{ cert }}
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section id="contact" class="max-w-7xl mx-auto px-6 py-16 border-t border-gray-100">
      <h2 class="text-3xl font-bold text-brand-text mb-8">Contact</h2>
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
            Building 9, #3, Olympic Street, 1st Khoroo, Sukhbaatar District, Ulaanbaatar 14240, Mongolia
          </div>
        </div>

        <!-- Contact form -->
        <div class="space-y-3">
          <div class="grid grid-cols-2 gap-3">
            <input
              type="text"
              placeholder="Name"
              class="w-full border border-gray-200 rounded px-4 py-2.5 text-sm text-brand-text placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
            <input
              type="text"
              placeholder="Company / Building"
              class="w-full border border-gray-200 rounded px-4 py-2.5 text-sm text-brand-text placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
          </div>
          <div class="grid grid-cols-2 gap-3">
            <input
              type="tel"
              placeholder="Phone"
              class="w-full border border-gray-200 rounded px-4 py-2.5 text-sm text-brand-text placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
            <input
              type="email"
              placeholder="Email"
              class="w-full border border-gray-200 rounded px-4 py-2.5 text-sm text-brand-text placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
          </div>
          <textarea
            placeholder="Message"
            rows="4"
            class="w-full border border-gray-200 rounded px-4 py-2.5 text-sm text-brand-text placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 resize-none"
          ></textarea>
          <button class="w-full bg-brand-navy text-white font-semibold text-sm py-3 rounded hover:bg-slate-800 transition-colors">
            Request a quote
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
                <div class="text-xs text-gray-500">Fire Safety | Mongolia</div>
              </div>
            </div>
            <p class="text-xs text-gray-500 leading-relaxed">
              Fire Safety Engineering since 1971
            </p>
          </div>
          <!-- Company -->
          <div>
            <div class="font-semibold text-brand-text text-sm mb-3">Company</div>
            <ul class="space-y-2 text-xs text-gray-500">
              <li><a href="#about" class="hover:text-brand-text transition-colors">About</a></li>
              <li><a href="#projects" class="hover:text-brand-text transition-colors">Projects</a></li>
              <li><a href="#contact" class="hover:text-brand-text transition-colors">Careers</a></li>
            </ul>
          </div>
          <!-- Services -->
          <div>
            <div class="font-semibold text-brand-text text-sm mb-3">Services</div>
            <ul class="space-y-2 text-xs text-gray-500">
              <li><a href="#services" class="hover:text-brand-text transition-colors">Equipment Supply</a></li>
              <li><a href="#services" class="hover:text-brand-text transition-colors">System Installation</a></li>
              <li><a href="#services" class="hover:text-brand-text transition-colors">Inspection &amp; Refill</a></li>
              <li><a href="#services" class="hover:text-brand-text transition-colors">Training &amp; Drills</a></li>
            </ul>
          </div>
          <!-- Compliance -->
          <div>
            <div class="font-semibold text-brand-text text-sm mb-3">Compliance</div>
            <ul class="space-y-2 text-xs text-gray-500">
              <li><a href="#compliance" class="hover:text-brand-text transition-colors">Standards</a></li>
              <li><a href="#compliance" class="hover:text-brand-text transition-colors">Certifications</a></li>
              <li><a href="#contact" class="hover:text-brand-text transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        <div class="border-t border-gray-200 pt-6 text-center text-xs text-gray-400">
          © {{ new Date().getFullYear() }} Gal Impex. All rights reserved.
        </div>
      </div>
    </footer>

  </div>
</template>

<script setup lang="ts">
import heroImage from '~/assets/images/Hero5.png'

const services = [
  {
    title: 'Equipment Supply',
    description: 'Fire extinguishers, cabinets, hoses and essential fire safety equipment supplied to meet building safety requirements.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
  },
  {
    title: 'System Installation',
    description: 'Design and installation of fire alarm and suppression systems tailored to the facility and compliance standards.',
    image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=400&q=80',
  },
  {
    title: 'Inspection & Refill',
    description: 'Regular inspection, testing and extinguisher refill services to keep fire protection equipment operational.',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&q=80',
  },
  {
    title: 'Training & Drills',
    description: 'Fire safety training and evacuation drills to prepare staff for emergency response.',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&q=80',
  },
  {
    title: 'Audit-ready Reporting',
    description: 'Clear service records, inspection logs and documentation prepared for regulatory inspections and audits.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&q=80',
  },
]

const basicFeatures = [
  'Annual inspection',
  'Extinguisher refill',
  'Phone support',
]

const standardFeatures = [
  'Quarterly inspection',
  'Staff training',
  'Compliance checklist',
  'Response SLA',
]

const premiumFeatures = [
  'Monthly inspection',
  'Full system maintenance',
  'Compliance reporting',
  'Dedicated engineer',
]

const certifications = ['ISO 9001', 'MNS', 'NFPA', 'CE']
</script>
