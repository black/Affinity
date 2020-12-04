 const getTeamID = (state) => {
     return state.teamUID;
 }

 const getTeamName = (state) => {
     return state.teamName;
 }

 const getTeamMembers = (state) => {
     return state.teamMembers;
 }

 const getInvites = (state) => {
     return state.pendingInvites;
 }

 const getUser = (state) => {
     return state.user;
 }
 const getLoginStatus = (state) => {
     return state.loginStatus;
 }

 const getNotes = (state) => {
     return state.notes;
 }

 const getNoteAddStatus = (state) => {
     return state.notestatus;
 }

 const getBias = (state) => {
     return state.bias;
 }

 const getAIStatus = (state) => {
     return state.ai;
 }

 export default {
     getTeamID,
     getTeamName,
     getTeamMembers,
     getInvites,
     getNotes,
     getLoginStatus,
     getNoteAddStatus,
     getUser,
     getBias,
     getAIStatus
 }