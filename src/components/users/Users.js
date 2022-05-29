import React from 'react';
import classes from './users.module.css'


function Users(props) {

  return (
    <div className={classes.count_table} >
      <table>
        <caption> Список пользователей API JSONplaceholder </caption>
        <thead>
          <tr>
            <th> № </th>
            <th> ИМЯ </th>
            <th> Имя пользователя</th>
            <th> ЭЛ.ПОЧТА </th>
          </tr>
        </thead>
        {
          props.users.map((user, i) =>
            <tbody key={i} >
              <tr>
                <th>  {user.id} </th>
                <td> {user.name} </td>
                <td> {user.username} </td>
                <td> {user.email} </td>
              </tr>
            </tbody>
          )
        }
      </table>
    </div >
  )
}

export default Users
