<template>
  <section
    class="flex flex-col md:min-h-screen w-full h-screen short:pt-10 tall:pt-0 short:h-full tall:h-screen lg:h-screen items-center justify-center gap-20 bg-[url('/src/assets/bg6.jpg')] bg-no-repeat bg-cover bg-left"
    id="home"
  >
    <div
      class="flex flex-col h-full w-full gap-10 justify-center items-center px-10"
      data-aos="fade-down"
      data-aos-duration="3000"
    >
      <img
        srcset="
          /src/assets/logo-header1.png 480w,
          /src/assets/logo-header2.png 800w
        "
        src="/src/assets/logo-header2.png"
        sizes="(max-width: 600px) 480px,
            800px"
      />
      <div class="w-full max-w-xl lg:max-w-full text-center">
        <span class="font-pirata-one text-5xl lg:text-7xl uppercase">
          A <span class="text-[#FFA500] animate-pulse">PLAY TO EARN </span>
          FANTASY MEDIEVAL NFT GAME
        </span>
      </div>
      <a href="https://game.defiknight.io/" target="_blank">
        <img src="/src/assets/start.png" class="w-96 short:mb-10 tall:mb-0" />
      </a>
    </div>
    <div class="gap-10 justify-center">
      <img src="/src/assets/logo-binance.png" />
    </div>
  </section>
</template>
