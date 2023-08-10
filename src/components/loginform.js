import React, { useState }  from "react";
import "./loginform.css"


const LoginForm = () => {


    const [popupStyle, showPopup] = useState("hide")

    const popup = () => {
    showPopup("login-popup")
    setTimeout(() => showPopup("hide"),3000)
    }

    return (
        <div className="cover">
            <input type="text" placeholder="Username Or Email"/>
            <input type="password" placeholder="Password" />
            <h3 >User Type</h3>
            <input type="radio" id="Admin" name="fav_language" value="admin"/>
            <label for="html">Admin</label>
            <input type="radio" id="Moderator" name="fav_language" value="moderator"/>
            <label for="css">Moderator</label>            
            <input type="radio" id="Viewer" name="fav_language" value="viewer" />
            <label for="javascript">Viewer</label>
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

export default LoginForm