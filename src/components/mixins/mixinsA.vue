<!-- 组件A -->
<template>
  <div>
    <p>我是A组件</p>
    <p style="color:red">当前A组件num的值为：{{num}}</p>
    <button @click="show">按钮</button>
  </div>
</template>


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
// import { mixinsDemo } from "@/assets/js/mixins-demo.js"
// export default {
//   mixins: [mixinsDemo],
//   created() {
//     console.log("mixinsA的created")
//   },
//   methods: {
//     show() {
//       console.log("mixinsA的show")
//       this.num+=2;
//     },
//   }
// }

//采用extends的形式调用函数
// import { extendsDemo } from "@/assets/js/mixins-demo.js"
// export default {
//   extends: extendsDemo,
//   created() {
//     console.log("mixinsA的created")
//   },
// }


//调用mixins和extends形式调用函数
import { extendsDemo,mixinsDemo } from "@/assets/js/mixins-demo.js"
export default {
  mixins:[mixinsDemo],
  extends: extendsDemo,
  data(){
    return{
      num:5
    }
  },
  created() {
    console.log("mixinsA的created");
  },
  methods:{
    show(){
      this.num+=2;
      console.log("mixinsA的show");
    }
  }
}
</script>
<style scoped>
</style>