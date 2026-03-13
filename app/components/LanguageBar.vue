<script setup lang="ts">
const switchLocalePath = useSwitchLocalePath()
const { locale, setLocale } = useI18n()

const isOpen = ref(false)

const currentLanguage = ref({
  code: locale.value,
  label: locale.value.toUpperCase(),
  icon: getFlagIcon(locale.value)
})

const languages = [
  { code: 'mn', label: 'MN' },
  { code: 'en', label: 'EN' },
  { code: 'cn', label: 'CN' },
  { code: 'ru', label: 'RU' }
]

function getFlagIcon(langCode: string) {
  const flags: Record<string, string> = {
    en: 'emojione-v1:flag-for-united-kingdom',
    mn: 'emojione-v1:flag-for-mongolia',
    cn: 'emojione-v1:flag-for-china',
    ru: 'emojione-v1:flag-for-russia'
  }
  return flags[langCode] || flags.en
}

type LangCode = 'en' | 'mn' | 'cn' | 'ru'

const changeLanguage = async (langCode: string) => {
  const supported: LangCode[] = ['en', 'mn', 'cn', 'ru']
  if (supported.includes(langCode as LangCode)) {
    await setLocale(langCode as LangCode)
  }
  currentLanguage.value = {
    code: langCode,
    label: langCode.toUpperCase(),
    icon: getFlagIcon(langCode)
  }
  isOpen.value = false
  navigateTo(switchLocalePath(langCode) ?? '/')
}
</script>

<template>
  <div class="relative">
    <button
      @click="isOpen = !isOpen"
      class="flex items-center gap-1 p-1 rounded hover:bg-black/10 transition-colors"
    >
      <Icon :name="currentLanguage.icon" size="1.5rem" />
    </button>

    <div
      v-if="isOpen"
      class="absolute right-0 mt-1 w-28 rounded-md shadow-lg bg-white ring-1 ring-black/10 z-50"
    >
      <div class="py-1">
        <button
          v-for="lang in languages"
          :key="lang.code"
          @click="changeLanguage(lang.code)"
          class="flex items-center gap-2 w-full px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
          :class="{ 'bg-gray-50 font-semibold': lang.code === currentLanguage.code }"
        >
          <Icon :name="getFlagIcon(lang.code)" size="1.25rem" />
          {{ lang.label }}
        </button>
      </div>
    </div>

    <div v-if="isOpen" class="fixed inset-0 z-40" @click="isOpen = false" />
  </div>
</template>
