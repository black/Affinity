<template> 
      <div class="flex">
          <input v-model="email" type="email" class="flex-1 rounded-l py-3 flex-stretch border text-gray-800 border-gray-200 px-5 bg-white" placeholder="Your idea here..."/>
          <button v-on:click="inviteMember()" class="rounded-r bg-blue-400 text-white font-bold px-5 uppercase">ADD</button>
      </div>   
</template>
<script>
export default {  
  data() {
    return {   
       email:''
    }
  },  
  methods: { 
    inviteMember(){ 
         console.log(this.email);
         this.$store.dispatch('inviteUser',{
           mail:this.email,
           team:this.$store.getters.getCurrTeamId, 
           status:'pending',
           info:this.$store.getters.getCurrTeam
         })
    }
  },  
}
</script>
<style scoped> 
</style>