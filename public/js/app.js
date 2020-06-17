new Vue({
    el: '#app',
    components: {
        'team': httpVueLoader('../views/team.vue'),
        'board': httpVueLoader('../views/board.vue'),
        'msg': httpVueLoader('../views/message.vue')
    }
});