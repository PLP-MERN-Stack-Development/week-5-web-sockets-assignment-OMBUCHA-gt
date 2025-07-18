import React from 'react';

const UserList = ({ users, currentUser }) => {
  return (
    <ul className="space-y-2">
      {users.map((user) => (
        <li
          key={user.id}
          className={`p-2 rounded ${user.username === currentUser ? 'bg-green-100 font-bold' : 'bg-white'}`}
        >
          {user.username}
        </li>
      ))}
    </ul>
  );
};

export default UserList;