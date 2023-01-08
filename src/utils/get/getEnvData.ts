/**
 * 获取当前环境配置的值
 * @param key 键
 * @returns
 */
const getEnvData = (key: string) => {
  const value = process.env[key]
  console.log(`geEnvData key=> ${key} value=> ${value}`)
  return value
}

export { getEnvData }
