new Vue({
    el: '#app',
    components: {
        'dash': httpVueLoader('../views/dash.vue'),
        'login': httpVueLoader('../views/login.vue')
    },
    data: function() {
        return {
            active: 'login'
        }
    }
});