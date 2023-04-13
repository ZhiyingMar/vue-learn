<!-- 组件B -->
<template>
  <div>
    <p>我是B组件</p>
    <p style="color:blue">当前B组件num的值为：{{num}}</p>
    <button @click="show">按钮</button>
  </div>
</template>

<!-- 首次创建 -->
<script>
// 首次创建 
// export default {
//   data() {
//     return {
//       num: 5,
//     }
//   },
//   created() {
//     console.log("mixins的created")
//   },
//   methods: {
//     show() {
//       this.num++;
//     }
//   }
// }


//采用mixins的形式调用函数
import { mixinsDemo } from "@/assets/js/mixins-demo.js"
export default {
  mixins: [mixinsDemo],
  created() {
    console.log("mixinsB的created")
  },
}
</script>
<style scoped>
</style>