import React, { useState } from "react"
import socket from "../../socket"
import {Context} from "../../reducer"

const SendMessages = () => {

    const {state,dispath} = React.useContext(Context)
    const [text,setText] = useState("")

    function onSendMessage(e){
        e.preventDefault();
        dispath({
            type :"New_message",
            payload : ({text, user: state.username})
        })
        socket.emit("send-message", {text, user: state.username })
        return false
    }

    function onSetText(e){
        setText(e.target.value)
    }

    return (
        <form action="/message" method="POST" className="send-form" onSubmit={(e) => onSendMessage(e)}>
            <input type="text" placeholder="Введите ваше сообщение" name="message" onInput={(e) => onSetText(e)}/>
            <button type="submit">Отправить</button>
        </form>
        )
}

export default SendMessages