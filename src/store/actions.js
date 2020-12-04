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
const updateTeamID = (context, payload) => {
    let database = firebase.database();
    const dbRef = database.ref(`/admin/${payload}`);
    dbRef.on('value', (snapshot) => {
        snapshot.forEach(function (data) {
            console.log("TEAM", data.key, data.val());
            context.commit('updateTeamID', data.key);
            context.dispatch('updateTeamName', data.val());
            context.dispatch('updateTeamMembers', data.key);
            context.dispatch('fetchNotes', data.key);
        });
    });
}

// get team name under admin asynchronously
const updateTeamName = (context, payload) => {
    context.commit('updateTeamName', payload);
}


// get team memebers list under admin asynchronously
const updateTeamMembers = (context, payload) => {
    let database = firebase.database();
    const dbRef = database.ref(`/participants/${payload}`);
    dbRef.on('value', (snapshot) => {
        context.commit('updateTeamMembers', snapshot.val());
    });
}

// notes under a team
const fetchNotes = (context, payload) => {
    let database = firebase.database();
    const dbRef = database.ref(`/notes/${payload}`);
    dbRef.on('value', (snapshot) => {
        context.commit('updateNotes', snapshot.val());
        context.dispatch('updatePendingInvites', payload);
    });
}

// add a note under a  team
const addNotes = (context, payload) => {
    let database = firebase.database();
    const dbRef = database.ref(`/notes/${payload.team}`);
    dbRef.push(payload.data).then(res => {
        context.commit('addNoteStatus', res);
    }).catch(err => {
        console.log(err);
    })
}

// set Bais
const setBias = (context, bias) => {
    context.commit('setBias', bias);
}

// set AI status
const setAIstatus = (context, status) => {
    context.commit('setAIStatus', status);
}

// invite user
const inviteUser = (context, data) => {
    console.log(data);
    let database = firebase.database();
    const dbRef = database.ref(`/invite`);
    dbRef.push(data).then(res => {
        context.dispatch('updatePendingInvites', data.team);
        console.error("res->", res);
    }).catch(err => {
        console.error("err->", err);
    });
}

// get all pending invites
const updatePendingInvites = (context, data) => {
    let database = firebase.database();
    let dbref = database.ref('/invite')
    dbref.orderByChild('team').equalTo(data).on('value', snapshot => {
        context.commit('updatePendingList', snapshot);
    });

}

// initialize app ui with latest data
const initApp = (context, user) => {
    context.commit('setLoginStatus', true);
    router.push('/home');
    context.dispatch('updateTeamID', user.uid);
    context.dispatch('updateUser', user);
}


export default {
    login,
    updateTeamID,
    updateTeamName,
    updateTeamMembers,
    updatePendingInvites,
    fetchNotes,
    addNotes,
    signout,
    checkIfLogin,
    updateUser,
    setBias,
    setAIstatus,
    inviteUser
};