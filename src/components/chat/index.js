import React from "react";
import UserList from "../userList";
import MessageList from "../messageList";
import SendMesssages from "../sendMessages";
import "./chat.css"

const Chat = () => {
    return (
    <section className="chat">
        <UserList/>
        <div className="chat-messages">
            <MessageList/>
            <SendMesssages/>
        </div>
    </section>
    )
}

export default Chat