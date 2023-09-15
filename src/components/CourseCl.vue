<template>
    <tr>
         <td v-show="!is_edit">{{ localCourse.id }}</td>
         <td v-show="!is_edit">{{ localCourse.name }}</td>
         <td v-show="!is_edit">{{ localCourse.credit }}</td>
       
         <td v-show="is_edit"><input type="text" v-model="localCourse.id"/></td>
         <td v-show="is_edit">{{ localCourse.name }}</td>
         <td v-show="is_edit">{{ localCourse.credit }}</td>
       </tr>
   </template>
   
   <script>
   export default{
     props:["course"],
     data(){
       return{
         is_edit:false,
         localCourse: { ...this.course } // 局部数据
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
   
 
