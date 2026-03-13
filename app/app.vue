<template>
  <div class="font-sans text-gray-900" >

    <!-- Navbar -->
    <header class="mx-auto border-b border-gray-200 bg-white sticky top-0 z-50" style="background-color: #EEEFF1;">
      <div class="mx-auto px-6 h-16 flex items-center justify-between">
        <!-- Logo -->
        <div class="flex items-center gap-3">
          <div class="w-9 h-9 bg-gray-900 text-white flex items-center justify-center font-bold text-sm rounded-sm">
            GI
          </div>
          <div class="leading-tight">
            <div class="font-bold text-gray-900 text-sm">Gal Impex</div>
            <div class="text-xs text-gray-500">Fire Safety | Mongolia</div>
          </div>
        </div>
        <!-- Nav links -->
        <nav class="hidden md:flex items-center gap-8">
          <a href="#services" class="text-sm text-gray-600 hover:text-gray-900 transition-colors">Services</a>
          <a href="#packages" class="text-sm text-gray-600 hover:text-gray-900 transition-colors">Packages</a>
          <a href="#compliance" class="text-sm text-gray-600 hover:text-gray-900 transition-colors">Compliance</a>
          <a href="#contact" class="text-sm text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
        </nav>
        <!-- CTA buttons -->
        <div class="flex items-center gap-2">
          <a href="#contact" class="px-4 py-2 bg-brand-red text-white text-sm font-medium rounded hover:bg-red-700 transition-colors">
            Get a quote
          </a>
          <a href="#packages" class="px-4 py-2 bg-brand-navy text-white text-sm font-medium rounded hover:bg-slate-800 transition-colors">
            Subscription
          </a>
        </div>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="p-50 mx-auto px-6 pt-14 pb-0 bg-cover bg-center bg-no-repeat" :style="{ backgroundImage: `url(${heroImage})` }">
      <div class="flex gap-12 items-start">
        <!-- Left content -->
        <div class="flex-1 pt-4">
          <h1 class="text-5xl font-bold text-gray-900 leading-tight mb-4">
            Fire safety you can prove.
          </h1>
          <h2 class="text-xl font-bold text-gray-900 mb-4">
            Inspection-ready. Audit-ready. Always.
          </h2>
          <p class="text-sm text-gray-500 leading-relaxed mb-8 max-w-sm">
            Gal Impex helps buildings, offices, and industrial sites stay compliant with reseller fire equipment, installation, and annual inspection/refill programs.
          </p>
          <div class="flex items-center gap-3">
            <a href="#contact" class="px-5 py-2.5 bg-gray-900 text-white text-sm font-medium rounded hover:bg-gray-700 transition-colors">
              Request site survey
            </a>
            <a href="#services" class="px-5 py-2.5 border border-gray-300 text-gray-700 text-sm font-medium rounded hover:bg-gray-50 transition-colors">
              Explore services
            </a>
          </div>
        </div>

        <!-- Right: image + checklist card -->
        <div class="w-[45%] relative flex-shrink-0">
          <!-- Quick checklist card -->
          <div class="w-72 bg-white border border-gray-200 shadow-lg rounded p-4">
            <div class="flex items-center justify-between mb-2">
              <span class="font-bold text-gray-900 text-sm">Quick checklist</span>
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
                Evacuation signage + emergency lighting fitting
              </li>
              <li class="flex items-start gap-2 text-xs text-gray-700">
                <Icon name="heroicons:check" class="w-3.5 h-3.5 text-brand-red mt-0.5 flex-shrink-0" />
                Staff training + drill support
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Stats strip -->
      <div class="mt-16 border border-gray-200 rounded grid grid-cols-3 divide-x divide-gray-200">
        <div class="flex items-center gap-3 px-8 py-5">
          <span class="w-2.5 h-2.5 rounded-full bg-brand-red flex-shrink-0"></span>
          <div>
            <div class="font-bold text-gray-900 text-sm">Fast</div>
            <div class="text-xs text-gray-500">Response</div>
          </div>
        </div>
        <div class="flex items-center gap-3 px-8 py-5">
          <span class="w-2.5 h-2.5 rounded-full bg-blue-500 flex-shrink-0"></span>
          <div>
            <div class="font-bold text-gray-900 text-sm">MNS/NFPA</div>
            <div class="text-xs text-gray-500">Compliance</div>
          </div>
        </div>
        <div class="flex items-center gap-3 px-8 py-5">
          <span class="w-2.5 h-2.5 rounded-full bg-orange-500 flex-shrink-0"></span>
          <div>
            <div class="font-bold text-gray-900 text-sm">End-to-end</div>
            <div class="text-xs text-gray-500">Service</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="max-w-7xl mx-auto px-6 py-16">
      <h2 class="text-3xl font-bold text-gray-900 mb-2">Services</h2>
      <p class="text-sm text-gray-500 mb-8">
        From equipment supply to installation and ongoing maintenance — built for audits and long term reliability.
      </p>
      <div class="grid grid-cols-5 gap-4">
        <div v-for="service in services" :key="service.title" class="border border-gray-200 rounded overflow-hidden">
          <img :src="service.image" :alt="service.title" class="w-full h-32 object-cover" />
          <div class="p-3">
            <div class="font-semibold text-gray-900 text-sm mb-1">{{ service.title }}</div>
            <p class="text-xs text-gray-500 leading-relaxed">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Subscription Packages -->
    <section id="packages" class="max-w-7xl mx-auto px-6 py-16 border-t border-gray-100">
      <h2 class="text-3xl font-bold text-gray-900 mb-8">Subscription packages</h2>
      <div class="grid grid-cols-3 gap-6">
        <!-- Basic -->
        <div class="border border-gray-200 rounded p-6">
          <div class="font-bold text-gray-900 text-lg mb-1">Basic</div>
          <div class="flex items-baseline gap-1 mb-1">
            <span class="text-sm text-gray-700">From</span>
            <span class="font-bold text-gray-900">₮150,000</span>
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
          <div class="font-bold text-gray-900 text-lg mb-1">Standard</div>
          <div class="flex items-baseline gap-1 mb-1">
            <span class="text-sm text-gray-700">From</span>
            <span class="font-bold text-gray-900">₮350,000</span>
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
          <div class="font-bold text-gray-900 text-lg mb-1">Premium</div>
          <div class="flex items-baseline gap-1 mb-1">
            <span class="text-sm text-gray-700">From</span>
            <span class="font-bold text-gray-900">₮750,000</span>
          </div>
          <div class="text-xs text-gray-500 mb-5">For complexes &amp; Industrial</div>
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
      <h2 class="text-3xl font-bold text-gray-900 mb-8">Compliance &amp; quality</h2>
      <div class="grid grid-cols-3 gap-6">
        <div class="border border-gray-200 rounded p-6">
          <div class="font-semibold text-gray-900 mb-2">Standard checklists</div>
          <p class="text-sm text-gray-500 leading-relaxed">
            Repeatable inspection forms that reduce variance and keep our partners on track.
          </p>
        </div>
        <div class="border border-gray-200 rounded p-6">
          <div class="font-semibold text-gray-900 mb-2">Proof of service</div>
          <p class="text-sm text-gray-500 leading-relaxed">
            Logs, labels, and reports that stand up to audits.
          </p>
        </div>
        <div class="border border-gray-200 rounded p-6">
          <div class="font-semibold text-gray-900 mb-2">Safety culture</div>
          <p class="text-sm text-gray-500 leading-relaxed">
            Training that builds real behaviour, not just paperwork.
          </p>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section id="contact" class="max-w-7xl mx-auto px-6 py-16 border-t border-gray-100">
      <h2 class="text-3xl font-bold text-gray-900 mb-8">Contact</h2>
      <div class="grid grid-cols-3 gap-8">
        <!-- Contact info -->
        <div class="space-y-4">
          <div class="flex items-center gap-3 text-sm text-gray-700">
            <Icon name="heroicons:envelope" class="w-5 h-5 text-gray-500 flex-shrink-0" />
            sales@galimpex.mn
          </div>
          <div class="flex items-center gap-3 text-sm text-gray-700">
            <Icon name="heroicons:phone" class="w-5 h-5 text-gray-500 flex-shrink-0" />
            +976 9900 0000
          </div>
        </div>

        <!-- Form fields -->
        <div class="space-y-3">
          <input
            type="text"
            placeholder="Name"
            class="w-full border border-gray-200 rounded px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400"
          />
          <input
            type="text"
            placeholder="Company / Building"
            class="w-full border border-gray-200 rounded px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400"
          />
        </div>

        <!-- CTA -->
        <div>
          <button class="w-full bg-brand-navy text-white font-semibold text-sm py-3 rounded hover:bg-slate-800 transition-colors">
            Request a quote
          </button>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="border-t border-gray-200 py-6">
      <div class="max-w-7xl mx-auto px-6 text-center text-xs text-gray-400">
        © {{ new Date().getFullYear() }} Gal Impex. Fire Safety | Mongolia
      </div>
    </footer>

  </div>
</template>

<script setup lang="ts">
import heroImage from '~/assets/images/hero3.png'

const services = [
  {
    title: 'Equipment Supply',
    description: 'Full-scale extinguisher and suppression system installations.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
  },
  {
    title: 'System Installation',
    description: 'Full-scale installation and button for fire-alarm systems.',
    image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=400&q=80',
  },
  {
    title: 'Inspection & Refill',
    description: 'Subscription-based inspection programs to keep refilling.',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&q=80',
  },
  {
    title: 'Training & Drills',
    description: 'Full-scale training and emergency reporting systems.',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&q=80',
  },
  {
    title: 'Audit-ready Reporting',
    description: 'Full-scale reporting documentation and installation systems.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&q=80',
  },
]

const basicFeatures = [
  'Annual inspection',
  'Annual inspection',
  'Phone support',
]

const standardFeatures = [
  'Quarterly inspection',
  'Remote training',
  'Compliance checklist',
  'Retianed SLA (replace same)',
]

const premiumFeatures = [
  'Quantity inspection',
  'Remote inspection refill',
  'Compliance phone checklist',
  'Quaten reporting for edits',
]
</script>
