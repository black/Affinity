<template>
    <div class="height-full bg-gray">
        <nav>
            <div class="Subhead-heading">L I A I S E</div>
        </nav>
        <wall></wall>
        <div class="position-fixed bottom-0 width-full">
            <div class="d-flex flex-justify-around flex-items-center">
                <div>
                    <div class="f6">TEAM</div>
                    <div class="Subhead-heading">IDEO BOARD</div>
                </div>
                <msg></msg>
                <team></team>
            </div>
        </div>
    </div>
</template>
<script>
module.exports = {
    components: {
        'team': httpVueLoader('../views/team.vue'),
        'wall': httpVueLoader('../views/wall.vue'),
        'msg': httpVueLoader('../views/message.vue')
    }
}
</script>
<style scoped>
</style>