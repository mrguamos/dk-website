<template>
  <section
    class="flex flex-col md:min-h-screen w-full h-screen short:pt-10 tall:pt-0 short:h-full tall:h-screen justify-center bg-[url('src/assets/bg3.jpg')] bg-left bg-no-repeat bg-cover"
    id="nft"
  >
    <div class="flex flex-col w-full bg-teal-900 bg-opacity-20 relative p-10">
      <div class="flex mb-10 justify-center w-full mx-auto container">
        <span class="text-6xl text-white font-cafe-matcha shine"
          >CHARACTERS
        </span>
      </div>
      <div
        class="w-full h-full grid md:grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-20 mx-auto container px-10 lg:px-0"
      >
        <div
          class="w-full flex flex-col justify-center"
          data-aos="fade-right"
          data-aos-duration="3000"
        >
          <Carousel
            :itemsToShow="innerWidth <= 640 ? 1 : 2.4"
            :wrapAround="true"
          >
            <Slide v-for="slide of slides" :key="slide">
              <div class="carousel__item flex justify-center">
                <img :src="slide" class="w-[70%] md:w-[90%]" />
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
          class="flex h-full flex-col w-full justify-start lg:justify-center items-center"
        >
          <span
            class="text-orange-400 text-4xl lg:text-6xl text-center font-cafe-matcha uppercase"
            >MINT NOW AND HAVE
            <span class="text-blue-700 animate-ping absolute">FULL</span
            ><span class="text-blue-700 relative">FULL</span> OWNERSHIP OF YOUR
            <span class="text-teal-700">COMMANDERS</span> AND
            <span class="text-yellow-500">KNIGHTS</span> AND START
            <span class="text-red-500">EARNING </span>TOKENS
          </span>
          <a href="https://game.defiknight.io/" target="_blank">
            <div
              class="inline-flex relative w-56 h-16 justify-center items-center self-center mt-5 rounded-full border-4 overflow-hidden"
            >
              <span class="absolute text-2xl font-bold text-white"
                >PLAY NOW</span
              >

              <video class="object-cover" autoplay loop muted playsinline>
                <source :src="flame" type="video/mp4" />
              </video>
            </div>
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
  import k0 from '/src/assets/knights/k0.png'
  import k1 from '/src/assets/knights/k1.png'
  import k2 from '/src/assets/knights/k2.png'
  import k3 from '/src/assets/knights/k3.png'
  import k4 from '/src/assets/knights/k4.png'
  import k5 from '/src/assets/knights/k5.png'
  import flame from '/src/assets/flame.mp4'

  const innerWidth = ref(0)
  onMounted(() => {
    innerWidth.value = window.innerWidth
    window.addEventListener('resize', () => {
      innerWidth.value = window.innerWidth
    })
  })

  const slides = ref([c0, c1, c2, c3, k0, k1, k2, k3, k4, k5])
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
</style>
