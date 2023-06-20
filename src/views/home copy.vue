<template>
  <div class="home">
    <div class="box">
      <chinaMap></chinaMap>
    </div>
    <div class="box">
      <singleArea></singleArea>
    </div>
    <div class="box">
      <rowBar></rowBar>
    </div>
    <div class="box">
      <div class="circle" style="border: 1px solid #a41b68">
        <circlePie></circlePie>
      </div>
    </div>
    <div class="box">
      <colBar></colBar>
    </div>
    <div class="box">
      <attackIPScroll></attackIPScroll>
    </div>
  </div>
</template>

<script lang="ts" setup>
import chinaMap from "../components/chinaMap.vue";
import singleArea from "../components/singleArea.vue";
import rowBar from "../components/rowBar.vue";
import circlePie from "@/components/circlePie.vue";
import colBar from "@/components/colBar.vue";
import attackIPScroll from "@/components/attackIPScroll.vue";
const listData = [
  {
    title: "无缝滚动第一行无缝滚动第一行",
    date: "2017-12-16",
  },
  {
    title: "无缝滚动第二行无缝滚动第二行",
    date: "2017-12-16",
  },
  {
    title: "无缝滚动第三行无缝滚动第三行",
    date: "2017-12-16",
  },
  {
    title: "无缝滚动第四行无缝滚动第四行",
    date: "2017-12-16",
  },
  {
    title: "无缝滚动第五行无缝滚动第五行",
    date: "2017-12-16",
  },
  {
    title: "无缝滚动第六行无缝滚动第六行",
    date: "2017-12-16",
  },
  {
    title: "无缝滚动第七行无缝滚动第七行",
    date: "2017-12-16",
  },
  {
    title: "无缝滚动第八行无缝滚动第八行",
    date: "2017-12-16",
  },
  {
    title: "无缝滚动第九行无缝滚动第九行",
    date: "2017-12-16",
  },
];
</script>
<style lang="less">
.home {
  display: flex;
  flex-wrap: wrap;
  background-color: #03044a;
}
.box {
  height: 500px;
  width: 500px;

  // border: 1px solid #e9e5e7;
}
.circle {
  width: 150px;
  height: 150px;
}
</style>
