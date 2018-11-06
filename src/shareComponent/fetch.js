// 模拟fetch行为
export default function fetch() {
  return new Promise(resolve => {
    setTimeout(() => resolve('小米笔记本'), 1000)
  })
}
