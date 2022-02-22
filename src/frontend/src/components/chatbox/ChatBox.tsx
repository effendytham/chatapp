import React, { FC, useState } from "react";
import "./chatbox.scss";

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
    datetime : string
}

const conversation : Conversation = {
    messages : [
        {
            id : "0001",
            userId : "0001",
            userName : "Effendy Tham",
            message : "Icyhot01, thank you so much",
            datetime : "07:14 PM"
        }, {
            id : "0002",
            userId : "0001",
            userName : "Effendy Tham",
            message : "Really appreciate it, you are very kind. Hello to Napal friend",
            datetime : "07:15 PM"
        }
    ]
}

const ChatBox: FC<ChatBoxProps> = (props) => {
    const [groupName, setGroupName] = useState<string>("Foodies Group");
    const [groupId, setGroupId] = useState<string>("#HS34K");
    const [groupMemberCount, setGroupMemberCount] = useState<number>(49);
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
                            <div key={message.id} className="chatbox-conversation_message">
                                <div className="chatbox-conversation_message_box">
                                    <span className="chatbox-conversation_message_box_name">{message.userName}</span>
                                    <span className="chatbox-conversation_message_box_message">{message.message}</span>
                                </div>
                                <span className="chatbox-conversation_message_time">
                                    {message.datetime}
                                </span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ChatBox;