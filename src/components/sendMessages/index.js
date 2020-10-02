import React, { useState } from "react"
import socket from "../../socket"
import {Context} from "../../reducer"
import Picker from "emoji-picker-react";

const SendMessages = () => {

    const {state,dispath} = React.useContext(Context)
    const [text,setText] = useState("")
    const [emoji,showEmoji] = useState(false)

    function onSendMessage(e){
        e.preventDefault();
        
        if (text === ""){
            alert("Сообщение должно быть не может быть ничем")
            return false
        } else {
            dispath({
                type :"New_message",
                payload : ({text, user: state.username})
            })

            socket.emit("send-message", {text, user: state.username })
            setText("")
            return false
        }
        
    }

    function onSetText(e){
        setText(e.target.value)
        socket.emit("someone-typing")
    }

    function addNewEmoji(data){
        setText(text + " " + data.emoji)
    }

    const emojiPicker = !emoji
     ? 
     <button type="button" className="show-emoji" onClick={() => showEmoji(true)}><span className="input-emoji" role="img" alt="smile">😀</span></button> 
     : 
     <div className="picker">
        <Picker className="emojiPicker"onEmojiClick={(event,data) => addNewEmoji(data)}/>
        <button type="button" className="cross" onClick={() => showEmoji(false)}>X</button>
     </div>

    return (
        <form action="/message" method="POST" className="send-form" onSubmit={(e) => onSendMessage(e)}>
            <div className="send-input">
                 <input type="text" value={text} placeholder="Введите ваше сообщение" name="message" onChange={(e) => onSetText(e)}/>
                 {emojiPicker}                 
            </div>
            <button type="submit">Отправить</button>
        </form>
        
        )
}

export default SendMessages