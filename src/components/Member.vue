<template>
    <div class="flex">
        <ul v-for="(member,key) in getMembers" :key="key"> 
            <div class="flex flex-row rounded p-4">
            <div class="rounded-full items-center justify-center flex-shrink-0 h-12 w-12 bg-blue-100 text-blue-500">
                <img v-bind:src="member.profile" alt="">
            </div>
            <div class="flex flex-col flex-grow ml-4">
                <div class="text-sm text-gray-500">{{member.email}}</div>
                <div class="font-bold text-lg">{{member.name}}</div>
            </div>
            </div>
       </ul>    
    </div>
</template>
<script>
export default {  
    computed:{ 
        getMembers(){
            console.log("Teams Members",this.$store.getters.getTeamMembers);
            return this.$store.getters.getTeamMembers;
        }
    }
}
</script>
<style scoped>
.Box{
    cursor: pointer;
}
</style>