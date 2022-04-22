<template>
  <main class="flex min-h-screen flex-col" id="container">
    <div
      class="flex fixed w-full top-0 z-10 items-center justify-between h-20 duration-1000"
      :class="
        scroll ? 'lg:bg-black lg:shadow-lg lg:bg-opacity-50' : 'bg-transparent'
      "
    >
      <div class="ml-5 flex items-center">
        <DKIcon class="h-12 w-12 animate-spin" />
      </div>
      <div class="mr-5 lg:hidden flex items-center">
        <button class="inline-flex items-center">
          <FontAwesomeIcon :icon="['fas', 'bars']" size="lg" />
        </button>
      </div>
      <div class="gap-5 mr-5 hidden lg:flex">
        <div>
          <span class="hover:cursor-pointer" @click="scrollToSection(0)"
            >HOME</span
          >
        </div>
        <div>
          <span class="hover:cursor-pointer" @click="scrollToSection(1)"
            >GAME</span
          >
        </div>
        <div>
          <span class="hover:cursor-pointer" @click="scrollToSection(2)"
            >NFTS</span
          >
        </div>
        <div>
          <span class="hover:cursor-pointer" @click="scrollToSection(3)"
            >ABOUT US</span
          >
        </div>
        <div>
          <a href="https://admin-162.gitbook.io/internal-wiki/" target="_blank">
            WHITEPAPER
            <FontAwesomeIcon
              :icon="['fas', 'external-link-alt']"
              class="ml-1"
            />
          </a>
        </div>
      </div>
    </div>
    <HomeComponent />
    <GameComponent />
    <NFTComponent data-anchor="Page 3" />
    <AboutComponent />
  </main>
</template>

<script lang="ts" setup>
  import { onMounted, onUnmounted, ref } from 'vue'
  import HomeComponent from './components/HomeComponent.vue'
  import { useHead } from '@vueuse/head'
  import logo from '/src/assets/logo-header.png'
  import NFTComponent from './components/NFTComponent.vue'
  import AboutComponent from './components/AboutComponent.vue'
  import GameComponent from './components/GameComponent.vue'
  import DKIcon from './components/DKIcon.vue'
  import { useScrollHandler } from './composable/useScrollHandler'

  const { scrollToSection } = useScrollHandler()

  useHead({
    meta: [
      {
        property: 'og:title',
        content: 'Defi Knight',
      },
      {
        property: 'og:image',
        content: logo,
      },
      {
        property: 'og:description',
        content: 'Defi Knight is a Fantasy Medieval Play to Earn NFT Game',
      },
      {
        property: 'og:url',
        content: 'https://www.defiknight.io/',
      },
      {
        property: 'og:image:width',
        content: 1200,
      },
      {
        property: 'og:image:height',
        content: 627,
      },
      {
        property: 'og:type',
        content: 'website',
      },
    ],
  })

  const scrollListener = () => {
    if (window.scrollY > 131) {
      scroll.value = true
      return
    }
    scroll.value = false
  }

  const scroll = ref(false)
  onMounted(async () => {
    const { mountHandler } = useScrollHandler()
    // mountHandler()
    window.addEventListener('scroll', scrollListener)
  })

  onUnmounted(() => {
    const { unmountHandler } = useScrollHandler()
    // unmountHandler()
    window.removeEventListener('scroll', scrollListener)
  })
</script>
