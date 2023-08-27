import React from "react";
import Chatbot from "react-chatbot-kit";
import 'react-chatbot-kit/build/main.css';
import ActionProvider from "../Chatbot/ActionProvider";
import config from "../Chatbot/config";
import MessageParser from "../Chatbot/MessageParser";
import styles from "./chat.module.css";


function Message(){
    return(
        <>
        
            <div className={styles.app}>
                <div style={{ width:'100%' }}>                
                    <Chatbot
                    config={config}
                    messageParser= {MessageParser} 
                    actionProvider = {ActionProvider}/>
                </div> 
            </div>
       


</>
    )
}

export default Message;