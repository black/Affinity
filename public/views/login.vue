<template>
    <div>
        {{title}}
        <button class="btn" type="button" v-on:click="login()">
            <span class="mdi mdi-account-arrow-right-outline"></span>
        </button>
    </div>
</template>
<script>
module.exports = {
    data: function() {
        return {
            title: "Login"
        }
    },
    methods: {
        login() {
            let authProvider = new firebase.auth.GoogleAuthProvider;
            firebase.auth().signInWithPopup(authProvider)
                .then((res) => {
                    console.log(res);
                }).catch((err) => {
                    console.log('err:', err);
                });
        }
    }
}
</script>
<style scoped>
.input-group {
    width: 400px;
}

.mdi {
    font-size: 16px;
}
</style>