<template>
    <div class="d-flex flex-items-start">
        <div class="d-flex flex-justify-center">
            <img class="CircleBadge avatar avatar-small mr-3" alt="jonrohan" v-bind:src="getAdmin.photoURL" width="32" height="32" />
            <div>
                <span>{{getAdmin.displayName}}</span>
                <span class="f6 d-block">{{getAdmin.email}}</span>
            </div>
        </div>
        <div class="px-6">
            <div class="AvatarStack AvatarStack--five-plus ">
                <div class="AvatarStack-body tooltipped tooltipped-se tooltipped-align-left-1">
                    <img v-for="user in userlist" class="CircleBadge avatar avatar-lg" v-bind:src="user.src" width="32" height="32" />
                </div>
            </div>
        </div>
</template>
<script>
module.exports = {
    components: {
        'user': httpVueLoader('../views/user.vue')
    },
    data: function() {
        return {
            title: "teams",
            userlist: [{
                src: 'https://github.com/jonrohan.png?v=3&s=96'
            }, {
                src: 'https://github.com/jonrohan.png?v=3&s=96'
            }, {
                src: 'https://github.com/jonrohan.png?v=3&s=96'
            }]
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