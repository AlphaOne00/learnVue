<template>
  <div id="app">
    <div id="nav">
      <!-- router-link默认渲染成a标签,tag属性改变渲染的结果,repalce属性可以无效返回按钮 -->
      <router-link to="/home" tag="button">Home</router-link> |
      <router-link to="/about" tag="button">About</router-link>
      <!-- 代码实现router-link的方法 -->
      <button @click="homeClick">Home1</button>
      <button @click="aboutClick">About1</button>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  methods: {
    /* 通过代码的方式实现路由跳转，使用$router，其中push方法可以使用返回，replace方法不能返回 */
    homeClick() {
      this.$router.push('/home')
    },
    aboutClick() {
      this.$router.replace('/about')
    }
  }
}
</script>
<style>
/* router-link有默认的active的class名字 */
.active{
  color: #F00;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
