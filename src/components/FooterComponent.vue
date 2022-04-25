<template>
  <div
    class="flex flex-col lg:flex-row w-full items-center justify-between py-2 lg:py-0"
  >
    <div class="flex space-x-2 animate-bounce my-10 lg:my-0">
      <FBIcon class="w-8 h-8" /><TwitterIcon class="w-8 h-8" /><IGIcon
        class="w-8 h-8"
      /><TGIcon class="w-8 h-8" />
      <DiscordIcon class="w-8 h-8" />
    </div>

    <div class="flex justify-center items-center text-center mb-2 lg:mb-0">
      <span> Copyright 2022 by DefiKnight, All rights reserved.</span>
    </div>
    <img src="/src/assets/logo-header1.png" class="w-40" />
  </div>
</template>

<script lang="ts" setup>
  import FBIcon from './FBIcon.vue'
  import TwitterIcon from './TwitterIcon.vue'
  import IGIcon from './IGIcon.vue'
  import TGIcon from './TGIcon.vue'
  import DiscordIcon from './DiscordIcon.vue'
</script>
