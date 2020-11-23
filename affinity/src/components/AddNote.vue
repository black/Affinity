<template>
    <div>
       {{title}}
        <input type="text" v-model="msg">
        <button v-on:click="addNote()">ADD</button>
    </div> 
</template>
<script>
module.exports = { 
  data() {
    return {  
       title:'Add node', 
        msg:''
    }
  }, 
  methods: { 
    addNote(){ 
        let note = {
            msg: this.msg,
            avatar:'wolf'
        };
        this.$store.dispatch("updateNotes",note);
    }
  },  
}
</script>
<style scoped> 
</style>