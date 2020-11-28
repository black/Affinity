<template>
  <div class="home flex flex-col h-screen justify-stretch bg-gray-100">
    <TopBar v-bind:team="getTeamName" v-bind:status="getLoginStatus"/> 
    <div class="grid grid-flow-col flex-grow">
      <div class="flex flex-col">  
        <Notes/> 
      </div>  
    </div>
    <div class="flex flex-row items-center justify-between w-100 py-2">
      <div class="flex-shrink px-5">
        <span class="text-xs block  text-gray-400">TEAM</span>
        <span class="text-base uppercase">{{getTeamName}}</span>
      </div>
      <!-- <AddNote  class="w-1/3" v-bind:team="getTeamName"/>  -->
      <Members />
      <Admin  class="flex-shrink px-5"/>
    </div>
  </div>
</template> 
<script>

// @ is an alias to /src
import TopBar from "@/components/TopBar.vue"
import Notes from "@/components/Notes.vue"
// import AddNote from "@/components/AddNote.vue"
import Admin from "@/components/Admin.vue"
import Members from "@/components/Member.vue"

export default {
   components: {
    Notes,
    TopBar,
    // AddNote,
    Admin,
     Members
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
