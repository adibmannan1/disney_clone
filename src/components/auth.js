import { auth, googleProvider } from "../config/firebase";
import { signInWithPopup, signOut } from "firebase/auth";

export const Auth = () => {
    const signInWithGoogle = async () => {
        try{
            await signInWithPopup(auth, googleProvider)
        }catch(err){
            console.error(err)
        }
    };
    const logOut= async () => {
        try{
            await signOut(auth)
        }catch(err){
            console.error(err)
        }
    };
    return (
        <div className="auth">
            <button className="sign signIn" onClick={signInWithGoogle}>Sign In</button>
            <button className="sign signOut" onClick={logOut}>Sign Out</button>
        </div>
    )
}