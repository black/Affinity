<template>
    <div class="flex">
        <ul class="list-none flex flex-row justify-items-center align-middle p-4"> 
            <li class="flex flex-row rounded"  v-for="(member,key) in getMembers" :key="key" >
                <img v-bind:src="member.profile" alt="" class="border rounded-full items-center justify-center h-12 w-12 p-1 mx-2">
                <!-- <div class="flex flex-col flex-grow ml-4">
                    <div class="text-sm text-gray-500">{{member.email}}</div>
                    <div class="font-bold text-lg">{{member.name}}</div>
                </div> -->
            </li>
            <li>
                <Invite />
            </li> 
            <li class="flex flex-row rounded"  v-for="(member,key) in getInvites" :key="key" v-show="member.status==='pending'" v-bind:class="member.status==='pending'?'opacity-40':''">
                <img v-bind:src="member.profile" alt="" class="border rounded-full items-center justify-center h-12 w-12 p-1 mx-2">
                <!-- <div class="flex flex-col flex-grow ml-4">
                    <div class="text-sm text-gray-500">{{member.email}}</div>
                    <div class="font-bold text-lg">{{member.name}}</div>
                </div> --> 
            </li>
       </ul>    
    </div>
</template>
<script>
import Invite from '@/components/Invite.vue'
export default {  
    components:{
        Invite
    },
    computed:{ 
        getMembers(){ 
            return this.$store.getters.getTeamMembers;
        },
        getInvites(){   
            return this.$store.getters.getInvites;
        }
    }
}
</script>
<style scoped>
.Box{
    cursor: pointer;
}
</style>