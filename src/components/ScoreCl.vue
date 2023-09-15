<template>
    <tr>
         <td v-show="!is_edit">{{ localScore.cid }}</td>
         <td v-show="!is_edit">{{ localScore.sid }}</td>
         <td v-show="!is_edit">{{ localScore.score }}</td>
     
         <td v-show="is_edit"><input type="text" v-model="localScore.cid"/></td>
         <td v-show="is_edit">{{ localScore.sid }}</td>
         <td v-show="is_edit">{{ localScore.score }}</td>

       </tr>
   </template>
   
   <script>
   export default{
     props:["score"],
     data(){
       return{
         is_edit:false,
         localScore: { ...this.score } 
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
   
 
