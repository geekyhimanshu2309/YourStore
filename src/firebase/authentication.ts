import { initializeApp } from "firebase/app";
import {getAuth, onAuthStateChanged,setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import router from "../router";
// import useUserStore from '../store/user';

const firebaseConfig = {
  apiKey: "AIzaSyAClD4kdfE8nw05h-r9vd0CNYE8dQ1EYOg",
  authDomain: "shopping-14801.firebaseapp.com",
  projectId: "shopping-14801",
  storageBucket: "shopping-14801.appspot.com",
  messagingSenderId: "110339324069",
  appId: "1:110339324069:web:877847d3cf0219eb03b54c",
  measurementId: "G-V7ETL6D3C0"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

onAuthStateChanged(auth, async(user) => {
  const currentUser = user;
  if(user){
    console.log('User is signed in',currentUser);
    // router.push('/Home');
  }else{
    console.log('User is signed out');
  }
});
export {app, auth};

// onAuthStateChanged(auth, async (user) => {
//   const userStore = useUserStore();
//   const xHasuraUserId = (await user?.getIdTokenResult())?.claims[
//     "https://hasura.io/jwt/claims"
//   ]["x-hasura-user-id"];
//   localStorage.setItem("xHasuraUserId",xHasuraUserId);
//   userStore.setXHasuraUserId(xHasuraUserId);
//   userStore.setUser(user);
//   userStore.setLoadingUser(false);
//   if (!user && router.currentRoute.value.fullPath !== "/register") {
//     router.push("/login");
//   }
// });
