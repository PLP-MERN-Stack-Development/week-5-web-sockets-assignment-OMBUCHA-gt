import React from 'react';

const TypingIndicator = ({ typingUsers, currentUser }) => {
  const othersTyping = typingUsers.filter((u) => u !== currentUser);

  if (othersTyping.length === 0) return null;

  return (
    <div className="text-sm text-gray-500 mt-2">
      {othersTyping.join(', ')} typing...
    </div>
  );
};

export default TypingIndicator;
