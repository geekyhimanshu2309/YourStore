import {defineStore} from "pinia";
import {ref} from "vue";

export const useUserStore = defineStore("userStore",()=>{
    const user = ref<any>(null);
    const userIdToken = ref<any>();
    const FirebaseUserId = ref<any>();

    function setUser(whyareweusingthis: any){
        user.value = whyareweusingthis;
    }

    function setUserIdToken(token: any){
        userIdToken.value = token;
    }
    function setFirebaseUserId(id: any){
        FirebaseUserId.value = id;
    }

    return {
        user,
        userIdToken,
        FirebaseUserId,
        setUser,
        setUserIdToken,
        setFirebaseUserId,
    };
});

export default useUserStore;