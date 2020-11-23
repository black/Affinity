<template>
  <div class="w-full h-full flex">
    {{title}}
    <button
      class="btn"
      v-on:click="loginBtn()"
    >LOGIN</button>
  </div>
</template>

<script>
export default {
   data(){
     return{ 
       title:'Login Page',
     }
   },
   methods:{
    loginBtn() {
        this.$store.dispatch("login");
    },
   }
};
</script>

<style scoped>
.btn{
  padding: 10px 15px;
  border:none;
  border-radius: 5px;
  border: 1px solid #eee;
  margin: 5%;
}
</style>