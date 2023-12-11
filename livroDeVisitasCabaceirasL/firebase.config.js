// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDE4u5QmirKSFzBPok7eLtNdw0_f2h0Ei8",
  authDomain: "livro-visitas-firebase.firebaseapp.com",
  projectId: "livro-visitas-firebase",
  storageBucket: "livro-visitas-firebase.appspot.com",
  messagingSenderId: "145527021707",
  appId: "1:145527021707:web:247055247923156c27748e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app