 let getTeamName = (state) => {
     return state.teamName;
 }

 let getTeamMembers = (state) => {
     return state.teamMembers;
 }

 let getUser = (state) => {
     return state.user;
 }
 let getLoginStatus = (state) => {
     return state.loginStatus;
 }

 let getNotes = (state) => {
     return state.notes;
 }

 let getNoteAddStatus = (state) => {
     return state.notestatus;
 }

 let getBias = (state) => {
     return state.bias;
 }

 let getAIStatus = (state) => {
     return state.ai;
 }

 export default {
     getTeamName,
     getTeamMembers,
     getNotes,
     getLoginStatus,
     getNoteAddStatus,
     getUser,
     getBias,
     getAIStatus
 }