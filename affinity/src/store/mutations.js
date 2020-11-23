const setAdmin = (state, data) => {
    state.admin = data;
}
const setAuthState = (state, data) => {
    state.authenticated = data;
}

const updateNotes = (state, data) => {
    state.notes.push(data);
}

export default {
    setAdmin,
    setAuthState,
    updateNotes
};