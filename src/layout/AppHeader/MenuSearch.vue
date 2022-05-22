<template>
  <el-input
    v-model="input"
    class="w-50 m-2"
    placeholder="请输入内容"
    :prefix-icon="Search"
  />
</template>
<script lang='ts' setup>
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
const input = ref('')

</script>
<style lang='scss' scoped></style>
