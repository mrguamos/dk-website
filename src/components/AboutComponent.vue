<template>
  <section
    class="flex flex-col md:min-h-screen w-full h-screen short:pt-10 tall:pt-0 short:h-full tall:h-screen lg:h-screen items-center bg-[url('src/assets/bg4.jpg')] bg-no-repeat bg-right lg:bg-center bg-cover"
    id="about"
  >
    <div class="flex w-full h-full flex-col mx-auto container">
      <div class="w-full flex justify-center items-end tall:mt-10 lg:mt-24">
        <span class="text-6xl text-white font-cafe-matcha shine"
          >THE TEAM
        </span>
      </div>
      <div class="flex flex-col w-full h-full justify-center items-center">
        <div
          class="w-full flex justify-center items-center gap-10 lg:gap-32 mt-10 lg:mt-0"
        >
          <AvatarComponent>
            <template v-slot:name>
              <span class="">RY</span>
            </template>
            <div
              class="flex text-center flex-col w-full h-full justify-center items-center gap-1"
            >
              <span>LEAD</span><span>DEVELOPER</span>
            </div></AvatarComponent
          >
          <AvatarComponent>
            <template v-slot:name>
              <span class="">ROL</span>
            </template>
            <div
              class="flex text-center flex-col w-full h-full justify-center items-center gap-1"
            >
              <span>FULL STACK</span><span>DEVELOPER</span>
            </div></AvatarComponent
          >
          <AvatarComponent>
            <template v-slot:name>
              <span class="">WE</span>
            </template>
            <div
              class="flex text-center flex-col w-full h-full justify-center items-center gap-1"
            >
              <span>FULL STACK</span><span>DEVELOPER</span>
            </div></AvatarComponent
          >
        </div>
        <div
          class="w-full flex justify-center items-center gap-10 mt-10 lg:gap-32"
        >
          <AvatarComponent>
            <template v-slot:name>
              <span class="">DREW</span>
            </template>
            <div
              class="flex text-center flex-col w-full h-full justify-center items-center gap-1"
            >
              <span>PROJECT</span><span>MANAGER</span>
            </div></AvatarComponent
          >
          <AvatarComponent>
            <template v-slot:name>
              <span class="">YAN</span>
            </template>
            <div
              class="flex text-center flex-col w-full h-full justify-center items-center gap-1"
            >
              <span>NFT</span><span>ARTIST</span>
            </div></AvatarComponent
          >
        </div>
      </div>
      <div class="flex grow"></div>
      <FooterComponent />
    </div>
  </section>
</template>

<script setup lang="ts">
  import AvatarComponent from './AvatarComponent.vue'
  import FooterComponent from './FooterComponent.vue'
</script>
