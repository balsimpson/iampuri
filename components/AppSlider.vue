<template>
  <!-- carousel -->
  <div class="relative flex">
    <!-- <Carousel>
      <Slide> slide 1 </Slide>
      <Slide> slide 2 </Slide>
      <Slide> slide 3 </Slide>
      <Slide> slide 4 </Slide>
    </Carousel> -->

    <div class="flex w-full overflow-y-scroll h-96 snap-x snap-mandatory">
      <!-- <AppSliderCard v-for="item in items" :item="item" :key="item.title" /> -->
      <div v-for="(item, index) in items" class="w-full shrink-0 snap-start">
        <div
          class="transition"
          :class="[
            index == sliderCount - 1 ? '-translate-x-full' : 'translate-x-full',
          ]"
        >
          <div class="relative">
            <img :src="item.source" alt="" class="object-cover w-full h-96" />
            <div
              class="absolute p-4 px-6 text-white border-l-4 shadow border-brand-400 bg-black/70 bottom-12 right-20 "
            >
              <div class="text-3xl font-bold capitalize">
                {{ item.title }} <span>- {{ index + 1 }}</span>
              </div>
              <div>{{ sliderCount }}</div>
              <div class="max-w-sm mt-2 font-light leading-7">
                {{ item.description }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- indicators -->
    <div>
      <!-- left -->
      <div
        @click="back"
        class="
          absolute
          p-2
          rounded-full
          top-[50%]
          left-3
          bg-gray-200/40
          hover:bg-gray-800/80
          transition
          cursor-pointer
          hover:text-white
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </div>

      <!-- right -->
      <div
        @click="forward"
        class="
          absolute
          p-2
          rounded-full
          top-[50%]
          right-3
          bg-gray-200/40
          hover:bg-gray-800/80
          transition
          cursor-pointer
          hover:text-white
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>

    const items = [
      {
        title: '10 Best Episodes of monica',
        description:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi assumenda mollitia eaque asperiores quas ullam tempore ut fugit obcaecati atque?',
        source: 'https://source.unsplash.com/random?subway',
        tags: ['subway', 'transit', 'travel'],
      },
      {
        title: 'The Park',
        description: 'A podcast about the park',
        source: 'https://source.unsplash.com/random?park',
        tags: ['park', 'nature', 'travel'],
      },
      {
        title: 'The Beach',
        description: 'A podcast about the beach',
        source: 'https://source.unsplash.com/random?beach',
        tags: ['beach', 'nature', 'travel'],
      },
      {
        title: 'The Bench',
        description: 'A podcast about the beach',
        source: 'https://source.unsplash.com/random?bench',
        tags: ['beach', 'nature', 'travel'],
      },
      {
        title: 'The Chair',
        description: 'A podcast about the beach',
        source: 'https://source.unsplash.com/random?chair',
        tags: ['beach', 'nature', 'travel'],
      },
    ]

    const sliderCount = ref(1)
    const back = () => {
      sliderCount.value = sliderCount.value - 1
      console.log('back')
    }
    const forward = () => {
      sliderCount.value = sliderCount.value + 1
      console.log('forward')
    }

</script>

<style>
</style>