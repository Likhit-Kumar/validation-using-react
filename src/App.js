import React, { useState } from 'react'
import AddNewUser from './Components/Users/AddNewUser'
import UserList from './Components/Users/UserList';

function App () {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddNewUser onAddUser={addUserHandler} />
      <UserList users={usersList} />
    </div>
  );
}

export default App