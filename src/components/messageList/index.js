import React, { useEffect, useReducer, useRef } from "react"
import Message from "../message"
import socket from "../../socket";
import {Context} from "../../reducer"


const MessageList = ({messages}) => {

    const {state,dispath} = React.useContext(Context)
    const endMessagesRef = useRef(null)

    useEffect(() => {
        socket.on("send-message",(message) =>{

            if(message.roomName != state.roomName){
                return
            }
            dispath({
                type: "New_message",
                payload : message.message
            })
        })
        socket.off('send-message', {});
    },[])

    const scrollToBotton = () => {
        endMessagesRef.current.scrollIntoView({behavior : "smooth"})
    }

    useEffect(scrollToBotton,[messages])

    return (
    <ul className="message-list">
        {messages.map(elem => {
            return <Message text={elem.text} user={elem.user} key={elem.user+elem.text}/>
        })}
        <div ref={endMessagesRef}/>
    </ul>
    )
}

export default MessageList