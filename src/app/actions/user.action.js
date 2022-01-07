import { auth, provider } from '../../firebase';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';

export const loginActionTypes = {
  SET_USER: '[USER] SET_USER',
  SIGNOUT_USER: '[USER] SIGNOUT_USER',
};

export const loginUserAction = (user) => ({
  type: loginActionTypes.SET_USER,
  payload: user,
});

export const logOutAction = () =>({
  type: loginActionTypes.SIGNOUT_USER
})

/**
 * Sign Out from Firebase
 */
export const logOutApi = () =>{
  return (dispatch)=>{
    const auth = getAuth();
    signOut(auth).then(() => {
      // Sign-out successful.
      dispatch(logOutAction());
    }).catch((error) => {
      // An error happened.
    });
  }
}

/**
 * SignIn from Firebase
 * @returns Firebase Auth Object
 */
export const signInAPI = () => {
  return (dispatch) => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log('User Auth::', result);
        dispatch(loginUserAction(result.user));
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;

        // // The signed-in user info.
        // const user = result.user;
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
};
