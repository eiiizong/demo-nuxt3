import type { PiniaPluginContext } from 'pinia'

/**
 * 解决pinia中使用setup风格定义的store不能使用$reset()方法的bug
 */
const reset = ({ store }: PiniaPluginContext) => {
  const initialState = JSON.parse(JSON.stringify(store.$state))
  store.$reset = () => {
    store.$state = JSON.parse(JSON.stringify(initialState))
  }
}

export { reset }
