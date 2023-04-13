import Vue from "vue";
const extendDemo=Vue.extend({
    template:'<p>我是extend111 </p>',
    data(){
        return{
            num:5
        }
    }
});
export default new extendDemo()
