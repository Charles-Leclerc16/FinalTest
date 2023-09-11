<template>
    <tr>
         <td v-show="!is_edit">{{ localCourse.id }}</td>
         <td v-show="!is_edit">{{ localCourse.name }}</td>
         <td v-show="!is_edit">{{ localCourse.credit }}</td>
         <!-- <td v-show="!is_edit">{{ localCourse.gpa }}</td> -->
         <!-- <td>
           <el-button type="primary" @click="modify">修改</el-button>
           <el-button type="danger">删除</el-button>
         </td> -->
   
         <td v-show="is_edit"><input type="text" v-model="localCourse.id"/></td>
         <td v-show="is_edit">{{ localCourse.name }}</td>
         <td v-show="is_edit">{{ localCourse.credit }}</td>
         <!-- <td v-show="is_edit">{{ localStudent.gpa }}</td> -->
         <!-- <td>
           <el-button type="primary">保存</el-button>
           <el-button type="danger">删除</el-button>
         </td> -->
       </tr>
   </template>
   
   <script>
   export default{
     props:["course"],
     data(){
       return{
         is_edit:false,
         localCourse: { ...this.course } // 复制传递的 student 数据到局部数据
       }
     },
     methods:{
       modify(){
         this.is_edit=true;
       }
     }
   }  
   </script>
   <style>
   </style>
   
 
