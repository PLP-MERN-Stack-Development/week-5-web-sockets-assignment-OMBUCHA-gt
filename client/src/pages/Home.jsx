import React, { useEffect } from 'react';
import ChatRoom from '../components/ChatRoom';
import { useSocket } from '../socket/socket';

const ChatPage = ({ username }) => {
  const {
    messages,
    users,
    typingUsers,
    connect,
    sendMessage,
    setTyping,
  } = useSocket();

  useEffect(() => {
    if (username) {
      connect(username);
    }
  }, [username]);

  return (
    <ChatRoom
      messages={messages}
      users={users}
      typingUsers={typingUsers}
      sendMessage={(msg) => sendMessage(msg, username)}
      setTyping={(isTyping) => setTyping(isTyping)}
      currentUser={username}
    />
  );
};

export default ChatPage;
