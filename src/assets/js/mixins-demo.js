//mixins调用
export const mixinsDemo = {
  data() {
    return {
      num: 5
    };
  },
  created(){
    console.log("mixinsDemo的created")
  },
  methods: {
    show() {
      console.log("mixinsDemo的show")
      this.num++;
    },
  }
};

//extends调用
export const extendsDemo={
  data() {
    return {
      num: 100
    };
  },
  created(){
    console.log("extendsDemo的created")
  },
  methods: {
    show() {
      this.num+=10;
      console.log("extendsDemo的show");
    }
  }
}
