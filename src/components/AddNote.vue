<template>
    <div>
       {{title}}
        <input type="text" v-model="msg">
        <button v-on:click="addNote()">ADD</button>
        <h4>
          status: {{getNoteAddStatus}}
        </h4>
    </div> 
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