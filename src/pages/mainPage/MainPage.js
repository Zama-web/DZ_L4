import React, { useEffect, useState } from 'react'
import Users from '../../components/users/Users';

const URL = 'https://jsonplaceholder.typicode.com/users';

function MainPage() {
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    fetch(URL).then(response => response.json()).then(data => setUsers(data))
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <h1> Главная страница </h1><hr />
      <Users users={users} />
    </>
  )
}

export default MainPage
