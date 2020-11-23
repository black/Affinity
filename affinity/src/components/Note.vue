<template>
    <div>
       {{title}}
        <ul>
          <li v-for="item in getNotes" :key="item.message">{{item}}</li>
        </ul>
    </div> 
</template>
<script>
module.exports = { 
  data() {
    return {  
       title:'Notes List', 
    }
  }, 
  methods: {
    // setTheme(theme) {
    //   this.$store.dispatch("setTheme", theme);
    // },
  },
  computed: {
    getNotes() {
      console.log('NotesList',this.$store.getters.getNotes);
      return this.$store.getters.getNotes;
    },
  },   
}
</script>
<style scoped> 
</style>