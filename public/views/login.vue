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
            console.log(this.msg);
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