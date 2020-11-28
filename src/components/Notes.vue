<template>
    <div class="grid grid-cols-6 overflow-y-scroll">
        <div v-for="(item,key) in getNotes" :key="key" class="flex border border-red-300 bg-red-100 rounded p-2.5 m-1"> 
            <div class="flex flex-col"> 
              <span class="text-xl">{{item.msg}}</span>
              <div class="flex flex-row">
                <span class="text-xs font-bold text-red-400">{{item.avatar}}</span>
              </div>
            </div>
        </div> 
    </div> 
</template>
<script>
export default{ 
  data() {
    return {  
       title:'', 
    }
  },  
  computed: {
    getNotes() { 
      return this.$store.getters.getNotes;
    }
  },   
}
</script>
<style scoped> 
</style>