<template>
  <div
    class="flex flex-col lg:flex-row w-full items-center justify-between py-2 lg:py-0"
  >
    <div class="flex space-x-2 animate-bounce my-10 lg:my-0">
      <a
        href="https://www.facebook.com/profile.php?id=100078910695463"
        target="_blank"
        ><FBIcon class="w-8 h-8"
      /></a>
      <a href="https://twitter.com/DK_DefiKnight" target="_blank"
        ><TwitterIcon class="w-8 h-8"
      /></a>
      <a href="https://www.instagram.com/dk_defiknight/" target="_blank"
        ><IGIcon class="w-8 h-8"
      /></a>
      <a href="https://t.me/DefiKnight" target="_blank"
        ><TGIcon class="w-8 h-8"
      /></a>
      <a href="https://discord.gg/Z6E9JuV3Bh" target="_blank"
        ><DiscordIcon class="w-8 h-8"
      /></a>
    </div>

    <div class="flex justify-center items-center text-center mb-2 lg:mb-0">
      <span> Copyright 2022 by DefiKnight, All rights reserved.</span>
    </div>
    <img src="/src/assets/logo-header1.png" class="hidden lg:block w-40" />
  </div>
</template>

<script lang="ts" setup>
  import FBIcon from './FBIcon.vue'
  import TwitterIcon from './TwitterIcon.vue'
  import IGIcon from './IGIcon.vue'
  import TGIcon from './TGIcon.vue'
  import DiscordIcon from './DiscordIcon.vue'
</script>
