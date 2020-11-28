<template>
    <div class="grid grid-cols-6 gap-4 bg-red p-5" >    
        <div  v-for="(item,key) in getNotes" :key="key">
          <Note v-bind:item="item" /> 
        </div>
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