<template>
    <div class="form-group-body">
        <textarea class="form-control dim" v-model="msg" id="example-textarea"></textarea>
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
.dim {
    width: 40vw;
    /* height: 100px;*/
}

.mdi {
    font-size: 16px;
}
</style>