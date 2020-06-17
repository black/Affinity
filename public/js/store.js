const store = new Vuex.Store({
    state: {
        menu: {
            sideMenu: 'dashboard',
            viewToggle: 'list'
        },
        theme: 'default',
        admin: '',
        dashboard: {
            userlist: [],
            selected: {
                userId: undefined,
                sessionList: [],
                session: {
                    id: undefined,
                    data: undefined
                },
            }
        },
        feature: {
            userlist: []
        }
    },
    mutations: {
        /*-- ui state --*/
        updateSideMenu(state, payload) {
            state.menu.sideMenu = payload.toLowerCase();
        },
        updateViewToggle(state, payload) {
            state.menu.viewToggle = payload.toLowerCase();
        },
        updateTheme(state, payload) {
            state.theme = payload;
        },
        /*-- admin state --*/
        updateAdmin(state, payload) { 
            state.admin = payload;
        },
        /*-- data state --*/
        updateUserList(state, payload) {
            state.dashboard.userlist = payload;
        },
        updateSelectedUser(state, payload) {
            state.dashboard.selected.userId = payload;
            store.dispatch('updateSessionList', payload);
        },
        updateSessionList(state, payload) {
            state.dashboard.selected.sessionList = payload;
        },
        updateSelectedSessionID(state, payload) {
            state.dashboard.selected.session.id = payload;
        },
        updateSelectedSessionData(state, payload) {
            state.dashboard.selected.session.data = payload;
        },
        updateTheme(state, payload) {
            state.theme = payload;
        },
        updateAllUserList(state, payload) { 
            state.feature.userlist = payload;
        }
    },
    actions: {
        /*-- admin state --*/
        updateAdmin() {
            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    store.commit('updateAdmin', user);
                    store.dispatch('updateUserList', user.uid);
                    store.dispatch('updateAllUserList', user.uid);
                } else {
                    console.log("Login Please...");
                }
            });
        },
        /*-- dashboard data state --*/
        updateUserList(state, payload) {
            let database = firebase.database();
            const dbRef = database.ref('/doctors/' + payload + "/patients/");
            dbRef.on('value', (snapshot) => {
                store.commit('updateUserList', snapshot.val());
            });
        },
        updateSessionList(state, payload) {
            let database = firebase.database();
            const dbRef = database.ref('/users/' + payload + '/data/');
            dbRef.on('value', (data) => {
                store.commit('updateSessionList', data.val());
            });
        },
        updateSelectedSessionID(state, payload) {
            store.commit('updateSelectedSessionID', payload);
        },
        updateSelectedSessionData(state, payload) {
            store.commit('updateSelectedSessionData', payload);
        },
        /*-- feature data state --*/
        updateAllUserList(state, payload) { 
            let database = firebase.database();
            const dbRef = database.ref('/doctors/' + payload + "/invited/");
            dbRef.on('value', (snapshot) => { 
                store.commit('updateAllUserList', snapshot.val());
            });
        }

    },
    getters: {
        /*-- ui state --*/
        getSideMenu(state) {
            return state.menu.sideMenu;
        },
        getViewToggle(state) {
            return state.menu.viewToggle;
        },
        getTheme(state) {
            return state.theme;
        },
        /*-- admin state --*/
        getAdmin(state) { 
            return state.admin;
        },
        /*-- data state --*/
        getUserList(state) {
            return state.dashboard.userlist;
        },
        getSelectedUser(state) {
            return state.dashboard.selected.userId;
        },
        getSessionList(state) {
            return state.dashboard.selected.sessionList;
        },
        getSelectedSessionID(state) {
            return state.dashboard.selected.session.id;
        },
        getSelectedSessionData(state) {
            return state.dashboard.selected.session.data;
        },
        /*-- feature data state --*/
        getAllUserList(state) {
            return state.feature.userlist;
        }
    }
});