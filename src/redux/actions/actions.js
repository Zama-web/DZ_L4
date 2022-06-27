import { types } from "../../types"


export const changeTextAction = () => {
    return {
        type: types.CHANGE_TEXT,
    }
}

export const clearTextAction = () => {
    return {
        type: types.CLEAR_TEXT,
    }
}

export const usersAction = (users) => {
    return {
        type: types.USERS,
        payload: users
    }
}

export const clearUserAction = () => {
    return {
        type: types.CLEAR_USERS
    }
}

export const handleTextAction = () => {
    return function (dispatch) {
        dispatch(changeTextAction())
        setTimeout(() => {
            dispatch(clearTextAction())
        }, 3000)
    }
}

export const getUsersAction = () => {
    return async function (dispatch) {
        const responce = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await responce.json()

        dispatch(usersAction(data))
    }
}


export const addUsersAction = (data) => {
    return async function (dispatch) {
        const option = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            bady: JSON.stringify(data)
        }

        const responce = await fetch('https://jsonplaceholder.typicode.com/users', option)

        dispatch({
            type: types.ADD_USER,
            payload: responce
        })
    }
}