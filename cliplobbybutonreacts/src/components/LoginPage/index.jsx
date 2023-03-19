import './LoginPage.css'
import { GoogleLogin,  } from '@react-oauth/google';


export default function LoginPage({setLogin}){
    
async function dados(credential){
    const id = credential.credential
    const dado = await fetch(`https://oauth2.googleapis.com/tokeninfo?id_token=${id}`)
    const infos = await dado.json()

    console.log(infos)
    setLogin(infos.email)

}
    return(
        <GoogleLogin
        onSuccess={credentialResponse => {
          dados(credentialResponse)
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />
    )
}