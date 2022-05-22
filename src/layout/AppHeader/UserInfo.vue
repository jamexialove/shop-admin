<template>
  <el-dropdown>
    <span class="el-dropdown-link">
      {{ $store.state.user?.account||'admin' }}
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>个人中心</el-dropdown-item>
        <el-dropdown-item @click="handleLogout">
          退出登录
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<script lang='ts' setup>
import { ElMessageBox, ElMessage } from 'element-plus'
import { logout } from '@/api/common'
import { useRouter } from 'vue-router'

const router = useRouter()

const handleLogout = () => {
  // 退出提示
  ElMessageBox.confirm(
    'proxy will permanently delete the file. Continue?',
    'Warning',
    {
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
      type: 'warning'
    }
  )
    .then(async () => {
      await logout()
      router.push({
        name: 'login'
      })
      ElMessage({
        type: 'success',
        message: 'Delete completed'
      })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: 'Delete canceled'
      })
    })
  // 确认发出退出请求
  // 跳转到登录页
}

</script>
<style lang='scss' scoped></style>
