<template>
  <div class="home flex flex-col h-screen justify-stretch">
    <div class="flex bg-blue-400">
      <p class="">
        <span>{{getTeamName}}</span>
        <span>{{getLoginStatus}}</span>
      </p>
    </div>
    <div class="grid grid-flow-col flex-grow">
      <div class="flex flex-col">  
        <Notes/> 
      </div>  
    </div>
    <div class="flex flex-row items-center justify-between bg-gray-100 w-100">
      <div class="flex-shrink px-5">
        <span class="text-xs block  text-gray-400">TEAM</span>
        <span class="text-base uppercase">{{getTeamName}}</span>
      </div>
      <AddNote  class="w-50"/> 
      <Team  class="flex-shrink"/>
    </div>
  </div>
</template> 
<script>

// @ is an alias to /src
import Notes from "@/components/Notes.vue"
import AddNote from "@/components/AddNote.vue"
import Team from "@/components/Team.vue"
// import Members from "@/components/Member.vue"

export default {
   components: {
    Notes,
    AddNote,
    Team,
    // Members
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
    }
  },
  mounted(){
    this.checkLogin()
  }
};
</script>

<style scoped>
 
</style>
