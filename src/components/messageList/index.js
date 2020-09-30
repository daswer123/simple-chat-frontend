import React from "react"
import Message from "../message"

const MessageList = () => {
    return (
    <ul className="message-list">
        <Message/>
        <Message/>
        <Message/>
    </ul>
    )
}

export default MessageList