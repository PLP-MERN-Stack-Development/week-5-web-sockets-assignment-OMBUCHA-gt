import React from 'react';
import MessageInput from './MessageInput';
import TypingIndicator from './TypingIndicator';
import UserList from './UserList';

const ChatRoom = ({ messages, users, typingUsers, sendMessage, setTyping, currentUser }) => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-1 overflow-hidden">
        {/* Users Sidebar */}
        <div className="w-1/4 bg-gray-100 p-4 overflow-y-auto">
          <h2 className="font-bold text-lg mb-2">Online Users</h2>
          <UserList users={users} currentUser={currentUser} />
        </div>

        {/* Chat Messages */}
        <div className="flex-1 flex flex-col bg-white p-4 overflow-y-auto">
          <div className="flex-1 space-y-2 overflow-y-auto">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`p-2 rounded shadow ${msg.system ? 'bg-yellow-100' : 'bg-blue-100'}`}
              >
                <div className="text-sm text-gray-600">
                  {msg.system ? 'System' : msg.sender} — {new Date(msg.timestamp).toLocaleTimeString()}
                </div>
                <div>{msg.message}</div>
              </div>
            ))}
          </div>

          <TypingIndicator typingUsers={typingUsers} currentUser={currentUser} />
          <MessageInput onSend={sendMessage} onTyping={setTyping} />
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;