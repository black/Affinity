<template>
  <div class="flex flex-col justify-stretch px-3 py-3">
    <h3 class="font-bold text-blue-600 text-2xl">{{title}}</h3>
    <span class="text-xs uppercase text-gray-400">{{team.status}}</span>
  </div>
</template> 
<script>

// @ is an alias to /src
// import Notes from "@/components/Notes.vue" 

export default { 
  props:['team','status'],
  data(){
    return{
      title:'AFFINITY',
    }
  }, 
};
</script>

<style scoped>
 
</style>
