import React from "react";

const Context = React.createContext();

const initalState = {
    connect : false,
    loading : false,
    users : [],
    messages : [],
    username : null,
    roomName : null
}

function reducer(state ,action){
    switch (action.type) {
        case "Loading":
            return{
                ...state,
                loading : true
            }
        case "Connect":
            const {username,roomName} = action.payload
            return {
                ...state,
                connect : true,
                loading : false,
                username,
                roomName
            }
        case "Get_Data":
            const  {users,messages} = action.payload[0]
            return {
                ...state,
                users ,
                messages
            }
        case "New_User":
            return {
                ...state,
                users : [...state.users,action.payload] 
            }

        case "Update_Users":
            return {
                ...state,
                users : action.payload.users
            }

        case "New_message":
            return {
                ...state,
                messages : [...state.messages,action.payload]
            }
        default:
            return state
    }
}

export {
    Context,
    reducer,
    initalState
}