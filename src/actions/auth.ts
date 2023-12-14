// import {
//     browserLocalPersistence,
//     createUserWithEmailAndPassword,
//     setPersistence,
//     signOut,
//     signInWithEmailAndPassword
// } from "firebase/auth";
// import { auth } from "../firebase/authentication";

// export const signUp = async(
//     email: string,
//     password: string,
// ) => {
//     try {
//         setPersistence(auth, browserLocalPersistence)
//             .then(async() => {
//                 await createUserWithEmailAndPassword(auth,email,password);
//             })
//             .catch((err) => {
//                 throw new Error("Error registering user", {cause: err});
//             });
//     }catch(err){
//         alert("Error in signing up");
//     }
// };

// export const signIn = async() => {

// };