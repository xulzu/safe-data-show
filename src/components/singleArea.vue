<template>
  <div class="singleAreaChart" ref="$el"></div>
</template>

<script lang="ts" setup>
import TWEEN from "@tweenjs/tween.js";
import * as echarts from "echarts";
import { ref, onMounted } from "vue";
import { lineData } from "./mock";
const $el = ref();
onMounted(setChart);
function setChart() {
  let option = {
    grid: {
      top: "0",
      bottom: "12%",
      left: "10%",
      right: "5%",
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      axisLabel: {
        color: "#61B9C8",
        fontSize: 10,
      },
      axisLine: {
        symbol: ["none", "arrow"],
        symbolSize: [6, 6],
        symbolOffset: [0, 5],
        lineStyle: {
          color: "#122C49",
        },
      },
      axisTick: {
        color: "#122C49",
        inside: true,
      },
      z: 2,
      data: lineData().map((item) => item.time),
    },
    yAxis: {
      type: "value",
      interval: 50,
      min: 0,
      max: (item: any) => {
        return item.max / 0.8;
      },
      axisLine: {
        show: true,

        symbol: ["none", "arrow"],
        symbolSize: [6, 6],
        lineStyle: {
          color: "#122C49",
        },
      },
      axisLabel: {
        color: "#61B9C8",
        showMaxLabel: false,
        fontSize: 10,
      },
      splitLine: {
        show: false,
      },
      name: "(次)",
      nameGap: -10,
      nameTextStyle: {
        color: "#61B9C8",
        fontSize: 9,
        align: "right",
        padding: [0, 6, 0, 0],
      },
      axisTick: {
        show: true,
      },
    },

    series: [
      {
        name: "恶意流量",
        type: "line",
        symbol: "none",
        zlevel: 2,
        animation: false,

        smooth: true,
        data: lineData().map((item) => item.value),
        lineStyle: {
          width: 1,
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "#B21356", // 0% 处的颜色
              },
              {
                offset: 0.5,
                color: "#B21356", // 40% 处的颜色
              },
              {
                offset: 1,
                color: "#F59111", // 100% 处的颜色
              },
            ],
            global: false, // 缺省为 false
          }, //背景渐变色
        },
        itemStyle: {
          color: "rgb(212,37,23)",
        },
        areaStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            opacity: 0.7,
            colorStops: [
              {
                offset: 0,
                color: "#A41B68", // 0% 处的颜色
              },
              {
                offset: 0.5,
                color: "rgba(112,20,82,1)", // 40% 处的颜色
              },
              {
                offset: 1,
                color: "rgba(112,20,82,0)", // 100% 处的颜色
              },
            ],
            global: false, // 缺省为 false
          }, //背景渐变色
          origin: "start",
        },
      },
    ],
  };
  let myChart = echarts.init($el.value);
  let flag = false;
  myChart.on("finished", () => {
    if (flag) return;
    flag = true;
    const coords = { x: 0.8 };
    const tween = new TWEEN.Tween(coords)
      .to({ x: 0.3 }, 1500)
      .easing(TWEEN.Easing.Linear.None)
      .onUpdate(() => {
        myChart.setOption({
          series: [
            {
              name: "恶意流量",
              animation: false,
              areaStyle: {
                opacity: coords.x,
              },
            },
          ],
        });
      })
      .start();

    const tweenBack = new TWEEN.Tween(coords)
      .to({ x: 0.8 }, 1300)
      .easing(TWEEN.Easing.Linear.None)
      .delay(1000)
      .onUpdate(() => {
        myChart.setOption({
          series: [
            {
              name: "恶意流量",
              animation: false,
              areaStyle: {
                opacity: coords.x,
              },
            },
          ],
        });
      });
    tween.chain(tweenBack);
    tweenBack.chain(tween);
    tween.start();

    // Setup the animation loop.
    function animate(time: number) {
      TWEEN.update(time);
      requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
  });
  myChart.clear();
  myChart.resize();
  myChart.setOption(option);
}
</script>

<style lang="less" scoped>
.singleAreaChart {
  width: 100%;
  height: 100%;
}
</style>
