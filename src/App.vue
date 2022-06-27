<template>
  <main class="flex min-h-screen flex-col" id="container">
    <div
      class="flex fixed w-full top-0 z-10 items-center justify-between h-20 duration-1000"
      :class="
        navMenu
          ? scroll
            ? 'lg:bg-black lg:shadow-lg lg:bg-opacity-50'
            : 'bg-transparent'
          : 'bg-black'
      "
    >
      <div class="ml-5 flex items-center">
        <DKIcon class="h-12 w-12 animate-spin" />
      </div>
      <div class="mr-5 lg:hidden flex items-center">
        <button class="inline-flex items-center" @click="navMenu = !navMenu">
          <FontAwesomeIcon :icon="['fas', 'bars']" size="lg" />
          <div
            class="absolute w-full h-screen top-12 right-0 mt-5 space-x-1 backdrop-blur-lg"
            :class="{ hidden: navMenu }"
          >
            <ul class="items-center m-2 p-2">
              <li>
                <a href="#home">
                  <div
                    v-if="!isMobile"
                    class="inline-flex relative w-56 h-16 justify-center items-center self-center mt-5 rounded-full border-4 overflow-hidden"
                  >
                    <span class="absolute text-2xl font-bold text-white"
                      >HOME</span
                    >

                    <video
                      class="object-contain object-bottom"
                      autoplay
                      loop
                      muted
                      playsinline
                    >
                      <source :src="flare" type="video/mp4" />
                    </video>
                  </div>
                  <button
                    v-if="isMobile"
                    class="m-2 p-3 border border-white rounded-full text-2xl font-bold"
                  >
                    HOME
                  </button>
                </a>
              </li>
              <li>
                <a href="#game">
                  <div
                    v-if="!isMobile"
                    class="inline-flex relative w-56 h-16 justify-center items-center self-center mt-5 rounded-full border-4 overflow-hidden"
                  >
                    <span class="absolute text-2xl font-bold text-white"
                      >GAME</span
                    >

                    <video
                      class="object-contain object-bottom"
                      autoplay
                      loop
                      muted
                      playsinline
                    >
                      <source :src="flare" type="video/mp4" />
                    </video>
                  </div>
                  <button
                    v-if="isMobile"
                    class="m-2 p-3 border border-white rounded-full text-2xl font-bold"
                  >
                    GAME
                  </button>
                </a>
              </li>
              <li>
                <a href="#nft">
                  <div
                    v-if="!isMobile"
                    class="inline-flex relative w-56 h-16 justify-center items-center self-center mt-5 rounded-full border-4 overflow-hidden"
                  >
                    <span class="absolute text-2xl font-bold text-white"
                      >NFTS</span
                    >

                    <video
                      class="object-contain object-bottom"
                      autoplay
                      loop
                      muted
                      playsinline
                    >
                      <source :src="flare" type="video/mp4" />
                    </video>
                  </div>
                  <button
                    v-if="isMobile"
                    class="m-2 p-3 border border-white rounded-full text-2xl font-bold"
                  >
                    NFTS
                  </button>
                </a>
              </li>
              <li>
                <a href="#about">
                  <div
                    v-if="!isMobile"
                    class="inline-flex relative w-56 h-16 justify-center items-center self-center mt-5 rounded-full border-4 overflow-hidden"
                  >
                    <span class="absolute text-2xl font-bold text-white"
                      >ABOUT US</span
                    >

                    <video
                      class="object-contain object-bottom"
                      autoplay
                      loop
                      muted
                      playsinline
                    >
                      <source :src="flare" type="video/mp4" />
                    </video>
                  </div>
                  <button
                    v-if="isMobile"
                    class="m-2 p-3 border border-white rounded-full text-2xl font-bold"
                  >
                    ABOUT US
                  </button>
                </a>
              </li>

              <li>
                <a href="https://whitepaper.defiknight.io" target="_blank">
                  <div
                    v-if="!isMobile"
                    class="inline-flex relative w-56 h-16 justify-center items-center self-center mt-5 rounded-full border-4 overflow-hidden"
                  >
                    <span class="absolute text-2xl font-bold text-white"
                      >WHITEPAPER</span
                    >

                    <video
                      class="object-contain object-bottom"
                      autoplay
                      loop
                      muted
                      playsinline
                    >
                      <source :src="flare" type="video/mp4" />
                    </video>
                  </div>
                  <button
                    v-if="isMobile"
                    class="m-2 p-3 border border-white rounded-full text-2xl font-bold"
                  >
                    WHITEPAPER
                  </button>
                </a>
              </li>
            </ul>
            <FooterComponent />
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
  import flare from '/src/assets/flare.mp4'
  import FooterComponent from './components/FooterComponent.vue'

  const isMobile = ref(false)

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
      //<meta name="coinzilla" content="9999d80ee00a916f23b91981ae0d5e1a" />
      {
        name: 'coinzilla',
        content: '9999d80ee00a916f23b91981ae0d5e1a',
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
    isMobile.value = window.matchMedia('(any-pointer:coarse)').matches
  })

  const navMenu = ref(true)

  onUnmounted(() => {
    window.removeEventListener('scroll', scrollListener)
  })
</script>
