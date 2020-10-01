import React, { useContext, useEffect } from "react";
import socket from "../../socket";
import {Context} from "../../reducer"

const UserList = ({users}) => {
    const {state,dispath} = useContext(Context)

    useEffect(() => {
        socket.on("new-user",(user) => {
            if (user.roomName != state.roomName){
                return
            }
            dispath({
                type: "New_User",
                payload : user
            })
            return
        })

        socket.on("user-leave",(users) => {
            if (users.roomName === state.roomName){
                dispath({
                    type: "Update_Users",
                    payload : users
                })
            }
            return false
            
            
        })

        socket.off('new-user', {});
        socket.off('user-leave',{} );


    },[])

    return (<div className="chat-info">
        <h3>Пользователи: {users.length}</h3>
        <ul className="userlist">
            {users.map(user => {
                return <li key={user.socketId}>{user.username}</li>
            })}
        </ul>
    </div>
    )
}

export default UserList