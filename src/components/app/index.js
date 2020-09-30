import React, { useReducer, useState } from "react";
import Chat from "../chat";
import Auth from "../auth";

import socket from "../../socket";

const initalState = {
    connect : false
}
function reducer(state = initalState,action){
    switch (action.type) {
        case "Connect":
            return {connect : true}
        default:
            return state
    }
}

const App = () => {
    const [state, dispath] = useReducer(reducer,initalState)

    const onChangeConnect = () => {
        console.log("HI")
        dispath({type : "Connect"})
        console.log(socket)
    }

    const view = state.connect ? <Chat/> : <Auth changeConnect={onChangeConnect} />;


    return (
        <>
            {view}
        </>
    )
}

export default App


{/* <>
            <h1>Hello</h1>
            <button onClick={() => connectSocket()}>Click here to connect Socket</button>
            <p>{connect ? "Вы подключены": "Вы не подключены"}</p>
</> */}