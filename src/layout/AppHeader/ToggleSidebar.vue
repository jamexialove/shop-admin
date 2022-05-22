<template>
  <el-icon @click="handleCollapse">
    <Expand v-if="isCollapse" />
    <Fold v-else />
  </el-icon>
</template>
<script lang='ts' setup>
import { useStore } from '@/store'
import { computed } from 'vue'

const store = useStore()

const isCollapse = computed(() => {
  return store.state.isCollapse
})

const handleCollapse = () => {
  store.commit('setIsCollapse', !isCollapse.value)
}

</script>
<style lang='scss' scoped></style>
