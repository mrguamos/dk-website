<template>
  <section
    class="flex flex-col md:min-h-screen w-full h-screen short:pt-10 tall:pt-0 short:h-full tall:h-screen lg:h-screen items-center bg-[url('src/assets/bg5.jpg')] bg-no-repeat bg-left lg:bg-center bg-cover"
    id="about"
  >
    <div class="flex w-full h-full flex-col mx-auto container">
      <div class="w-full flex justify-center items-end tall:mt-10 short:mt-0">
        <span
          class="text-5xl lg:text-6xl text-white font-pirata-one shine lg:mt-14"
          >THE TEAM
        </span>
      </div>

      <div
        class="justify-center items-center w-full h-full flex lg:gap-32 mt-10 lg:mt-0 flex-wrap lg:flex-nowrap"
      >
        <AvatarComponent class="w-1/3 lg:w-auto">
          <div
            class="flex text-center flex-col h-full justify-center items-center gap-1"
          >
            <span class="font-pirata-one text-[#FFA500] text-3xl lg:text-5xl"
              >RY</span
            >
            <span>LEAD</span><span>DEVELOPER</span>
          </div></AvatarComponent
        >
        <AvatarComponent class="w-1/3 lg:w-auto">
          <div
            class="flex text-center flex-col w-full h-full justify-center items-center gap-1"
          >
            <span class="font-pirata-one text-[#FFA500] text-3xl lg:text-5xl"
              >ROL</span
            >
            <span>FULL STACK</span><span>DEVELOPER</span>
          </div></AvatarComponent
        >
        <AvatarComponent class="w-1/3 lg:w-auto">
          <div
            class="flex text-center flex-col w-full h-full justify-center items-center gap-1"
          >
            <span class="font-pirata-one text-[#FFA500] text-3xl lg:text-5xl"
              >WE</span
            >
            <span>FULL STACK</span><span>DEVELOPER</span>
          </div></AvatarComponent
        >

        <AvatarComponent class="w-1/3 lg:w-auto">
          <div
            class="flex text-center flex-col w-full h-full justify-center items-center gap-1"
          >
            <span class="font-pirata-one text-[#FFA500] text-3xl lg:text-5xl"
              >DREW</span
            >
            <span>PROJECT</span><span>MANAGER</span>
          </div></AvatarComponent
        >
        <AvatarComponent class="w-1/3 lg:w-auto">
          <div
            class="flex text-center flex-col w-full h-full justify-center items-center gap-1"
          >
            <span class="font-pirata-one text-[#FFA500] text-3xl lg:text-5xl"
              >YAN</span
            >
            <span>NFT</span><span>ARTIST</span>
          </div></AvatarComponent
        >
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
