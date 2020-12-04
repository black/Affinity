<template>
    <div class="flex flex-col h-screen bg-grey-light">
      <div class="flex flex-row justify-between">
        <TopBar v-bind:team="getTeamName" v-bind:status="getLoginStatus"/>    
        <Tools class="p-3"/>
      </div>
       <div class="flex-1 flex bg-gray-100 overflow-hidden">
            <div class="flex-1 overflow-y-scroll bg-white p-3">
               <Notes/> 
            </div>
       </div>
        <div class="flex flex-row items-center justify-between">
          <div class="flex-shrink px-5">
            <span class="text-xs block  text-gray-400">TEAM</span>
            <span class="text-base uppercase">{{getTeamName.name}}</span>
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
import Tools from "@/components/Tools.vue"
import Admin from "@/components/Admin.vue"
import Members from "@/components/Member.vue"  
// import AddNote from "@/components/AddNote.vue"  

export default {
   components: {
    TopBar, 
    Notes, 
    Admin,
    Members, 
    Tools,
    // AddNote, 
  },
  data(){
    return{
     
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
 
</style>
