<template>
  <section
    class="flex flex-col md:min-h-screen w-full h-screen short:pt-10 tall:pt-0 short:h-full tall:w-screen tall:h-screen lg:h-screen items-center bg-[url('src/assets/bg3.jpg')] bg-no-repeat bg-left lg:bg-center lg:bg-cover"
    id="about"
  >
    <div class="flex w-full h-full flex-col mx-auto container">
      <div class="w-full flex justify-center items-end mt-10 lg:mt-24">
        <span class="text-6xl text-white font-cafe-matcha shine"
          >THE TEAM
        </span>
      </div>
      <div
        class="w-full h-full flex justify-center items-center gap-10 lg:gap-32 mt-10 lg:mt-0"
      >
        <AvatarComponent
          ><div
            class="flex text-center flex-col w-full h-full justify-center items-center gap-1"
          >
            <span>Ry</span> <span>LEAD</span><span>DEVELOPER</span>
          </div></AvatarComponent
        >
        <AvatarComponent
          ><div
            class="flex text-center flex-col w-full h-full justify-center items-center gap-1"
          >
            <span>We</span> <span>FULL STACK</span><span>DEVELOPER</span>
          </div></AvatarComponent
        >
        <AvatarComponent
          ><div
            class="flex text-center flex-col w-full h-full justify-center items-center gap-1"
          >
            <span>Rol</span> <span>FULL STACK</span><span>DEVELOPER</span>
          </div></AvatarComponent
        >
      </div>
      <div
        class="w-full h-full flex justify-center items-center gap-10 mt-0 md:mt-10 lg:gap-32 lg:mt-0"
      >
        <AvatarComponent
          ><div
            class="flex text-center flex-col w-full h-full justify-center items-center gap-1"
          >
            <span>Drew</span> <span>PROJECT</span><span>MANAGER</span>
          </div></AvatarComponent
        >
        <AvatarComponent
          ><div
            class="flex text-center flex-col w-full h-full justify-center items-center gap-1"
          >
            <span>Yan</span> <span>NFT</span><span>ARTIST</span>
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

<style scoped>
  .shine {
    position: relative;
    background: linear-gradient(90deg, gray, #fff, #000);
    background-repeat: no-repeat;
    background-size: 80%;
    animation: animate 3s infinite;
    background-clip: text;
    -webkit-text-fill-color: rgba(255, 255, 255, 0);
  }

  @keyframes animate {
    0% {
      background-position: -500%;
    }
    100% {
      background-position: 500%;
    }
  }
</style>
