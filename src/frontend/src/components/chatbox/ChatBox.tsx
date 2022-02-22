import React, { FC, useRef, useState } from "react";
import MessageBox from "../messagebox/MessageBox";
import "./chatbox.scss";
import { v4 as uuidv4, v4 } from "uuid";

interface ChatBoxProps {

}

interface Conversation {
    messages: Message[]
}

interface Message {
    id : string
    userId: string,
    userName : string,
    message : string,
    dateTime : Date
}

let conversation : Conversation = {
    messages : [
    ]
}

const ChatBox: FC<ChatBoxProps> = (props) => {
    const [groupName, setGroupName] = useState<string>("Foodies Group");
    const [groupId, setGroupId] = useState<string>("#HS34K");
    const [groupMemberCount, setGroupMemberCount] = useState<number>(49);
    const [myUserId, setMyUserId] = useState<string>("0001");
    const [inputText, setInputText] = useState<string>("");

    const inputTextChangeHandler = (value: string) => {
        setInputText(value);
    }

    const inputRef: any = useRef();

    const handleSend = () => {
        conversation.messages.push({
            id : v4(),
            userId : (Math.floor(Math.random() * 10) > 5) ? "0001" : "0002",
            userName : "John Doe",
            message : inputText,
            dateTime : new Date()
        });
        setInputText("");
        (inputRef.current as any).focus();
    }
    return (
        <div className="chatbox-container">
            <div className="chatbox-header">
                <div className="chatbox-header_title">
                    <span className="chatbox-header_title_name">{groupName}</span>
                    <span className="chatbox-header_title_id">{groupId}</span>
                </div>
                <div className="chatbox-header_action">
                    <button className="chatbox-header_action_item" onClick={() => console.log("test")}>View members ({groupMemberCount})</button>
                    <button className="chatbox-header_action_item" onClick={() => console.log("test")}>Copy invitation link</button>
                    <button className="chatbox-header_action_item" onClick={() => console.log("test")}>Leave group</button>
                </div>
            </div>
            <div className="chatbox-conversation">
                {
                    conversation.messages.map((message) => {
                        return (
                            <MessageBox
                                key={message.id}
                                mode={myUserId === message.userId ? "outgoing" : "incoming"}
                                name={message.userName}
                                message={message.message}
                                dateTime={message.dateTime}
                            />
                        )
                    })
                }
            </div>
            <div className="chatbox-input_container">
                <input type="text" value={inputText}
                    onChange={(e) => inputTextChangeHandler(e.target.value)}
                    className="chatbox-input"
                    autoComplete="false"
                    placeholder="Type your message..."
                    ref={inputRef}
                />
                <button
                    className="chatbox-send"
                    onClick={(e) => handleSend()}
                >Send</button>
            </div>
        </div>
    )
}

export default ChatBox;