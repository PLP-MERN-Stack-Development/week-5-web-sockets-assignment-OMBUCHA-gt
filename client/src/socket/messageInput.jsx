import React, { useState } from 'react';

const MessageInput = ({ onSend, onTyping }) => {
  const [text, setText] = useState('');
  let typingTimeout;

  const handleChange = (e) => {
    setText(e.target.value);
    onTyping(true);
    clearTimeout(typingTimeout);
    typingTimeout = setTimeout(() => onTyping(false), 1000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onSend(text);
      setText('');
      onTyping(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 flex">
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Type a message..."
        className="flex-1 border p-2 rounded-l"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 rounded-r">
        Send
      </button>
    </form>
  );
};

export default MessageInput;