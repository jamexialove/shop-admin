<template>
  <div class="login-container">
    <el-form
      ref="form"
      :model="user"
      size="large"
      :rules="rules"
      class="login-form"
      @submit.prevent="handleSubmit"
    >
      <div class="login-form_header">
        <h2>管理系统</h2>
      </div>
      <el-form-item
        prop="account"
      >
        <el-input
          v-model="user.account"
          placeholder="请输入用户名"
        >
          <template #prepend>
            <el-icon><User /></el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="pwd">
        <el-input
          v-model="user.pwd"
          type="password"
          autocomplete="请输入密码"
        >
          <template #prepend>
            <el-icon><Lock /></el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="imgcode">
        <el-input
          v-model="user.imgcode"
          placeholder="请输入验证码"
        >
          <template #prepend>
            <el-icon><Key /></el-icon>
          </template>
        </el-input>
        <img
          class="imgcode"
          :src="captchaSrc"
          alt="验证码"
          @click="loadCaptcha"
        >
      </el-form-item>
      <el-form-item>
        <el-button
          class="submit-button"
          type="primary"
          :loading="loading"
          native-type="submit"
        >
          登录
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang='ts' setup>
import { getCaptcha, login } from '@/api/common'
// import type { ILoginInfo } from '@/api/types/common'
import { onMounted, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { IElForm, IFormRule } from '@/types/element-plus'
import { store } from '@/store'

const router = useRouter()
const captchaSrc = ref('')
const form = ref<IElForm | null>(null)

const user = reactive({
  account: 'admin',
  pwd: '123456',
  imgcode: ''
})
const loading = ref(false)
const rules = ref<IFormRule>({
  account: [
    { required: true, message: '请输入账号', trigger: 'change' }
  ],
  pwd: [
    { required: true, message: '请输入密码', trigger: 'change' }
  ],
  imgcode: [
    { required: true, message: '请输入验证码', trigger: 'change' }
  ]
})

const handleSubmit = async () => {
  const valid = await form.value?.validate()
  if (!valid) return false
  loading.value = true
  const data = await login(user).finally(() => {
    loading.value = false
  })
  store.commit('setUser', data.user_info)
  console.log(data)
  router.replace({
    name: 'home'
  })
}

// const list = ref<ILoginInfo['slide']>([])

onMounted(() => {
  // getLoginInfo().then(data => {
  //   //  (data)
  //   list.value = data.slide
  // })
  console.log(form.value?.validate())
  loadCaptcha()
})

const loadCaptcha = async () => {
  const data = await getCaptcha()
  captchaSrc.value = URL.createObjectURL(data)
}

</script>

<style lang='scss' scoped>
.login-container {
  background-color: #304156;
  height: 900px;
  .login-form {
    width: 35%;
    margin: auto;
    height: 45%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: fixed;
    text-align: center;
    background: #fff;
    border-radius: 10px;
    padding: 10px;
    .login-form_header {
      margin-bottom: 10px;
    }
    .el-button {
      width: 100%;
    }
  }
}

</style>
