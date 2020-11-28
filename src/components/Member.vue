<template>
    <div class="flex">
        <ul v-for="(member,key) in getMembers" :key="key" class="list-none flex flex-row"> 
            <div class="flex flex-row rounded p-4">
                <img v-bind:src="member.profile" alt="" class="border rounded-full items-center justify-center h-12 w-12 p-1 mr-2">
                <!-- <div class="flex flex-col flex-grow ml-4">
                    <div class="text-sm text-gray-500">{{member.email}}</div>
                    <div class="font-bold text-lg">{{member.name}}</div>
                </div> -->
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