<template>
  <section
    class="flex flex-col md:min-h-screen w-screen h-screen short:pt-10 tall:pt-0 short:w-full short:h-full tall:w-full tall:h-full lg:w-screen lg:h-screen justify-center bg-[url('src/assets/bg3.png')] bg-left bg-no-repeat bg-cover"
    id="nft"
  >
    <div
      class="grid md:grid-cols-1 lg:grid-cols-2 items-center gap-10 mx-auto container px-10 lg:px-0"
    >
      <img
        data-aos="fade-right"
        data-aos-duration="3000"
        src="/src/assets/inventory.png"
        class="w-full h-auto"
      />

      <div
        data-aos="fade-left"
        data-aos-duration="3000"
        class="flex text-center flex-col w-full justify-center items-center"
      >
        <span class="uppercase text-sm lg:text-base">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>
