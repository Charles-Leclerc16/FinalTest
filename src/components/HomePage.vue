<template>
    <div id="home">
     
    <div class="col-8 offset-2">
      <table class="table caption-top table-hover">
    <caption class="text-center">
      <h1>学生管理系统</h1>
      <el-button type="primary" @click="getStudents">获取学生信息</el-button>
      <el-button type="primary" @click="dialogVisible = true">添加学生信息</el-button>
  
      <!-- <template>
    <el-button text @click="dialogVisible = true">
      click to open the Dialog
    </el-button> -->
  
    <el-dialog
      v-model="dialogVisible"
      title="提示"
      width="30%"
      :before-close="handleClose"
    >
      <div>添加学生信息</div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="addStudent">
            添加
          </el-button>
        </span>
      </template>
      <div><span>学号</span><input v-model.number="newStudent.id"/></div>
    <div><span>姓名</span><input v-model="newStudent.name"/></div>
    <div><span>性别</span><input v-model="newStudent.gender"/></div>
    <div><span>gpa</span><input v-model.number="newStudent.gpa"/></div>
    </el-dialog>
  <!-- </template> -->
  
    </caption>
    <thead>
      <tr>
        <th scope="col">学号</th>
        <th scope="col">姓名</th>
        <th scope="col">性别</th>
        <th scope="col">GPA</th>
        <th scope="col">操作</th>
      </tr>
    </thead>
    <tbody>
      <StudentCl v-for="stu in students_for_page" :key="stu.id" :student="stu"></StudentCl>
    </tbody>
  </table>
  <div class="text-center">
  <el-button-group>
    <el-button type="primary" icon="el-icon-arrow-left" @click="last_page" :disabled="page === 1">上一页</el-button>
  <el-button type="primary" @click="next_page" :disabled="page === totalPages">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
  </el-button-group>
  </div>
    </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  import StudentCl from './StudentCl.vue'
  export default {
    name: 'HomePage',
    components:{
      StudentCl
    },
    data() {
      return{
        page:1,
        totalPages: 0,
        dialogVisible: false,
        students:[],
        newStudent:{
          id:"",
          name:"",
          gender:"",
          gpa:"",
        }
  
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
          this.calculateTotalPages();
        })
      },
      handleClose(done) {
          this.$confirm('确认关闭？')
            .then(() => {
              done();
            })
            .catch(() => {});
        },
      calculateTotalPages() {
        this.totalPages = Math.ceil(this.students.length / 5);
        },
        addStudent(){
          axios({
          url:"http://localhost:8181/addstudent",
          method:"POST",
          data:this.newStudent
        })
        this.dialogVisible = false
        this.newStudent = { id: "", name: "", gender: "", gpa: "" };
        this.getStudents();
        
        },
        next_page(){
          this.page +=1;
        },
        last_page(){
          if(this.page>=2)
  
          this.page -=1;
        },
    },
    computed:{
      students_for_page(){
  return this.students.slice(this.page*5-5,this.page*5)
      }
    }
  }
  </script>
  
  <style></style>
  
  
  