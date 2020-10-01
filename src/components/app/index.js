import React, { useReducer, useState } from "react";
import Chat from "../chat";
import Auth from "../auth";

import socket from "../../socket";
import {Context,reducer, initalState} from "../../reducer";


const App = () => {    

    const [state,dispath] = useReducer(reducer,initalState)

    const view = state.connect ? <Chat/> : <Auth/>;


    return (
        <>
          <Context.Provider value={{dispath,state}}>
              {view}
          </Context.Provider>
        </>
    )
}

export default App


{/* <>
            <h1>Hello</h1>
            <button onClick={() => connectSocket()}>Click here to connect Socket</button>
            <p>{connect ? "Вы подключены": "Вы не подключены"}</p>
</> */}