<template>
    <div id="score">
     
    <div class="col-8 offset-2">
      <table class="table caption-top table-hover">
    <caption class="text-center">
      <h1>学生管理系统</h1>
      <el-button type="primary" @click="getScore">获取成绩信息</el-button>
     
    </caption>
    <thead>
      <tr>
        <th scope="col">学号</th>
        <th scope="col">课程号</th>
        <th scope="col">成绩</th>
      </tr>
    </thead>
    <tbody>
      <ScoreCl v-for="scr in scores_for_page" :key="scr.idx" :score="scr"></ScoreCl>
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
  import ScoreCl from './ScoreCl.vue'
  export default {
    name: 'ScoreComp',
    components:{
      ScoreCl
    },
    data() {
      return{
        page:1,
        totalPages: 0,
        dialogVisible: false,
        scores:[],
        newScores:{
          sid:"",
          cid:"",
          score:"",
          idx:"",
        }
  
      }
    },
  
    methods:{
      getScore(){
        axios({
          url:'http://localhost:8181/score',
          method:'GET',
        }).then(res=>{
          console.log(res.data);
          this.scores=res.data;
          this.calculateTotalPages();
        })
      },
   
      calculateTotalPages() {
        this.totalPages = Math.ceil(this.scores.length / 10);
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
      scores_for_page(){
  return this.scores.slice(this.page*10-10,this.page*10)
      }
    }
  }
  </script>
  <style></style>
  
  
  