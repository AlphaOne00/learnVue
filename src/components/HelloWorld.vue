<template>
  <div>
    <button v-for="(item, index) in num" :key="index" @click="btnClick(index)">{{index}}</button>
    <slot name="first"><button>1111</button></slot>
    <slot name="last"><button>1111</button></slot>
  </div>
</template>

<script>
export default {
  data() {
    return{
      num : [10, 20, 111, 222, 444, 40, 50]
    }
  },
  created() {
    // this.filterTest()
    // this.mapTest()
    // this.reduceTest()
  },
  methods: {
    //三个高阶函数:可以将函数作为参数传进函数里：filter\map\reduce
    //filter中的回调函数有一个要求：必须返回一个boolean值
    // 当返回true时，会自动将这次回调的n加入到新的数组，false则会自动过滤这次数组
    filterTest() {
      let newNums = this.num.filter(n=>
      n<100)
      console.log(newNums);
    },
    //map回调一个数组
    // 这个测试函数的作用是返回当前数组每个元素的两倍到一个新数组里
    mapTest() {
      let newNums = this.num.map(n => n*2)
      console.log(newNums);
    },
    /*  reduce能够返回当前的值和上一次的值
        这个数组的作用是返回数组的总和
    */
    reduceTest() {
      let newNum = this.num.reduce((previousValue,currentValue)=>
        previousValue + currentValue,0)
        console.log(newNum);
    },
    /* 
    子组件向父组件传递数据，使用$emit
    */
    btnClick(index) {
      this.$emit('getIndex', index)
    } 
  }
}
</script>

<style>

</style>