import React from 'react';

const UserList = () => {
  const users = ["User 1", "User 2", "User 3"]; // Example user list

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Contacts</h2>
      <ul className="space-y-2">
        {users.map((user, index) => (
          <li key={index} className="p-2 bg-white rounded-lg shadow-sm cursor-pointer hover:bg-gray-200">
            {user}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
