<template>
  <div class="aside">
    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical"
    >
      <el-menu-item index="student">
        <router-link to="/student">Student</router-link>
      </el-menu-item>
      <el-menu-item index="course">
        <router-link to="/course">Course</router-link>
      </el-menu-item>
      <el-menu-item index="score">
        <router-link to="/score">Score</router-link>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
      name :'NavComp'
}
</script>
<style>
.aside {
  background-color: rgb(115, 172, 36)!important;
}

</style>