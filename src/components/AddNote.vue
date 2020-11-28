<template>
<<<<<<< HEAD
<<<<<<< HEAD
      <div class="flex bg-yellow-200">
          <input v-model="msg" class="flex-1 rounded-l py-3 flex-stretch border text-gray-800 border-gray-200 px-5 bg-white" placeholder="Your idea here..."/>
          <button v-on:click="addNote()" class="rounded-r bg-blue-400 text-white font-bold px-5 uppercase">ADD</button>
      </div>
=======
=======
>>>>>>> parent of 43a83b0... started stlying with tailwindcss
    <div>
       {{title}}
        <input type="text" v-model="msg">
        <button v-on:click="addNote()">ADD</button>
        <h4>
          status: {{getNoteAddStatus}}
        </h4>
    </div> 
<<<<<<< HEAD
>>>>>>> parent of 43a83b0... started stlying with tailwindcss
=======
>>>>>>> parent of 43a83b0... started stlying with tailwindcss
</template>
<script>
export default { 
  props:['team'],
  data() {
    return {  
       title:'Add node',
       msg:'', 
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
        console.log({note},this.team);
        this.msg = '';
    }
  },  
}
</script>
<style scoped> 
</style>