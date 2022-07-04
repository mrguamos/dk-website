<template>
  <section
    class="flex flex-col md:min-h-screen w-full h-screen short:pt-10 tall:pt-0 short:h-full tall:h-screen justify-center bg-[url('src/assets/bg3.jpg')] bg-left bg-no-repeat bg-cover"
    id="nft"
  >
    <div class="flex flex-col w-full bg-teal-900 bg-opacity-20 relative px-10">
      <div class="flex lg:mb-10 justify-center w-full p-10">
        <span class="text-5xl lg:text-6xl text-white font-pirata-one shine"
          >CHARACTERS
        </span>
      </div>
      <div
        class="w-full h-full grid grid-cols-1 lg:grid-cols-2 items-center lg:gap-10"
      >
        <div
          class="w-full flex flex-col justify-center items-center lg:px-20"
          data-aos="fade-right"
          data-aos-duration="3000"
        >
          <Carousel
            :itemsToShow="innerWidth <= 640 ? 1 : 2.4"
            :wrapAround="true"
          >
            <Slide v-for="slide of slides" :key="slide">
              <div class="carousel__item flex justify-center">
                <img :src="slide" class="w-48 md:w-60" />
              </div>
            </Slide>
            <template #addons>
              <Navigation />
            </template>
          </Carousel>
        </div>

        <div
          data-aos="fade-left"
          data-aos-duration="3000"
          class="flex h-full flex-col w-full justify-start lg:justify-center items-center mt-2 lg:mt-0"
        >
          <span
            class="text-white text-4xl lg:text-6xl text-center font-pirata-one uppercase"
            >MINT NOW AND HAVE
            <span class="text-[#FFA500] animate-ping absolute">FULL</span
            ><span class="text-[#FFA500] relative">FULL</span> OWNERSHIP OF YOUR
            <span class="text-[#FFA500]">COMMANDERS</span> AND
            <span class="text-[#FFA500]">KNIGHTS</span> AND START
            <span class="text-[#FFA500]">EARNING </span>TOKENS
          </span>
          <a href="https://game.defiknight.io/" target="_blank">
            <div
              class="inline-flex relative w-56 h-16 justify-center items-center self-center mt-5 rounded-full border-4 overflow-hidden"
            >
              <span class="absolute text-2xl font-bold text-white"
                >PLAY NOW</span
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
            <!-- <button
              v-if="isMobile"
              class="m-2 p-3 border border-white rounded-full text-2xl font-bold"
            >
              PLAY NOW
            </button> -->
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue'
  import { Carousel, Slide, Navigation } from 'vue3-carousel'
  import c0 from '/src/assets/commanders/c0.png'
  import c1 from '/src/assets/commanders/c1.png'
  import c2 from '/src/assets/commanders/c2.png'
  import c3 from '/src/assets/commanders/c3.png'
  import c4 from '/src/assets/commanders/c4.png'
  import c5 from '/src/assets/commanders/c5.png'
  import k0 from '/src/assets/knights/k0.png'
  import k1 from '/src/assets/knights/k1.png'
  import k2 from '/src/assets/knights/k2.png'
  import k3 from '/src/assets/knights/k3.png'
  import k4 from '/src/assets/knights/k4.png'
  import k5 from '/src/assets/knights/k5.png'
  import flare from '/src/assets/flare.mp4'

  const innerWidth = ref(0)
  const isMobile = ref(false)
  onMounted(() => {
    innerWidth.value = window.innerWidth
    window.addEventListener('resize', () => {
      innerWidth.value = window.innerWidth
    })
    isMobile.value = window.matchMedia('(any-pointer:coarse)').matches
  })

  const slides = ref([c0, c1, c2, c3, c4, c5, k0, k1, k2, k3, k4, k5])
  slides.value = slides.value.sort(() => Math.random() - 0.5)
</script>

<style>
  .carousel__slide > .carousel__item {
    transform: scale(1);
    opacity: 0.5;
    transition: 0.5s;
  }
  .carousel__slide--visible > .carousel__item {
    opacity: 1;
    transform: rotateY(0);
  }
  .carousel__slide--next > .carousel__item {
    transform: scale(0.9) translate(-10px);
  }
  .carousel__slide--prev > .carousel__item {
    transform: scale(0.9) translate(10px);
  }
  .carousel__slide--active > .carousel__item {
    transform: scale(1.1);
  }

  .carousel__slide {
    padding: 10px;
  }

  .carousel__prev,
  .carousel__next {
    @apply bg-teal-700 !important;
  }
</style>
