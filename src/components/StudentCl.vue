<template>
    <tr>
         <td v-show="!is_edit">{{ localStudent.id }}</td>
         <td v-show="!is_edit">{{ localStudent.name }}</td>
         <td v-show="!is_edit">{{ localStudent.gender }}</td>
         <td v-show="!is_edit">{{ localStudent.gpa }}</td>
         <td v-show="!is_edit">
           <el-button  type="primary" @click="modify">修改</el-button>
           <el-button type="danger" @click="deleteStudent">删除</el-button>
         </td>
   
         <td v-show="is_edit"><input type="text" v-model.number="localStudent.id"/></td>
         <td v-show="is_edit"><input type="text" v-model="localStudent.name"/></td>
         <td v-show="is_edit"><input type="text" v-model="localStudent.gender"/></td>
         <td v-show="is_edit"><input type="text" v-model.number="localStudent.gpa"/></td>
         <td v-show="is_edit">
           <el-button type="primary" @click="save">保存</el-button>
           <el-button type="danger" @click="deleteStudent">删除</el-button>
         </td>
       </tr>
   </template>
   
   <script>
import axios from 'axios';
   export default{
     props:["student"],
     data(){
       return{
         is_edit:false,
         localStudent: { ...this.student } // 复制传递的 student 数据到局部数据
       }
     },
     methods:{
      getStudents(){
      axios({
        url:'http://localhost:8181/student',
        method:'GET',
      }).then(res=>{
        console.log(res.data);
        this.students=res.data;
       
      })
    },
      modify(){
       this.is_edit=true;
     },
     save(){
      axios({
        url:"http://localhost:8181/updatestudent",
        method:"PUT",
        data:this.localStudent
      })
      this.is_edit=false;
     },
     deleteStudent(){
      axios({
        url:"http://localhost:8181/deletestudent",
        method:"DELETE",
        data:this.localStudent
      }).then(() => {
        this.is_edit=false;
        this.getStudents(); // 删除学生后重新获取学生列表
      });
     }
     }
   }
   </script>
   <style>
   </style>
   
 
