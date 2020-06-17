<template>
    <div>
        <team></team>
        <board></board>
        <msg></msg>
    </div>
</template>
<script>
module.exports = {
    components: {
        'team': httpVueLoader('../views/team.vue'),
        'board': httpVueLoader('../views/board.vue'),
        'msg': httpVueLoader('../views/message.vue')
    } 
}
</script>
<style scoped>
</style>