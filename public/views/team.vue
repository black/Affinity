<template>
    <ul>
        <li>
            <user v-bind:imgsrc="getAdmin.photoURL"></user>
        </li>
        <li v-for="user in userlist">
            <user v-bind:imgsrc="'https://github.com/jonrohan.png?v=3&s=96'"></user>
        </li>
</template>
<script>
module.exports = {
    components: {
        'user': httpVueLoader('../views/user.vue')
    },
    data: function() {
        return {
            title: "teams",
            userlist: []
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
ul {
    padding: 0;
    margin: 0;
    list-style: none;
}

li {
    margin: 10px;
    border-radius: 5px;
    display: grid;
    grid-template-columns: 1fr;
}
</style>