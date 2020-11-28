// import firebase from "firebase/app";
import router from "@/router";


const login = () => {
    router.push('/home');
}



const updateProject = (context, payload) => {
    context.commit('projectName', payload);
}
const updateNotes = (context, payload) => {
    context.commit('updateNotes', payload);
}

export default {
    login,
    updateProject,
    updateNotes,
};