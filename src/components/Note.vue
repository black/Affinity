<template> 
    <div class="border-2 border-grey-100 rounded p-3 bg-white"> 
        <span class="text-xl">{{item.msg}}</span>
        <div class="flex flex-row">
            <span class="text-xs font-bold text-red-400">{{getBias?(item.user||'username'):item.avatar}}</span>
        </div>
    </div> 
</template>
<script>
export default{
    props:['item'],     
    computed:{
         getBias(){
          return this.$store.getters.getBias;
      }
    }
}
</script>
<style scoped> 
</style>