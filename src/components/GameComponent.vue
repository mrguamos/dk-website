<template>
  <section
    class="flex flex-col md:min-h-screen w-full h-screen short:pt-10 tall:pt-0 short:h-full tall:h-screen lg:h-screen items-center justify-center bg-[url('src/assets/bg2.jpg')] bg-right bg-no-repeat bg-cover"
    id="game"
  >
    <div class="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 px-10">
      <div class="place-self-center">
        <img
          data-aos="fade-right"
          data-aos-duration="3000"
          src="/src/assets/emblems.png"
          class="w-full"
        />
      </div>
      <div
        class="flex text-center flex-col w-full justify-center items-center gap-y-10"
      >
        <div
          data-aos="fade-left"
          data-aos-duration="3000"
          class="flex flex-wrap"
        >
          <span
            class="font-pirata-one text-5xl lg:text-7xl text-white uppercase"
          >
            CREATE THE STRONGEST GUILD AND CONQUER LANDS IN THE
            <span class="text-[#FFA500]">BLOCKCHAIN</span>
          </span>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          class="flex flex-col gap-5"
        >
          <span class="text-3xl lg:text-4xl text-teal-700 font-bold"
            >OFFICIAL CONTRACT</span
          >

          <div
            ref="contract"
            @click="copyText('0x393DD1003Ef99cB82b260c5E967862cbE18097dA')"
            class="text-yellow-500 text-sm md:text-2xl border-2 rounded-full shadow-sm border-white px-4 py-1 hover:cursor-pointer hover:bg-white/50 short:mb-10 tall:mb-0"
          >
            <span>0x393DD1003Ef99cB82b260c5E967862cbE18097dA</span>
          </div>
        </div>
      </div>
    </div>
    <div
      ref="tooltip"
      role="tooltip"
      class="bg-white rounded-full px-2 text-black tooltipText"
      :class="show ? 'block' : 'hidden'"
    >
      Copied
      <div class="tooltipArrow" data-popper-arrow></div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { createPopper } from '@popperjs/core'
  import type { Instance } from '@popperjs/core'
  import { ref, onMounted, nextTick } from 'vue'

  const contract = ref(undefined as unknown as HTMLElement)
  const tooltip = ref(undefined as unknown as HTMLElement)
  const popper = ref(undefined as unknown as Instance)
  const show = ref(false)

  const copyText = async (text: string) => {
    show.value = true
    await popper.value.update()
    try {
      await navigator.clipboard.writeText(text)
    } catch (error) {
      //
    }

    setTimeout(() => {
      show.value = false
    }, 1000)
  }

  onMounted(() => {
    nextTick(() => {
      popper.value = createPopper(contract.value, tooltip.value, {
        placement: 'top',
        modifiers: [
          {
            name: 'offset',
            options: {
              offset: [0, 10],
            },
          },
        ],
        strategy: 'absolute',
      })
    })
  })
</script>
