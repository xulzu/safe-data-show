<template>
  <div ref="$el" class="chinaMap"></div>
</template>
<script lang="ts" setup>
import * as echarts from "echarts";
import { ref, onMounted } from "vue";
import registerMapChinaMap from "../assets/chinaMap";
import { mapData } from "./mock";
import wordtest from "../assets/world.json";
import getDistance from "../utils/getDistance";
const geoData = mapData.filter(
  (item) =>
    getDistance(item.from[0], item.from[1], item.to[0], item.to[1]) > 3000
);

const geoDataConvert = convertData(geoData);
registerMapChinaMap(echarts);
//@ts-ignore
echarts.registerMap("world1", wordtest);
const $el = ref();
onMounted(setMap);
function convertData(data_: any) {
  const cityMap: {
    [key: string]: [[number, number], number];
  } = {};
  for (let item of data_) {
    cityMap[item.fromName] = cityMap[item.fromName] || [null, 0, 0];
    cityMap[item.toName] = cityMap[item.toName] || [null, 0, 0];
    cityMap[item.fromName][0] = item.from;
    cityMap[item.toName][0] = item.to;
    cityMap[item.toName][1] += item.value; //记录被攻击的次数
  }
  return Object.entries(cityMap).map(([name, item]) => {
    return [...item[0], name, item[1]];
  });
}
function setMap() {
  let option = {
    geo: {
      zoom: 1.3,
      map: "world1",
      roam: false,
      itemStyle: {
        areaColor: "#2043AA",
        borderColor: "#2ab8ff",
        borderWidth: 0.5,
        shadowColor: "#231ecf",
        shadowBlur: 5,
        shadowOffsetY: 10,
      },

      silent: true,
    },
    tooltip: {
      show: true,
    },
    visualMap: [
      {
        //图例值控制
        type: "continuous",
        min: 0,
        max: Math.max(
          ...convertData(mapData).map((item) => item.at(-1) as number)
        ),
        left: "left",
        top: "bottom",
        show: true,
        itemWidth: 5,
        itemHeight: 50,
        // orient: "horizontal",
        inRange: {
          color: ["#fff", "yellow", "green", "#c618e6", "red"],
          symbolSize: 5,
        },
        calculable: false,
        indicatorStyle: {
          opacity: 0.1,
        },
        text: ["被\n大\n量\n攻\n击", "攻\n击\n方"],
        textStyle: {
          color: "#6eddf1",
        },
      },
    ],
    series: [
      {
        type: "lines",
        zlevel: 2,
        animation: false,
        effect: {
          show: true,
          period: 3, //箭头指向速度，值越小速度越快
          trailLength: 0.1, //特效尾迹长度[0,1]值越大，尾迹越长重
          symbol: "arrow", //箭头图标
          symbolSize: 6, //图标大小
        },
        lineStyle: {
          width: 1.5, //尾迹线条宽度
          opacity: 0.4,
          curveness: 0.3, //尾迹线条曲直度
        },
        data: geoData.map((item) => {
          return {
            coords: [item.from, item.to],
            value: item.value,
          };
        }),
      },
      {
        name: "effectScatter",
        type: "effectScatter",
        coordinateSystem: "geo",
        zlevel: 2,
        rippleEffect: {
          //涟漪特效
          period: 5, //动画时间，值越小速度越快
          brushType: "stroke", //波纹绘制方式 stroke, fill
          scale: 2, //波纹圆环最大限制，值越大波纹越大
        },
        symbol: "circle",
        data: convertData(mapData).filter(
          ([x, y, name, z]) =>
            geoDataConvert.some((item) => item[0] === x && item[1] === y) ||
            +z > 0
        ),
        tooltip: {
          formatter: (params: any) => {
            const { data } = params;
            return `${data[2]}被攻击${data?.at(-1)}次`;
          },
          textStyle: {
            color: "#6eddf1",
            fontWeight: "bold",
          },
          borderColor: "#6eddf1",
          backgroundColor: "#9f335373",
        },
      },
    ],
  };

  let myChart = echarts.init($el.value);
  myChart.clear();
  myChart.resize();
  myChart.setOption(option);
  showToolTip(myChart);
}
async function showToolTip(myChart: echarts.ECharts) {
  const data = (myChart.getOption() as any)?.series?.[1].data;
  const length = data.length;
  let i = 0;
  while (i >= 0) {
    i %= length;
    if (data[i][3] > 0) {
      await new Promise((res) => {
        setTimeout(() => {
          res(0);
        }, 1000);
      });
      myChart.dispatchAction({
        type: "showTip",
        seriesIndex: 1,
        dataIndex: i,
      });
    }
    i++;
  }
}
</script>
<style lang="less" scoped>
.chinaMap {
  height: 100%;
  color: #2911c5;
}
</style>
