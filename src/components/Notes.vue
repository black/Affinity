<template>    
  <div  class="grid grid-cols-6 gap-2" > 
      <Note  v-bind:item="item" v-for="(item,key) in getNotes" :key="key" />  
  </div> 
</template>
<script>

 import Note from "@/components/Note.vue"
export default{ 
  components:{
    Note
  },
  data() {
    return {  
       title:'Notes List', 
    }
  },  
  computed: {
    getNotes() { 
      return this.$store.getters.getNotes;
    },
  },   
}
</script>
<style scoped> 
</style>