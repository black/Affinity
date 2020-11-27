<template>
      <form class="flex h-12 w-50 bg-red-900 px-3">
          <input v-model="msg" class="rounded-l flex-stretch border text-gray-800 border-gray-200 px-5 bg-white" placeholder="Your idea here..."/>
          <button v-on:click="addNote()" class="rounded-r bg-blue-400 text-white font-bold px-5 uppercase">ADD</button>
      </form>
</template>
<script>
export default { 
  props:['team'],
  data() {
    return {  
       title:'Add node',
       msg:''
    }
  }, 
  computed:{
    getNoteAddStatus(){
      return this.$store.getters.getNoteAddStatus;
    }
  },
  methods: { 
    addNote(){ 
        let note = {
            msg: this.msg,
            avatar:'wolf'
        };
        this.$store.dispatch("addNotes",{
          "team":this.team,
          "data":note
        });
        this.msg = '';
    }
  },  
}
</script>
<style scoped> 
</style>