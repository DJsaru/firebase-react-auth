import { auth , provider} from "../Firebase";
import { signInWithPopup } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";

// const auth = getAuth(app);
// const provider = new GoogleAuthProvider();

function LoginPage ({setIsAuth}){
     const navigate = useNavigate();

        const SignUpG = () => {
            signInWithPopup(auth, provider).then((result) => {
                localStorage.setItem("isAuths", true);
                setIsAuth(true);
                console.log("HIIII")
                navigate("/");

            })
          
        }

   
    return(
        <div className="loginPage">
            <h1>Login With Google Acc</h1>
            <button className="login-with-google-btn" onClick={SignUpG}>Google</button>
        </div>
    )
}

export default LoginPage;