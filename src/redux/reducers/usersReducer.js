import { types } from "../../types";


const initialState = {
    users: []
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.USERS:
            return { ...state, users: [...action.payload] }
        case types.CLEAR_USERS:
            return { ...state, users: [] }
        case types.ADD_USER:
            const users = state.users.concat(action.payload)
            return {...state, users}
    
        default:
            return state;
    }
}