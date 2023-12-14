<!-- <template>
    <div>
        <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 class="mt-0 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign Up to create your account</h2>
            </div>
        
            <div class="mt-4 ">
                <form class="space-y-6" action="#" method="POST">
                <div >
                    <label for="email" class="text-sm font-medium leading-6 text-gray-900">Enter Email </label>
                    <div class="mt-2">
                    <input id="email" name="email" type="email" autocomplete="email" required="" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>
        
                <div>
                    <div class="flex items-center justify-between">
                    <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                    <div class="text-sm">
                        <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                    </div>
                    </div>
                    <div class="mt-2">
                    <input id="password" name="password" type="password" autocomplete="current-password" required="" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>
        
                <div>
                    <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                </div>
                </form>
        
                <p class="mt-10 text-center text-sm text-gray-500">
                Don't have account?
                {{ '  ' }}
                <a href="#" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500" @click="">Sign Up</a>
                </p>
            </div>
        </div>
    </div>
</template>
  
<script setup lang="ts">
    import { ref } from 'vue';
    import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
    import router from '../router';

    const email=ref('');
    const password=ref('');
    const errorMessage=ref('');
    const auth = getAuth();

    const signup = async() => {
        try{
            const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
            router.push('/home');
        }catch(error){
            errorMessage.value = error.message;
        }
    }

</script> -->


<template>
    <div>
      <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 class="mt-0 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign Up to create your account</h2>
        </div>
  
        <div class="mt-4">
          <form class="space-y-6">
            <div>
              <label for="email" class="text-sm font-medium leading-6 text-gray-900">Enter Email </label>
              <div class="mt-2">
                <input id="email" name="email" type="email" autocomplete="email" required="true" v-model="email" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
  
            <div>
              <div class="flex items-center justify-between">
                <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                <div class="text-sm">
                  <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                </div>
              </div>
              <div class="mt-2">
                <input id="password" name="password" type="password" autocomplete="current-password" required="true" v-model="password" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
  
            <div>
              <!-- Use type="button" to prevent form submission -->
              <button type="button" @click="signup" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign Up</button>
            </div>
          </form>
  
          <p class="mt-10 text-center text-sm text-gray-500">
            Have Account?
            {{ '  ' }}
            <router-link to="/Login" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Sign In</router-link>
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { auth } from '../firebase/authentication';
  import { createUserWithEmailAndPassword } from 'firebase/auth';
  import router from '../router';
  
  const email = ref<any>('');
  const password = ref<any>('');
  const errorMessage = ref<any>('');
  
  const signup = async () => {
    try{
      const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
    //   const user = userCredential.user;
      router.push('/Home');
    }
    catch (error) {
        const errorCode = error;
        if(errorCode === 'auth/email-already-in-use'){
            errorMessage.value = 'The email address is already in use';
            console.log(errorMessage);
        }
    }
  };
  </script>
  