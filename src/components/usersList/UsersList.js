import React from 'react'

export const UsersList = ({ users }) => (
    <ul>
        {
            users.length > 0
                ?
                users.map((user, i) => <li key={i}> {user.name} </li>)
                :
                <li>Пользователей нет</li>
        }
    </ul>
)

