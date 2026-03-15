<template>
  <div class="font-sans text-brand-text">

    <!-- Hero -->
    <section class="relative pt-32 pb-20 px-4 md:px-6 bg-brand-text bg-cover bg-center" :style="{ backgroundImage: `url(${heroBg})` }">
      <div class="absolute inset-0 bg-black/75"></div>
      <div class="max-w-7xl mx-auto relative z-10">
        <p class="text-xs font-semibold uppercase tracking-widest text-brand-yellow mb-3">{{ $t('projectsPage.hero.label') }}</p>
        <h1 class="text-3xl md:text-5xl font-bold text-white leading-tight mb-4 max-w-3xl">
          {{ $t('projectsPage.hero.title') }}
        </h1>
        <p class="text-sm md:text-base text-gray-300 max-w-2xl leading-relaxed mb-8">
          {{ $t('projectsPage.hero.description') }}
        </p>
        <div class="flex flex-wrap gap-3">
          <a href="/contact" class="px-5 py-2.5 bg-brand-red text-white text-sm font-semibold rounded hover:bg-red-700 transition-colors">
            {{ $t('projectsPage.hero.ctaPrimary') }}
          </a>
          <a href="/services" class="px-5 py-2.5 border border-white text-white text-sm font-semibold rounded hover:bg-white hover:text-brand-text transition-colors">
            {{ $t('projectsPage.hero.ctaSecondary') }}
          </a>
        </div>
        <div class="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/20 pt-8">
          <div v-for="stat in heroStats" :key="stat.valueKey">
            <div class="text-3xl font-bold text-white">{{ $t(stat.valueKey) }}</div>
            <div class="text-xs text-gray-400 mt-1">{{ $t(stat.labelKey) }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Filter Bar -->
    <div class="sticky top-16 z-20 bg-white border-b border-gray-200 shadow-sm">
      <div class="max-w-7xl mx-auto px-4 md:px-6">
        <div class="flex gap-1 overflow-x-auto py-3">
          <button
            v-for="filter in filters"
            :key="filter.key"
            @click="activeFilter = filter.key"
            class="whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium transition-colors flex-shrink-0"
            :class="activeFilter === filter.key
              ? 'bg-brand-red text-white'
              : 'text-gray-500 hover:text-brand-text hover:bg-gray-100'"
          >
            {{ $t(filter.labelKey) }}
          </button>
        </div>
      </div>
    </div>

    <!-- Projects Grid -->
    <section class="py-16 px-4 md:px-6 max-w-7xl mx-auto">
      <p class="text-sm text-gray-400 mb-8">{{ filteredProjects.length }} {{ $t('projectsPage.filters.resultsLabel') }}</p>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="project in filteredProjects"
          :key="project.key"
          class="group border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
        >
          <div class="relative overflow-hidden">
            <img
              :src="project.image"
              :alt="$t(project.nameKey)"
              class="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <span
              class="absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded text-white"
              :class="categoryColor(project.category)"
            >
              {{ $t(`projectsPage.categories.${project.category}`) }}
            </span>
          </div>
          <div class="p-5">
            <div class="flex items-center gap-1.5 text-xs text-gray-400 mb-2">
              <Icon name="heroicons:map-pin" class="w-3.5 h-3.5 flex-shrink-0" />
              <span>{{ $t(project.locationKey) }}</span>
            </div>
            <h3 class="font-bold text-brand-text text-base mb-2">{{ $t(project.nameKey) }}</h3>
            <p class="text-sm text-gray-500 leading-relaxed mb-4">{{ $t(project.descKey) }}</p>
            <div class="flex flex-wrap gap-1.5">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full"
              >
                {{ $t(tag) }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16 px-4 md:px-6 bg-brand-red">
      <div class="max-w-2xl mx-auto text-center">
        <h2 class="text-2xl md:text-3xl font-bold text-white mb-4">{{ $t('projectsPage.cta.title') }}</h2>
        <p class="text-sm md:text-base text-red-100 leading-relaxed mb-8">{{ $t('projectsPage.cta.description') }}</p>
        <a href="/contact" class="inline-block px-6 py-3 bg-white text-brand-red text-sm font-semibold rounded hover:bg-gray-100 transition-colors">
          {{ $t('projectsPage.cta.button') }}
        </a>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import heroBg from '~/assets/images/webImages/Mobicom-DC2.webp?url'
import imgKhaanBank from '~/assets/images/projectImages/Khaan bank.png?url'
import imgAmgalan from '~/assets/images/projectImages/Amgalan power plant.png?url'
import imgMandala from '~/assets/images/projectImages/Mandala.png?url'
import imgRiverGarden from '~/assets/images/projectImages/River garden.png?url'
import imgShunkhlai from '~/assets/images/projectImages/Shunkhlai.png?url'
import imgSongodo from '~/assets/images/projectImages/Songodo.png?url'
import imgTsetsii from '~/assets/images/projectImages/Tsetsii wind power.png?url'
import imgEco25 from '~/assets/images/projectImages/eco25.png?url'

useHead({
  title: 'Projects — Gal Impex'
})

const activeFilter = ref('all')

const filters = [
  { key: 'all', labelKey: 'projectsPage.filters.all' },
  { key: 'commercial', labelKey: 'projectsPage.filters.commercial' },
  { key: 'industrial', labelKey: 'projectsPage.filters.industrial' },
  { key: 'energy', labelKey: 'projectsPage.filters.energy' },
  { key: 'hospitality', labelKey: 'projectsPage.filters.hospitality' },
  { key: 'office', labelKey: 'projectsPage.filters.office' }
]

const projects = [
  {
    key: 'khaanbank',
    image: imgKhaanBank,
    category: 'commercial',
    nameKey: 'projectsPage.projects.khaanbank.name',
    locationKey: 'projectsPage.projects.khaanbank.location',
    descKey: 'projectsPage.projects.khaanbank.description',
    tags: ['projectsPage.projects.khaanbank.tag1', 'projectsPage.projects.khaanbank.tag2', 'projectsPage.projects.khaanbank.tag3']
  },
  {
    key: 'amgalan',
    image: imgAmgalan,
    category: 'industrial',
    nameKey: 'projectsPage.projects.amgalan.name',
    locationKey: 'projectsPage.projects.amgalan.location',
    descKey: 'projectsPage.projects.amgalan.description',
    tags: ['projectsPage.projects.amgalan.tag1', 'projectsPage.projects.amgalan.tag2', 'projectsPage.projects.amgalan.tag3']
  },
  {
    key: 'mandala',
    image: imgMandala,
    category: 'commercial',
    nameKey: 'projectsPage.projects.mandala.name',
    locationKey: 'projectsPage.projects.mandala.location',
    descKey: 'projectsPage.projects.mandala.description',
    tags: ['projectsPage.projects.mandala.tag1', 'projectsPage.projects.mandala.tag2', 'projectsPage.projects.mandala.tag3']
  },
  {
    key: 'rivergarden',
    image: imgRiverGarden,
    category: 'commercial',
    nameKey: 'projectsPage.projects.rivergarden.name',
    locationKey: 'projectsPage.projects.rivergarden.location',
    descKey: 'projectsPage.projects.rivergarden.description',
    tags: ['projectsPage.projects.rivergarden.tag1', 'projectsPage.projects.rivergarden.tag2', 'projectsPage.projects.rivergarden.tag3']
  },
  {
    key: 'shunkhlai',
    image: imgShunkhlai,
    category: 'office',
    nameKey: 'projectsPage.projects.shunkhlai.name',
    locationKey: 'projectsPage.projects.shunkhlai.location',
    descKey: 'projectsPage.projects.shunkhlai.description',
    tags: ['projectsPage.projects.shunkhlai.tag1', 'projectsPage.projects.shunkhlai.tag2', 'projectsPage.projects.shunkhlai.tag3']
  },
  {
    key: 'songodo',
    image: imgSongodo,
    category: 'hospitality',
    nameKey: 'projectsPage.projects.songodo.name',
    locationKey: 'projectsPage.projects.songodo.location',
    descKey: 'projectsPage.projects.songodo.description',
    tags: ['projectsPage.projects.songodo.tag1', 'projectsPage.projects.songodo.tag2', 'projectsPage.projects.songodo.tag3']
  },
  {
    key: 'tsetsii',
    image: imgTsetsii,
    category: 'energy',
    nameKey: 'projectsPage.projects.tsetsii.name',
    locationKey: 'projectsPage.projects.tsetsii.location',
    descKey: 'projectsPage.projects.tsetsii.description',
    tags: ['projectsPage.projects.tsetsii.tag1', 'projectsPage.projects.tsetsii.tag2', 'projectsPage.projects.tsetsii.tag3']
  },
  {
    key: 'eco25',
    image: imgEco25,
    category: 'commercial',
    nameKey: 'projectsPage.projects.eco25.name',
    locationKey: 'projectsPage.projects.eco25.location',
    descKey: 'projectsPage.projects.eco25.description',
    tags: ['projectsPage.projects.eco25.tag1', 'projectsPage.projects.eco25.tag2', 'projectsPage.projects.eco25.tag3']
  }
]

const filteredProjects = computed(() =>
  activeFilter.value === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter.value)
)

const heroStats = [
  { valueKey: 'projectsPage.stats.projectsValue', labelKey: 'projectsPage.stats.projectsLabel' },
  { valueKey: 'projectsPage.stats.industriesValue', labelKey: 'projectsPage.stats.industriesLabel' },
  { valueKey: 'projectsPage.stats.yearsValue', labelKey: 'projectsPage.stats.yearsLabel' },
  { valueKey: 'projectsPage.stats.clientsValue', labelKey: 'projectsPage.stats.clientsLabel' }
]

function categoryColor(category: string) {
  const map: Record<string, string> = {
    commercial: 'bg-brand-red',
    industrial: 'bg-brand-text',
    energy: 'bg-brand-green',
    hospitality: 'bg-brand-yellow',
    office: 'bg-gray-600'
  }
  return map[category] ?? 'bg-gray-500'
}
</script>
