<script lang="ts" setup>

import locale from 'element-plus/lib/locale/lang/zh-cn'

</script>

<template>
  <!-- 路由渲染出口 -->
  <el-config-provider :locale="locale">
    <router-view />
  </el-config-provider>
</template>

<style lang="scss" scoped>

</style>
