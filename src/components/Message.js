import React, { forwardRef } from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import '../assets/Message.css';

const Message = forwardRef(({ username, message }, ref) => {

    const isUser = username === message.username;

    return (
        <div ref={ ref } className={`message ${isUser && 'message_user'}`}>
            <Card className={ isUser ? "message__userCard" : "message__guestCard" }>
                <CardContent>
                    <Typography>
                        <span className="text">
                            { !isUser && `${message.username || 'Unknown User'}: `}you: { message.message }
                        </span>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
})

export default Message;