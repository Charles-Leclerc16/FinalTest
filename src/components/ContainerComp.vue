<template>
  <div class="common-layout">
    <el-container>
      <el-header class="instru">点击下方按钮选择</el-header>
      <el-container class="flex-container">
        <el-main class="grid-item"><router-view/></el-main>
       <div class="divider"></div> 
      <el-aside class="grid-item"><NavComp/></el-aside>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import NavComp from './NavComp.vue'
export default {
  name: 'ContainerComp',
  components: {
    NavComp,
  }
}
</script>

<style>
.common-layout {
  background-color: lightblue;
  height: 100vh; /* 让背景颜色占满整个视口高度 */
  margin: 0; /* 移除默认的外边距 */
  padding: 0; /* 移除默认的内边距 */
  overflow: hidden; /* 防止内容溢出 */
}
.grid-container {
  display: grid;
  grid-template-rows: 1fr auto; /* 第一行占满，第二行自适应内容高度 */
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr; /* 五分之一宽度 */
  height: 100%; /* 让容器占满高度 */
}
.grid-item {
  padding: 20px; /* 可选：添加内边距以增加内容间距 */
  overflow: hidden;
}
.el-aside {
  order: 1; /* el-aside 的顺序为 1 */
}
.el-main {
  order: 2; /* el-main 的顺序为 2 */
}
.divider{
  width:2px;
  background-color:rgb(255, 143, 143);
  height:100%;
}

</style>