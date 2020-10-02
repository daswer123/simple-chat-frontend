import React, { useContext } from "react"
import { Context } from "../../reducer"
const uuid = require("uuid")


const Message = ({text,user}) => {
    const {state,dispath} = useContext(Context)

    let className = "message-text "; 
    if (state.username === user){
        className += "mine-message"
    }

    return (
    <li className="message-item" key={uuid.v4()}>
        <p className={className}>{text}</p>
        <span className="username">{user}</span>
    </li>
    )
}

export default Message