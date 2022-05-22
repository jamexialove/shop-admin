import { createStore, Store, useStore as baseUseStore } from 'vuex'
import { InjectionKey } from 'vue'
import { IUserInfo } from '@/api/types/common'
import { setItem, getItem } from '@/utils/storage'
import { USER } from '@/utils/constants'
// export interface State {
//   count: number
//   isCollapse: boolean
// }
const state = {
  count: 1,
  isCollapse: false,
  user: getItem<IUserInfo>(USER)
  // user: JSON.parse(window.localStorage.getItem('user') || 'null') as IUserInfo | null
}

export type State = typeof state

// 定义 injection key
export const key: InjectionKey<Store<State>> = Symbol('store')

// 创建一个新的 store 实例
export const store = createStore<State>({
  // state () {
  //   return {
  //     count: 1,
  //     isCollapse: false
  //   }
  // },
  state,
  mutations: {
    setIsCollapse (state, payload) {
      state.isCollapse = payload
    },
    setUser (state, payload) {
      state.user = payload
      setItem(USER, state.user)
      // window.localStorage.setItem('user', JSON.stringify(state.user))
    }
  }
})

// 定义自己的 `useStore` 组合式函数
export function useStore () {
  return baseUseStore(key)
}
