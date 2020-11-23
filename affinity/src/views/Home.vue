<template>
  <div class="home">
    {{title}}
    <Note />
    <AddNote/>
    {{getProjectName}}
  </div>
</template>

<script>
// @ is an alias to /src
import Note from "@/components/Note.vue";
import AddNote from "@/components/AddNote.vue";

export default {
   components: {
    Note,
    AddNote
  },
  data(){
    return{
      title:'Home',
    }
  },
  computed:{
    getProjectName() {
      console.log('NotesList',this.$store.getters.getProjectName);
      return this.$store.getters.getProjectName;
    },
  }
};
</script>

<style scoped>
.home{
  padding:5%;
}
</style>
