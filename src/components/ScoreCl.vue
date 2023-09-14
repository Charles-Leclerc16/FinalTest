<template>
    <tr>
         <td v-show="!is_edit">{{ localScore.cid }}</td>
         <td v-show="!is_edit">{{ localScore.sid }}</td>
         <td v-show="!is_edit">{{ localScore.score }}</td>
         <!-- <td v-show="!is_edit">{{ localScore.gpa }}</td> -->
         <!-- <td>
           <el-button type="primary" @click="modify">修改</el-button>
           <el-button type="danger">删除</el-button>
         </td> -->
   
         <td v-show="is_edit"><input type="text" v-model="localScore.cid"/></td>
         <td v-show="is_edit">{{ localScore.sid }}</td>
         <td v-show="is_edit">{{ localScore.score }}</td>
         <!-- <td v-show="is_edit">{{ localStudent.gpa }}</td> -->
         <!-- <td>
           <el-button type="primary">保存</el-button>
           <el-button type="danger">删除</el-button>
         </td> -->
       </tr>
   </template>
   
   <script>
   export default{
     props:["score"],
     data(){
       return{
         is_edit:false,
         localScore: { ...this.score } // 复制传递的 student 数据到局部数据
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
   
 
