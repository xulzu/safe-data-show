<template>
  <div class="home">
    <span style="width: 26%; height: 100%">
      <div class="left">
        <div class="left1">
          <span class="title"><span class="title-text">攻击IP详情</span></span>
          <attackIPScroll></attackIPScroll>
        </div>
        <div class="left1">
          <span class="title"><span class="title-text">被攻击排行</span></span>
          <span class="angle1"></span>
          <span class="angle2"></span>
          <span class="angle3"></span>
          <span class="angle4"></span>
          <rowBar></rowBar>
        </div>
        <div class="left1">
          <span class="title"><span class="title-text">恶意流量</span></span>
          <span class="angle1"></span>
          <span class="angle2"></span>
          <span class="angle3"></span>
          <span class="angle4"></span>
          <singleArea></singleArea>
        </div>
      </div>
    </span>
    <span style="width: 48%; height: 100%">
      <div class="main-title">恶意攻击可视化平台</div>
      <div style="position: relative; width: 100%; height: 60%">
        <border style="margin-top: -22px"></border>
        <border position="right-top" style="margin-top: -22px"></border>
        <border position="left-bottom" style="margin-bottom: -10px"></border>
        <border position="right-bottom" style="margin-bottom: -10px"></border>

        <chinaMap></chinaMap>
      </div>
      <div style="width: 100%; height: calc(40% - 60px)">
        <realTimeAttackIPScroll></realTimeAttackIPScroll>
      </div>
    </span>
    <span style="width: calc(26% - 5px)">
      <div class="right1" style="height: 40%; width: 100%">
        <span class="title"><span class="title-text">应用数据</span></span>

        <span class="angle1" style="margin-top: 25px"></span>
        <span class="angle2" style="margin-top: 25px"></span>
        <span class="angle3"></span>
        <span class="angle4"></span>
        <div style="display: flex; height: 40%; width: 100%">
          <div class="cirle">
            <circlePie></circlePie>
          </div>
          <div class="cirle">
            <circlePie color="#c618e6"></circlePie>
          </div>
          <div class="cirle">
            <circlePie color="orange"></circlePie>
          </div>
          <div class="cirle">
            <circlePie color="yellow"></circlePie>
          </div>
        </div>
        <div style="height: 60%; width: 100%; margin-bottom: 0px">
          <colBar></colBar>
        </div>
      </div>
      <div class="right1" style="height: 33%; width: 100%">
        <span class="title"><span class="title-text">策略排名</span></span>
        <span class="angle1"></span>
        <span class="angle2"></span>
        <span class="angle3"></span>
        <span class="angle4"></span>
        <rowBar></rowBar>
      </div>
      <div class="right1" style="height: 27%; width: 100%">
        <span class="angle1"></span>
        <span class="angle2"></span>
        <span class="angle3"></span>
        <span class="angle4"></span>
        <typewriterNotice></typewriterNotice>
      </div>
    </span>
  </div>
</template>

<script lang="ts" setup>
import chinaMap from "../components/chinaMap.vue";
import singleArea from "../components/singleArea.vue";
import rowBar from "../components/rowBar.vue";
import realTimeAttackIPScroll from "@/components/realTimeAttackIPScroll.vue";
import circlePie from "@/components/circlePie.vue";
import colBar from "@/components/colBar.vue";
import attackIPScroll from "@/components/attackIPScroll.vue";
import typewriterNotice from "@/components/typewriterNotice.vue";
import earth from "@/components/earth.vue";
import border from "../components/border.vue";
</script>
<style lang="less" scoped>
span {
  display: inline-block;
}
.home {
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #03044a;
  overflow: hidden;
}
.left {
  width: 100%;
  height: 100%;
}
.left1 {
  border-bottom: 1px solid #0d2451;
  background: #151456;
  height: 33%;
  width: 100%;
  padding: 20px 0 5px 0;
  box-sizing: border-box;
  position: relative;
}
.right1 {
  border-bottom: 1px solid #0d2451;
  background: #151456;
  padding: 20px 0px 0px 0;
  box-sizing: border-box;
  position: relative;
}
.main-title {
  width: 100%;
  padding: 2px;
  box-sizing: border-box;
  text-align: center;
  color: #75deef;
  font-size: 30px;
  letter-spacing: 10px;
  background-image: url(../assets/headimg.png);
  background-size: 170% 115%;
  background-position: center center;
  background-repeat: no-repeat;
}
.title {
  position: absolute;
  display: inline-block;
  color: #6eddf1;
  border: 2px solid #6eddf1;
  height: 18px;
  padding: 0 2px;
  left: 50%;
  transform: translate(-50%, -50%);

  .title-text {
    position: relative;
    line-height: 23px;
    font-size: 16px;
    background: #151456;
    display: inline-block;
    padding: 0px 4px;
    transform: translateY(-2px);
  }
}
.cirle {
  width: 25%;
}
</style>
