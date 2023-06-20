<template>
  <div
    style="
      margin-top: 5px;
      position: relative;
      width: 100%;
      height: 100%;
      padding: 10px;
      box-sizing: border-box;
    "
  >
    <span class="angle1"></span>
    <span class="angle2"></span>
    <span class="angle3"></span>
    <span class="angle4"></span>
    <div style="display: flex">
      <span class="title" style="flex: 1"> IP地址 </span>
      <span class="title" style="width: 30%"> 地区 </span>
      <span
        class="title"
        style="text-align: center; width: 20%; min-width: 100px"
        >攻击次数</span
      >
    </div>
    <scrollTable :data="ipAttackCount" class="warp">
      <ul class="item">
        <li
          class="tableItem"
          v-for="(item, index) in ipAttackCount"
          :key="index"
        >
          <span style="flex: 1" class="contentItem" v-text="item.ip"></span>
          <span
            class="contentItem"
            style="width: 30%"
            v-text="item.address"
          ></span>
          <span class="contentItem countItem" v-text="item.value"></span>
        </li>
      </ul>
    </scrollTable>
  </div>
</template>
<script lang="ts" setup>
import { ipAttackCount } from "./mock";
import scrollTable from "./scrollTable.vue";
</script>
<style lang="less">
.warp {
  height: calc(100% - 23px);
  width: 100%;

  margin: 0 auto;
  overflow: hidden;
  ul {
    list-style: none;
    padding: 0;
    margin: 0 auto;
    li {
      display: block;
      height: 35px;
      line-height: 35px;
      padding: 0 10px;
      display: flex;
      justify-content: space-between;
      font-size: 15px;
    }
  }
}
.tableItem:nth-child(2n-1) {
  border-radius: 5px;
  box-shadow: 0 0 10px 0 #3d91cf inset;
}
.contentItem {
  // padding: 4px;
  text-align: left;
  color: #6eddf1;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.countItem {
  width: 20%;
  text-align: center;
  min-width: 100px;
}
.title {
  text-align: left;
  color: #6eddf1;
  font-weight: 400;
}
</style>
