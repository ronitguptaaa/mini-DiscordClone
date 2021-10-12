import React from 'react'
import './Message.css'
import {Avatar} from "@material-ui/core"

function Message() {
    return (
        <div className="message">
            <Avatar/>
            <div className="message__info">
                <h4>ronitguptaaa
                <span className="message__timestamp">this</span>
                </h4>
                <p>message</p>
            </div>
        </div>
    )
}

export default Message
