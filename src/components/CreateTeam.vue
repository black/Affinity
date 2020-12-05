<template> 
      <div class="flex bg-yellow-200">
          <input v-model="team" class="flex-1 rounded-l py-3 flex-stretch border text-gray-800 border-gray-200 px-5 bg-white" placeholder="Your idea here..."/>
          <button v-on:click="createTeam()" class="rounded-r bg-blue-400 text-white font-bold px-5 uppercase">ADD</button>
      </div>   
</template>
<script>
export default {  
  data() {
    return {  
       team:'', 
    }
  },  
  methods: { 
    createTeam(){
        let payload = {
            id:this.$store.getters.getUser.uid,
            data:{
                name: this.team,
                status:'active'
            }
        };
        this.$store.dispatch("createTeam",payload);
        this.team = '';
    }
  },  
}
</script>
<style scoped> 
</style>