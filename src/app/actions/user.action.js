import { auth, provider } from '../../firebase';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

export const loginActionTypes = {
  SET_USER: '[USER] SET_USER',
};

export const loginUser = (user) => ({
  type: loginActionTypes.SET_USER,
  payload: user,
});

export const signInAPI = () => {
  return (dispatch) => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log('User Auth::', result);
        dispatch(loginUser(result.user));
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