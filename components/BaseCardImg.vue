<template>
  <div class="relative transition border-2 border-transparent rounded-lg shadow hover:border-amber-500 group ">
    <!-- create a gradient overlay -->

    <div class="absolute inset-0 rounded-lg bg-gradient-to-t from-black">
      <div class="absolute inset-x-0 bottom-3">
        <div
          class="px-2 pb-2 text-3xl font-bold leading-7 text-center text-gray-200 capitalize transition group-hover:-translate-y-1 group-hover:text-brand-500 ">
          {{ title }}
        </div>
        <div class="w-24 h-1 mx-auto transition bg-brand-400 group-hover:bg-brand-500"></div>
        <div class="px-8 pt-2 text-sm leading-4 text-center text-gray-300">
          <!-- <div class="pt-2 text-sm leading-4 text-gray-400"> -->
          <!-- <span class="font-bold">{{ subtitle }}</span> -->
          <!-- <AppChip title="comedy"/> -->

          <!-- </div> -->
          {{description}}
        </div>
        <div class="flex justify-center w-full">
          
          <button class="px-3 py-1 mt-2 font-bold text-center text-black transition rounded bg-amber-500 hover:bg-white">Book Now</button>
        </div>
      </div>
    </div>
    <img loading="lazy" :src="image" alt="" class="object-cover w-full h-full rounded-lg" />
  </div>
</template>

<script setup>
const props = defineProps(['image', 'title', 'description'])

const clickHandler = (e) => {
  emit('clicked', e)
}

</script>

<style>
/* Slide-in-up animation*/
.slide-in-up-enter-active,
.slide-in-up-leave-active {
  transition: all 0.5s;
  transform: translateY(0);
}

.slide-in-up-enter,
.slide-in-up-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>