<script lang="tsx" setup>
const abc = <h1>abc</h1>
// import { ref } from 'vue'
// const props = defineProps({
//   msg: {
//     type: String,
//     default: 'hello'
//   }
// })
// const emit = defineEmits(['increment'])
// // const msg = 'abc'
// const count = ref(100)

// const increment = () => {
//    (props.msg)
//   count.value++
//   emit('increment')
// }

</script>

<template>
  <h1>
    hello
  </h1>
  <abc />
  <!-- <p>{{ props.msg }}</p>

  <p>{{ count }}</p>

  <button
    type="button"
    @click="increment"
  >
    increment
  </button> -->
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
