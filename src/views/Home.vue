<template>
    <div class="flex flex-col h-screen bg-grey-light">
      <div class="flex flex-row justify-between">
        <TopBar v-bind:team="getCurrTeam" v-bind:status="getLoginStatus"/>     
        <Tools class="p-3"/>
      </div>
       <div class="flex-1 flex bg-gray-100 overflow-hidden">
            <div class="flex-1 overflow-y-scroll bg-white p-3">
               <Notes/> 
            </div>
       </div>
        <div class="flex flex-row items-center justify-between">
          <div class="flex-shrink px-5 cursor-pointer hover:opacity-40" @click="showTeam=!showTeam">
            <span class="text-xs block  text-gray-400">TEAM</span>
            <span class="text-base uppercase">{{getCurrTeam.name}}</span>
          </div>
          <!-- <AddNote  class="w-1/3" v-bind:team="getTeamName"/>  -->
          <div class="flex flex-row fixed bottom-24 left-5" v-show="showTeam"> 
              <ul class="border divide-y-2 divide-dashed">
                <li v-for="(team,key) in getTeamList" :key="key" class="px-4 py-3 cursor-pointer hover:bg-gray-50" @click="selecteTeam(key,team)">{{team.name}}</li>
                <li> 
                    <CreateTeam />
                </li>
              </ul>
          </div>
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
import CreateTeam from "@/components/CreateTeam.vue"  
// import AddNote from "@/components/AddNote.vue"  

export default {
   components: {
    TopBar, 
    Notes, 
    Admin,
    Members, 
    Tools,
    CreateTeam
    // AddNote, 
  },
  data(){
    return{
      showTeam:false
    }
  },
  computed:{
    getLoginStatus() { 
      return this.$store.getters.getLoginStatus;
    },
    getTeamList(){
      return this.$store.getters.getTeamList;
    },
    getCurrTeam() {  
      return this.$store.getters.getCurrTeam;
    },
  },
  methods:{
    checkLogin(){
      this.$store.dispatch('checkIfLogin');
    },
    logOut(){
      this.$store.dispatch('signout');
    },
    selecteTeam(team_id,team_data){
      console.log("teaminfo", team_id, JSON.parse(JSON.stringify(team_data)));
      this.$store.dispatch('updateCurrTeamId', team_id); 
      this.$store.dispatch('updateCurrTeamInfo',JSON.parse(JSON.stringify(team_data))); 
    }
  },
  mounted(){
    this.checkLogin()
  }
};
</script>

<style scoped>
 
</style>
