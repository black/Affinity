import firebase from "firebase/app";
import router from "@/router";

// init login with popup
const login = (context) => {
    let authProvider = new firebase.auth.GoogleAuthProvider;
    firebase.auth().signInWithPopup(authProvider)
        .then((res) => {
            initApp(context, res.user);
        }).catch((err) => {
            console.log('err:', err);
            context.commit('setLoginStatus', false);
        });
}

// check if user is still logged in on refresh
const checkIfLogin = (context) => {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            initApp(context, user);
        } else {
            this.active = 'login';
        }
    });
}

// sign out asynchronously
const signout = (context) => {
    firebase.auth().signOut();
    context.commit('setLoginStatus', false);
    router.push('/');
}


// get user info
const updateUser = (context, payload) => {
    console.log(payload);
    context.commit('updateUser', payload);
}

// get team name under admin asynchronously
const updateTeam = (context, payload) => {
    let database = firebase.database();
    const dbRef = database.ref(`/admin/${payload}/teams`);
    dbRef.on('value', (snapshot) => {
        snapshot.forEach(function (data) {
            console.log(data.key, data.val());
            context.commit('updateTeam', data.key);
            context.dispatch('fetchNotes', data.key);
        });
    });
}

// notes under a team
const fetchNotes = (context, payload) => {
    let database = firebase.database();
    const dbRef = database.ref(`/notes/${payload}`);
    dbRef.on('value', (snapshot) => {
        console.log("Notes", snapshot.val());
        context.commit('updateNotes', snapshot.val());
    });
}

// add a note under a  team
const addNotes = (context, payload) => {
    let database = firebase.database();
    const dbRef = database.ref(`/notes/${payload.team}`);
    dbRef.push(payload.data);
    context.commit('addNoteStatus', 'success');
}

const initApp = (context, user) => {
    context.commit('setLoginStatus', true);
    router.push('/home');
    context.dispatch('updateTeam', user.uid);
    context.dispatch('updateUser', user);
}


export default {
    login,
    updateTeam,
    addNotes,
    signout,
    checkIfLogin,
    fetchNotes,
    updateUser
};