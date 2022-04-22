<template>
  <section
    class="flex flex-col md:min-h-screen w-full h-screen short:pt-10 tall:pt-0 short:h-full tall:w-screen tall:h-screen lg:h-screen justify-center bg-[url('src/assets/bg3.jpg')] bg-left bg-no-repeat bg-cover"
    id="nft"
  >
    <div
      class="grid md:grid-cols-1 lg:grid-cols-2 items-center gap-10 mx-auto container px-10 lg:px-0"
    >
      <div class="flex flex-col w-full h-full justify-center items-center">
        <img
          data-aos="fade-down"
          data-aos-duration="3000"
          src="/src/assets/commander.png"
          class="lg:w-[35%] w-[40%]"
        />
        <span class="font-cafe-matcha text-6xl uppercase text-teal-700"
          >COMMANDER</span
        >
      </div>
      <div class="flex flex-col w-full h-full justify-center items-center">
        <img
          data-aos="fade-up"
          data-aos-duration="3000"
          src="/src/assets/knight.png"
          class="lg:w-[35%] w-[40%]"
        />
        <span class="font-cafe-matcha text-6xl uppercase text-yellow-700"
          >KNIGHT</span
        >
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>
