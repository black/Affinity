<template> 
    <div class="border-2 border-grey-100 rounded p-3 bg-white"> 
        <span class="text-xl">{{item.msg}}</span>
        <div class="flex flex-row">
            <span class="text-xs font-bold text-red-400">{{item.avatar}}</span>
        </div>
    </div> 
</template>
<script>
export default{
    props:['item'],    
}
</script>
<style scoped> 
</style>