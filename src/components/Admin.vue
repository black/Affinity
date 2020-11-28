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