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
        <button class="inline-flex items-center" @click="navMenu = !navMenu">
          <FontAwesomeIcon :icon="['fas', 'bars']" size="lg" />
          <div
            class="absolute top-12 right-2 space-x-1 mr-2"
            :class="{ hidden: navMenu }"
          >
            <ul class="text-right mr-1 pt-1">
              <li><a href="#home">HOME</a></li>
              <li><a href="#game">GAME</a></li>
              <li><a href="#nft">NFTS</a></li>
              <li><a href="#about">ABOUT US</a></li>
              <li>
                <a href="https://whitepaper.defiknight.io" target="_blank">
                  WHITEPAPER
                  <FontAwesomeIcon
                    :icon="['fas', 'external-link-alt']"
                    class="ml-1"
                  />
                </a>
              </li>
            </ul>
          </div>
        </button>
      </div>
      <div class="gap-5 mr-5 hidden lg:flex">
        <div>
          <a href="#home">HOME</a>
        </div>
        <div>
          <a href="#game">GAME</a>
        </div>
        <div>
          <a href="#nft">NFTS</a>
        </div>
        <div>
          <a href="#about">ABOUT US</a>
        </div>
        <div>
          <a href="https://whitepaper.defiknight.io" target="_blank">
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
    <NFTComponent />
    <AboutComponent />
  </main>
</template>

<script lang="ts" setup>
  import { onMounted, onUnmounted, ref } from 'vue'
  import HomeComponent from './components/HomeComponent.vue'
  import { useHead } from '@vueuse/head'
  import logo from '/src/assets/logo-header1.png'
  import NFTComponent from './components/NFTComponent.vue'
  import AboutComponent from './components/AboutComponent.vue'
  import GameComponent from './components/GameComponent.vue'
  import DKIcon from './components/DKIcon.vue'

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
    script: [
      {
        async: '',
        src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3072480337071983',
        crossorigin: 'anonymous',
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
    window.addEventListener('scroll', scrollListener)
  })

  const navMenu = ref(true)

  onUnmounted(() => {
    window.removeEventListener('scroll', scrollListener)
  })
</script>
