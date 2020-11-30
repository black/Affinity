const setAdmin = (state, data) => {
    state.admin = data;
}
const setLoginStatus = (state, data) => {
    console.log("committing status", data);
    state.loginStatus = data;
}

const updateUser = (state, data) => {
    state.user = JSON.parse(JSON.stringify(data));
    // same problem : https://stackoverflow.com/a/44051194/3789164
}

const updateTeam = (state, data) => {
    console.log("committing team name", data);
    state.teamName = data;
}

const updateTeamMembers = (state, data) => {
    console.log("committing team member", data);
    state.teamMembers = data;
}

const updateNotes = (state, data) => {
    console.log("committing new notes", data);
    state.notes = data;
}

const addNoteStatus = (state, data) => {
    state.notestatus = data;
}

const setBias = (state, data) => {
    state.bias = data;
}

const setAIStatus = (state, status) => {
    state.ai = status;
}

export default {
    setAdmin,
    setLoginStatus,
    updateNotes,
    updateTeam,
    updateTeamMembers,
    addNoteStatus,
    updateUser,
    setBias,
    setAIStatus
};