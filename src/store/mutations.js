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


//--------------------------------------

const updateTeamList = (state, payload) => {
    state.teamList = JSON.parse(JSON.stringify(payload));
}

const updateTeamId = (state, payload) => {
    state.currTeamId = payload;
}

const updateTeamInfo = (state, payload) => {
    state.currTeamInfo = payload;
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
    updateTeamList,
    updateTeamId,
    updateTeamInfo,
    updateNotes,
    updateTeamMembers,
    updatePendingList,
    addNoteStatus,
    updateUser,
    setBias,
    setAIStatus
};