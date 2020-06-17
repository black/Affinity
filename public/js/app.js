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
    },
    methods: {
        checkIfLogin() {
            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    this.active = 'dash';
                    store.dispatch('updateAdmin');
                } else {
                    this.active = 'login';
                }
            });
        }
    },
    mounted: function() {
    	this.checkIfLogin();
    }
});