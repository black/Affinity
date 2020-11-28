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

 export default {
     getTeamName,
     getTeamMembers,
     getNotes,
     getLoginStatus,
     getNoteAddStatus,
     getUser
 }