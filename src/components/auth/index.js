import React, { useContext, useState } from "react";
import "./auth.css"
import socket from "../../socket";
import {Context} from "../../reducer"

const Auth = () => {
    const {state,dispath} = useContext(Context)
    const [user, setUser] = useState("User-1")
    const [roomId, setRoomId] = useState("testRoom")

    const onEnter = async (e) => {
        e.preventDefault()

        const data = {
            username : user,
            roomName : roomId,
            id : socket.id
        }
        
        const result = await fetch("/rooms",{
            method : "POST",
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify(data)
        })

        if (!result.ok){
           alert("Пользователь уже находится в чате")
           return
        }

        dispath({
            type: "Connect",
            payload : {
                username : user,
                roomName : roomId
             }
        })

        socket.emit("new-user",{username : user, socketId : socket.id, roomName : roomId})
        return false
    }

    const onUserType = (e) =>{
        setUser(e.target.value)
    }

    const onRoomType = (e) =>{
        setRoomId(e.target.value)
    }

    return (
        <form className="auth-form" action="/rooms" onSubmit={(e) => onEnter(e)} method="POST">
            <input type="text" className="auth-input" name="roomId" onInput={(e) => onRoomType(e)} placeholder="Room ID"/>
            <input type="text" className="auth-input" name="name"  onInput={(e) => onUserType(e)} placeholder="Ваше имя"/>
            <button type="button" type="submit" className="auth-button">Войти </button>
        </form>
    )
}

export default Auth