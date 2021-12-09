<template>
  <div class="home">
    <HelloWorld @getIndex="getIndex" ref="hello">
       <p slot="last">是的</p>
      <input type="text" slot="first" /> 
    </HelloWorld>
    <button @click="use">调用函数</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data() {
    return{
      
    }
  },
  methods: {
    getIndex(index) {
      console.log(index);
    },
    use() {
      this.$refs.hello.mapTest()
      console.log(11111,this.$refs.hello);
    }
  }
}
</script>
