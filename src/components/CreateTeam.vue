<template> 
      <div class="flex bg-yellow-200">
          <input v-model="team" class="flex-1 py-3 flex-stretch px-5 bg-gray-100 focus:outline-none" placeholder="Create a new team"/>
          <button v-on:click="createTeam()" class="px-5 text-2xl">+</button>
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