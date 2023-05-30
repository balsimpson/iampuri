<template>
  <div class="relative text-left bg-black shadow-lg rounded-xl">
    <div class="flex items-center justify-center mx-auto">
      <img class="object-cover w-full rounded-t-lg h-44"
        :src="image" :alt="title" />
    </div>

    <div class="p-6 text-center bg-gradient-to-tl from-sky-800 to-sky-500">
      <h3 class="text-2xl font-bold leading-7 text-center text-gray-100 capitalize font-arvo" id="modal-title">
        {{title}}
      </h3>

      <p class="mt-2 text-gray-300">
        {{description}}
      </p>
      <button
        @click.prevent="emit('clicked')"
        class="px-4 inline-block sm:mx-2 py-2.5 mt-3 text-sm font-bold tracking-wide text-gray-800 capitalize transition-colors duration-300 transform bg-amber-500 rounded-md hover:bg-amber-600 focus:outline-none focus:ring focus:ring-amber-300 focus:ring-opacity-40">
        Book Now
      </button>
    </div>

  </div>
</template>

<script setup>
const emit = defineEmits(['clicked'])
const props = defineProps(['image', 'title', 'description'])

const clickHandler = (e) => {
  emit('clicked', e)
}

</script>