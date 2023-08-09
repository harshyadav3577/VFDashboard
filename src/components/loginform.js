import React, { useState }  from "react";
import "./loginform.css"

const LoginFrom = () => {


    const [popupStyle, showPopup] = useState("hide")

    const popup = () => {
    showPopup("login-popup")
    setTimeout(() => showPopup("hide"),3000)
    }

    return (
        <div className="cover">
            <input type="text" placeholder="Username Or Email"/>
            <input type="password" placeholder="Password" />

            <div class="btnDiv">
                <button class="reg-btn" type="submit">Register</button>
                <button class="login-btn" type="submit">Login</button>
            </div>
            <a className="forPass" href='...'>Forgot Password?</a>
            <div className="alt-login">
                <div className="facebook">   </div>
                <div className="google">   </div>
            </div>

        </div>
    )
}

export default LoginFrom