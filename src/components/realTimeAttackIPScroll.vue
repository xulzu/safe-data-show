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
    <scrollTable :data="realTimeAttackData" class="warp">
      <ul class="item">
        <li v-for="(item, index) in realTimeAttackData" :key="index">
          <span style="width: 30%" class="contentItem">
            {{ item.time }} {{ item.address }}的
          </span>
          <span style="width: 25%" class="contentItem">
            {{ item.fromIP }}攻击
          </span>
          <span style="width: 20%" class="contentItem">
            {{ item.attackIP }}
          </span>
          <span style="width: 25%" class="contentItem">
            命中{{ item.strategy }}
          </span>
        </li>
      </ul>
    </scrollTable>
  </div>
</template>
<script lang="ts" setup>
import scrollTable from "./scrollTable.vue";
import { realTimeAttackData } from "./mock";
</script>
<style lang="less" scoped>
.warp {
  height: calc(100%);
  width: 100%;

  margin: 0 auto;
  overflow: hidden;
  ul {
    list-style: none;
    padding: 0;
    margin: 0 auto;
    li,
    a {
      display: block;
      height: 30px;
      line-height: 30px;
      display: flex;
      justify-content: space-between;
      font-size: 15px;
    }
  }
}
.contentItem {
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
}
</style>
