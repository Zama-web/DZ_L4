import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UsersList } from '../../components/usersList/UsersList'
import { getUsersAction } from '../../redux/actions/actions'

function UsersPage() {
    const dispatch = useDispatch()
    const users = useSelector(state=>state.users.users)


  return (
    <div>
          <h1>Users Page</h1>
          <button onClick={() => dispatch(getUsersAction())}>get users</button>

          --------------------------
          <UsersList users={users} />
    </div>
  )
}

export default UsersPage
