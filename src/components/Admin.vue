<template>
    <div class="p-1">
        <div class="flex flex-row align-middle">
            <img v-bind:src="getAdmin.photoURL" alt="" class="border rounded-full items-center justify-center h-12 w-12 p-1 mr-2">
            <div class="flex flex-col justify-center">
                <span class="font-bold text p-0 m-0">{{getAdmin.displayName}}</span> 
                <span class="text-xs text-gray-500">{{getAdmin.email}}</span>
            </div> 
        </div>
        <button class="hidden" v-on:click="googleSignOut()">LogOut</button> 
    </div>
</template>
<script>
export default { 
    data: function() {
        return {
            title: "teams",
            online:"14" 
        }
    },
    methods: {
        googleSignOut() {
             this.$store.dispatch("signout");
        }
    },
    computed: {
        getAdmin() {
            return this.$store.getters.getUser;
        }
    }
}
</script>
<style scoped>
.Box{
    cursor: pointer;
}
</style>