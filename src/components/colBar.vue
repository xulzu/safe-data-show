<template>
  <div class="charts" ref="$el"></div>
</template>

<script lang="ts" setup>
import TWEEN from "@tweenjs/tween.js";
import * as echarts from "echarts";
import { ref, onMounted, watch } from "vue";
import { colBarData } from "./mock";
const $el = ref();
onMounted(setChart);
function setChart() {
  const option = {
    animation: false,
    grid: {
      top: 40,
      bottom: 0,
      left: 0,
      right: 0,
    },

    xAxis: {
      data: colBarData.map((item) => item.label),
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },

      axisLabel: {
        show: true,
        color: "#5CB1C1",
        formatter(val: string) {
          return val?.split("").join("\n");
        },
        verticalAlign: "bottom",
        // margin: [-10, 0, 0, 0],

        padding: [0, 40, 15, 0],
      },
    },
    yAxis: {
      type: "value",
      splitLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
    },
    series: [
      {
        name: "状态",
        type: "bar",
        animation: false,

        barWidth: 16,
        label: {
          show: true,
          position: "top",
          color: "#fff",
        },

        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
            {
              offset: 0,
              color: "#1F0D5E",
            },
            {
              offset: 1,
              color: "#1480C2",
            },
          ]),

          borderRadius: [20, 20, 5, 5],
        },
        data: colBarData.map((item) => item.value),
      },
      {
        name: "effect",
        type: "bar",
        barWidth: 16,
        animation: false,
        barGap: "-100%",
        zlevel: 2,
        label: {
          show: false,
        },
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "#c618e6",
            },
            {
              offset: 0.5,
              color: "#634bf3",
            },
            {
              offset: 1,
              color: "#1480C2",
            },
          ]),
          borderRadius: [20, 20, 5, 5],
        },
        data: new Array(colBarData.length).fill(0),
      },
    ],
  };

  let myChart = echarts.init($el.value);
  let flag = 0;
  let slope = 6;
  const max = Math.max(
    ...colBarData.map((item, idx) => item.value + slope * idx)
  );
  myChart.on("finished", () => {
    flag++;
    if (flag !== 2) return;
    const coords = { x: 0 };
    const tween = new TWEEN.Tween(coords)
      .to({ x: max }, 3000)
      .easing(TWEEN.Easing.Linear.None)
      .onUpdate(() => {
        myChart.setOption({
          series: [
            {
              name: "effect",
              data: colBarData.map((item, idx) =>
                Math.max(0, Math.min(item.value, coords.x - slope * idx))
              ),
            },
          ],
        });
      })
      .start();

    const back = new TWEEN.Tween(coords)
      .to({ x: 0 }, 3000)
      .easing(TWEEN.Easing.Linear.None)
      .delay(1000)
      .onUpdate(() => {
        myChart.setOption({
          series: [
            {
              name: "effect",
              data: colBarData.map((item, idx) =>
                Math.max(0, Math.min(item.value, coords.x - slope * idx))
              ),
            },
          ],
        });
      });
    tween.chain(back);
    back.chain(tween);
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
.charts {
  height: 100%;
  width: 100%;
  color: #9f335373;
}
</style>
