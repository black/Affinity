const setAdmin = (state, data) => {
    state.admin = data;
}
const setLoginStatus = (state, data) => {
    state.loginStatus = data;
}

const updateUser = (state, data) => {
    state.user = JSON.parse(JSON.stringify(data));
    // same problem : https://stackoverflow.com/a/44051194/3789164
}

const updateTeamID = (state, uid) => {
    state.teamUID = uid;
}

const updateTeamName = (state, data) => {
    state.teamName = data;
}

const updateTeamMembers = (state, data) => {
    state.teamMembers = data;
}

const updateNotes = (state, data) => {
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

const updatePendingList = (state, list) => {
    state.pendingInvites = JSON.parse(JSON.stringify(list));
}

export default {
    setAdmin,
    setLoginStatus,
    updateTeamID,
    updateTeamName,
    updateNotes,
    updateTeamMembers,
    updatePendingList,
    addNoteStatus,
    updateUser,
    setBias,
    setAIStatus
};