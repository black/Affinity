<template>
    <div class="Box Box--condensed border-0">
        <div class="Box-header border-0 d-flex flex-items-center">
            <img class="CircleBadge avatar avatar-small mr-3" alt="jonrohan" v-bind:src="getAdmin.photoURL" width="32" height="32" />
            <div v-on:click="googleSignOut()">
                <span class="h4 d-block">{{getAdmin.displayName}}</span>
                <span class="f6 d-block">{{getAdmin.email}}</span>
            </div>
            <span class="State ml-3">+{{online}}</span> 
        </div>
    </div>
</template>
<script>
module.exports = { 
    data: function() {
        return {
            title: "teams",
            online:"14" 
        }
    },
    methods: {
        googleSignOut() {
            firebase.auth().signOut();
            location.reload();
        }
    },
    computed: {
        getAdmin() {
            return store.getters.getAdmin;
        }
    }
}
</script>
<style scoped>
.Box{
    cursor: pointer;
}
</style>