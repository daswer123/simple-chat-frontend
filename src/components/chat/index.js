import React, { useEffect,useContext } from "react";
import ReactDOM from "react-dom";
import UserList from "../userList";
import MessageList from "../messageList";
import SendMesssages from "../sendMessages";
import "./chat.css"
import { Context } from "../../reducer";
import socket from "../../socket";


const Chat = () => {
    const {state,dispath} = useContext(Context)
    const getData = async () => {
        let data = await fetch("/rooms/"+state.roomName);
        data = await data.json()

        dispath({
            type: "Get_Data",
            payload : data
        })
    }

    useEffect(() => {
        getData();
        console.log("I use getData")

    },[])
    

    return (
    <section className="chat">
        <UserList users={state.users}/>
        <div className="chat-messages">
            <MessageList messages={state.messages}/>
            <SendMesssages/>
        </div>
    </section>
    )
}

export default Chat


