import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UsersList } from '../../components/usersList/UsersList'
import { addUsersAction, clearUserAction, getUsersAction } from '../../redux/actions/actions'

function UsersPage() {
    const dispatch = useDispatch()
    const users = useSelector(state => state.users.users)
    
    const [user, setUser] = useState({
        name: '',
        username: '',
        email: ''
    })

    const changeInput = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(addUsersAction(user))
    }


  return (
    <div>
          <h1>Users Page</h1>

          <form onSubmit={(e) => onSubmit(e)}>
              <input type="text" name='name' onChange={changeInput} value={user.name} />
              <input type="text" name='username' onChange={changeInput} value={user.username}/>
              <input type="email" name='email' onChange={changeInput} value={user.email} />

              <button> add user </button>
              {console.log(user)}
          </form>
          
          <hr/>

          <button onClick={() => dispatch(getUsersAction())}>get users</button>
          <button onClick={() => dispatch(clearUserAction())}>clear</button>

          <hr/>
          <UsersList users={users} />
    </div>
  )
}

export default UsersPage
