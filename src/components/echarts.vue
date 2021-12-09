<template>
  <div>
    <div>
      <select  v-model="lan" :style="{width:'50px'}" >
        <option v-for="la in lans" :key="la" :value="la">{{la}}</option>
      </select>
    </div>
    <div id="main" :style="{width:'50%',height:'500px'}"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "charts",
  data() {
    return {
      data1:["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      data2:["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
      data:[],
      lans:['eng','zn'],
      lan:'eng'
    };
  },
  created() {
    this.$nextTick(()=>{
      this.data = this.data1
      this.drawEchart()
    })
  },
  watch: {
    lan(newValue) {
      if (newValue === 'eng') {
        console.log(111);
        this.data = this.data1
      }else{
        console.log(222);
        this.data = this.data2
      }
      /*this.drawEchart() 
      调用函数会在原先的dom元素上再次渲染一个echart，导致一个dom元素上有多个echart，log时可以看出 */
    }
  },
  methods: {
    drawEchart() {
      let chartDom = document.getElementById("main");
      let myChart = echarts.init(chartDom);

      let option;

      option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#999",
            },
          },
        },
        toolbox: {
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ["line", "bar"] },
            restore: { show: true },
            saveAsImage: { show: true },
          },
        },
        legend: {
          data: ["Evaporation", "Precipitation", "Temperature"],
        },
        xAxis: [
          {
            type: "category",
            data: this.data,
            axisPointer: {
              type: "shadow",
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "Precipitation",
            min: 0,
            max: 250,
            interval: 50,
            axisLabel: {
              formatter: "{value} ml",
            },
          },
          {
            type: "value",
            name: "Temperature",
            min: 0,
            max: 25,
            interval: 5,
            axisLabel: {
              formatter: "{value} °C",
            },
          },
        ],
        series: [
          {
            name: "Evaporation",
            type: "bar",
            data: [
              2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4,
              3.3,
            ],
          },

          {
            name: "Temperature",
            type: "line",
            yAxisIndex: 1,
            data: [
              2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2,
            ],
          },
        ],
      };

      /* echarts重绘页面，加上true参数 */
      option && myChart.setOption(option, true);
      

      myChart.on('click',(params)=>{
        console.log(111,params.name);
      })

      window.addEventListener('resize',()=>{
        myChart.resize()
      })
    },
  },
};
</script>

<style>
</style>