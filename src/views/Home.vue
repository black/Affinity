<template>
  <div class="home">
    <p class="navbar">
       {{getTeamName}} : {{getLoginStatus}}  <br>
       <button @click="logOut()">LOGOUT</button>
       <Team />
    </p>
    <Notes/>
    <AddNote v-bind:team='getTeamName' /> 
  </div>
</template>

<script>
// @ is an alias to /src
import Notes from "@/components/Notes.vue";
import AddNote from "@/components/AddNote.vue";
import Team from "@/components/Team.vue";

export default {
   components: {
    Notes,
    AddNote,
    Team
  },
  data(){
    return{
      title:'Home',
    }
  },
  computed:{
    getLoginStatus() { 
      return this.$store.getters.getLoginStatus;
    },
    getTeamName() { 
      return this.$store.getters.getTeamName;
    },
  },
  methods:{
    checkLogin(){
      this.$store.dispatch('checkIfLogin');
    },
    logOut(){
      this.$store.dispatch('signout');
    }
  },
  mounted(){
    this.checkLogin()
  }
};
</script>

<style scoped>
.home{
  padding:5%;
}
.navbar{
  padding: 5%;
}
</style>
