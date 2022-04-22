<template>
  <div
    class="relative flex flex-col justify-center items-center text-white font-bold"
  >
    <img
      data-aos="zoom-in"
      data-aos-duration="3000"
      class="inline-block h-24 w-24 lg:h-40 lg:w-40 rounded-full ring-4 ring-gray-500"
      src="/src/assets/avatar3.png"
      alt=""
    />
    <div
      class="font-cafe-matcha absolute text-yellow-300 text-3xl lg:text-5xl bottom-20"
    >
      <slot name="name"></slot>
    </div>
    <span class="mt-5"> <slot></slot></span>
  </div>
</template>

<script setup lang="ts"></script>
