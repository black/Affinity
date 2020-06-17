<template>
    <div class="input-group bg-gray-dark p-3 mt-n3 ml-n3 mr-n3">
        <input v-model="msg" class="form-control input-dark input" type="text" placeholder="Dark input small" aria-label="Dark input">
        <span class="input-group-button">
            <button class="btn" type="button" v-on:click="sendNote()">
                <span class="mdi mdi-android-messages"></span>
            </button>
        </span>
    </div>
</template>
<script>
module.exports = {
    data: function() {
        return {
            msg: ""
        }
    },
    methods: {
        sendNote() {
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