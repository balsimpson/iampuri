<template>
  <div class="relative transition border border-transparent rounded-lg shadow hover:border-brand-500 group ">
    <!-- create a gradient overlay -->

    <div class="absolute inset-0 rounded-lg bg-gradient-to-t from-black">
      <div class="absolute inset-x-0 bottom-5">
        <div
          class="px-2 pb-2 leading-4 text-center text-gray-200 capitalize transition group-hover:-translate-y-1 group-hover:text-brand-500 ">
          {{ title }}
        </div>
        <div class="w-24 h-1 mx-auto transition bg-brand-400 group-hover:bg-brand-500"></div>
        <div class="pt-2 text-sm leading-4 text-center text-gray-400">
          <!-- <div class="pt-2 text-sm leading-4 text-gray-400"> -->
          <!-- <span class="font-bold">{{ subtitle }}</span> -->
          <!-- <AppChip title="comedy"/> -->

          <!-- </div> -->
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, nam.
        </div>
        <!-- <div class="flex flex-wrap justify-center gap-1 px-3">
          <slot name="tags">
            <div v-for="genre in genres">
              <NuxtLink :to="'/genre/' + convertGenreString(genre.split('__')[0])">
                <AppChip :title="genre.split('__')[0]" />
              </NuxtLink>
            </div>
          </slot>
        </div> -->
      </div>
    </div>
    <img loading="lazy" :src="image" alt="" class="object-cover w-64 rounded-lg h-96" />
  </div>
</template>

<script setup>
const props = defineProps(['image', 'title', 'genres'])

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