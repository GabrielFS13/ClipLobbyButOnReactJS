import './LoginPage.css'
import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, GithubAuthProvider, getAdditionalUserInfo, OAuthProvider  } from "firebase/auth";
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGa5gRAgn8NfwzXfdrXYmfdHd_DHzP4tQ",
  authDomain: "cliplobby-6ab41.firebaseapp.com",
  projectId: "cliplobby-6ab41",
  storageBucket: "cliplobby-6ab41.appspot.com",
  messagingSenderId: "44759321990",
  appId: "1:44759321990:web:8c23a4dfa6be27286e3007",
  measurementId: "G-7NFERQY1GK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



export default function LoginPage({setLogin, logado}){

  const auth = getAuth();
  const faceProvider = new FacebookAuthProvider();
  const googleProvider = new GoogleAuthProvider();
  const gitProvider = new GithubAuthProvider();
  const microsoftProvider = new OAuthProvider('microsoft.com');

  function logwithGoogle(){
    signInWithPopup(auth, googleProvider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log(user)
    setLogin({user: user.displayName, email: user.email, photo: user.photoURL})
    console.log(getAdditionalUserInfo(result))

  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
  }

  function logwithFacebook(){

    signInWithPopup(auth, faceProvider)
    .then((result) => {
      // The signed-in user info.
      const user = result.user;

      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;

      setLogin({user: user.displayName, email: user.email, photo: user.photoURL})

    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = FacebookAuthProvider.credentialFromError(error);

      console.log(credential)
    });

  }

  function logwithGithub(){
    signInWithPopup(auth, gitProvider)
  .then((result) => {
    // This gives you a GitHub Access Token. You can use it to access the GitHub API.
    const credential = GithubAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    // The signed-in user info.
    const user = result.user;
    
    console.log(user)
    const userData = getAdditionalUserInfo(result)
    console.log()
    setLogin({user: userData.username, email: user.email, photo: user.photoURL})

  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GithubAuthProvider.credentialFromError(error);
    // ...
  });
  }

  function logwithMicrosoft(){
    signInWithPopup(auth, microsoftProvider)
    .then((result) => {
      // User is signed in.
      // IdP data available in result.additionalUserInfo.profile.

      // Get the OAuth access token and ID Token
      const credential = OAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;
      const idToken = credential.idToken;
      const userData = getAdditionalUserInfo(result)

      console.log(userData)

      setLogin({user: userData.profile.displayName, email: userData.profile.userPrincipalName, photo: "placeholder"})

    })
    .catch((error) => {
      // Handle error.
      console.log(error)
    });

  }

    return(
        <div>
          {logado ? 
          "Você já está logado!"
          :
          <div>
            <button onClick={() => logwithGoogle()}>Logar Com Google</button>
            <button onClick={() => logwithFacebook()}>Logar Com Facebook</button>  
            <button onClick={() => logwithGithub()}>Logar Com Github</button>  
            <button onClick={() => logwithMicrosoft()}>Logar Com Microsoft</button>  

          </div>

        }
        </div>
    )
}