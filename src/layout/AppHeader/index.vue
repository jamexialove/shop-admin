<template>
  <el-row :gutter="20">
    <el-col :span="1">
      <ToggleSidebar />
    </el-col>
    <el-col :span="15">
      <Breadcrumb />
    </el-col>
    <el-col
      :span="8"
      class="right-wrapper"
    >
      <MenuSearch />
      <FullScreen class="full-screen" />
      <Notification />
      <UserInfo class="user-info" />
    </el-col>
  </el-row>
</template>
<script lang='ts' setup>
import ToggleSidebar from './ToggleSidebar.vue'
import Breadcrumb from './Breadcrumb.vue'
import MenuSearch from './MenuSearch.vue'
import FullScreen from './FullScreen.vue'
import Notification from './Notification.vue'
import UserInfo from './UserInfo.vue'

</script>
<style lang='scss' scoped>
.el-row {
  align-items: center;
  height: 100%;
}
.right-wrapper {
  display: flex !important;
  align-items: center;
  text-align: right;
  .el-input {
    width: 50%;
  }
  .full-screen {
    margin: 0 10px;
  }
  .user-info {
    margin-left: 15px;
  }
}

</style>
