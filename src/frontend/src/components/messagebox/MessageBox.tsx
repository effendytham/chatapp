import React, { FC } from "react";
import Moment from 'react-moment';
import Time from "../displayWrappers/time";
import "./messagebox.scss";

interface MessageBoxProps {
    mode: 'incoming' | 'outgoing',
    name: string | undefined,
    message : string,
    dateTime : Date,
}

const MessageBox: FC<MessageBoxProps> = (props) => {
    const { mode, name, message, dateTime } = props;
    if (mode === "incoming"){
        return (
            <div className="messagebox-container">
                <div className="messagebox-box">
                    <span className="messagebox-name">{name}</span>
                    <span className="messagebox-message">{message}</span>
                </div>
                <span className="messagebox-time">
                    <Time value={dateTime} />
                </span>
            </div>
        )
    }
    else if (mode === "outgoing") {
        return (
            <div className="messagebox-container_reverse">
                <div className="messagebox-box_reverse">
                    <span className="messagebox-message_reverse">{message}</span>
                </div>
                <span className="messagebox-time_reverse">
                    <Time value={dateTime} />
                </span>
            </div>
        )
    }
    else {
        return <></>;
    }
}

export default MessageBox;