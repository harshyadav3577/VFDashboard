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
            <input type="text" placeholder="username"/>
            <input type="password" placeholder="password" />

            <div className="login-btn"> login</div>

            <p className="text"> or login using </p>
            <div className="alt-login">
                <div className="facebook">   </div>
                <div className="google">   </div>
            </div>

        </div>
    )
}

export default LoginFrom