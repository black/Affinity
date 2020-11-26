<template>
    <div>
       {{title}}
        <ul>
          <li v-for="(item,key) in getNotes" :key="key">
            <h3>{{item.msg}} </h3>
            <h6><span>{{item.avatar}} : {{key}}</span></h6>
          </li>
        </ul>
    </div> 
</template>
<script>
export default{ 
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