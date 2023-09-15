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
  height: 100vh; 
  margin: 0; 
  padding: 0; 
  overflow: hidden; 
}
.grid-container {
  display: grid;
  grid-template-rows: 1fr auto; 
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr; 
  height: 100%; 
}
.grid-item {
  padding: 20px; 
  overflow: hidden;
}
.el-aside {
  order: 1; 
}
.el-main {
  order: 2; 
}
.divider{
  width:2px;
  background-color:rgb(255, 143, 143);
  height:100%;
}

</style>