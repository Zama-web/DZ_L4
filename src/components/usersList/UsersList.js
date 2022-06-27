import React from 'react'

export const UsersList = ({ users }) => (
    <ul>
        {users.map((user, i) => 
                <li key={i}>
                    <p> {user.name} </p>
                </li>
        )}
    </ul>
)

