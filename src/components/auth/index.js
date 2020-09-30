import React from "react";
import "./auth.css"
import socket from "../../socket";

const Auth = ({changeConnect}) => {
    return (
        <form className="auth-form" action="/rooms" method="POST">
            <input type="text" className="auth-input" name="roomId" placeholder="Room ID"/>
            <input type="text" className="auth-input" name="name" placeholder="Ваше имя"/>
            <button type="button" onClick={changeConnect} className="auth-button">Войти</button>
        </form>
    )
}

export default Auth