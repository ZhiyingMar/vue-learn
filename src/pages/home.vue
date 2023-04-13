<template>
  <div>
    <p>Home</p>
    <mixins-a/>
    <!-- <ex /> -->
    <!-- <mixins-b/>    -->
  </div>
</template>

<script>
import MixinsA from "@/components/mixins/mixinsA.vue";
import Ex from "@/components/extends/extend.vue";
import MixinsB from "@/components/mixins/mixinsB.vue";
export default {
  data() {
    return {
    }
  },
  components: {
    MixinsA,
    Ex,
    MixinsB
  }
}
</script>
<style scoped>
</style>
