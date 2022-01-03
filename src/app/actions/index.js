import { auth, provider } from '../../firebase';

export function signInAPI() {
  return (dispatch) => {
    auth
      .signInWithPopup(provider)
      .then((payload) => {
        console.log('Payload', payload);
      })
      .catch((errors) => alert('ERRORS', errors));
  };
}
