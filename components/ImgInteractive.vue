<template>
  <div ref="containerRef" @mousemove="changePerspective">
    <img ref="imageRef" :src="imageSrc" :style="{ transform: `perspective(500px) rotate3d(${rotation.x}, ${rotation.y}, 0, 0deg)` }" />
  </div>
</template>

<script setup>

// const rotation = ref(0)
// const imageSrc = ref('/herocopy.png')
// const containerRef = ref(null)
// const imageRef = ref(null)

// function rotateImage(event) {
//   // Get the center of the container and image
//   const containerCenter = {
//     x: containerRef.value.offsetLeft + containerRef.value.offsetWidth / 2,
//     y: containerRef.value.offsetTop + containerRef.value.offsetHeight / 2
//   }
//   const imageCenter = {
//     x: imageRef.value.offsetLeft + imageRef.value.offsetWidth / 2,
//     y: imageRef.value.offsetTop + imageRef.value.offsetHeight / 2
//   }

//   // Calculate the angle between the center of the container and the mouse cursor
//   const angle = Math.atan2(event.pageX - containerCenter.x, event.pageY - containerCenter.y)

//   // Rotate the image by the calculated angle
//   rotation.value = angle * (180 / Math.PI)
// }

const rotation = ref({x: 20, y: 20, z: 20})
const imageSrc = ref('/herocopy.png')
const containerRef = ref(null)
const imageRef = ref(null)

function changePerspective(event) {
  // Get the center of the container
  const containerCenter = {
    x: containerRef.value.offsetLeft + containerRef.value.offsetWidth / 2,
    y: containerRef.value.offsetTop + containerRef.value.offsetHeight / 2
  }

  // get the mouse position
  const mouse = {
    x: event.pageX - containerCenter.x,
    y: event.pageY - containerCenter.y,
  }

  // calculate the rotation
  rotation.x = (mouse.y / containerRef.value.offsetHeight) * 10
  rotation.y = (mouse.x / containerRef.value.offsetWidth) * 10

  console.log(rotation.x)
}

const perspectiveStyle = computed(() => {
  console.log(rotation.x)
  return `perspective(500px) rotate3d(${rotation.x}, ${rotation.y}, 0, 0deg)`
})
</script>
