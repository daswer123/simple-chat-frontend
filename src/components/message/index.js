import React, { useContext } from "react"
import { Context } from "../../reducer"

const Message = ({text,user}) => {
    const {state,dispath} = useContext(Context)

    let className = "message-text "; 
    if (state.username === user){
        className += "mine-message"
    }

    return (
    <li className="message-item" key={text+user}>
        <p className={className}>{text}</p>
        <span className="username">{user}</span>
    </li>
    )
}

export default Message