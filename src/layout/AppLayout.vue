<template>
  <el-container>
    <el-aside>
      <AppMenu />
    </el-aside>
    <el-container>
      <el-header><AppHeader /></el-header>
      <el-main>
        <!-- 子路由出口 -->
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>
<script lang='ts' setup>
import AppMenu from './AppMenu/index.vue'
import AppHeader from './AppHeader/index.vue'
</script>
<style lang='scss' scoped>
.el-aside {
  width: auto;
  background-color: #304156;
  color: var(--el-text-color-primary);
  text-align: center;
}
.el-header
{
  background-color: #fff;
  color: var(--el-text-color-primary);
  text-align: center;
  height: 50px;
  line-height: 50px;
}
.el-main {
  background-color: var(--el-color-primary-light-9);
  color: var(--el-text-color-primary);
  text-align: center;
  height: 150px;
}
.el-container {
  height: 100vh;
}
</style>
