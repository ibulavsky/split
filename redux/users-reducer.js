import {ADD_USER, DELETE_USER, UPDATE_USER} from './users-actions';

const usersInitialState = {
    usersList: [
        {name: "Igor B.", id: "0", email: "ibulavsky@gmail.com", telegram: '@ibulavsky', sex: "male"},
    ],
}

export const usersReducer = (state = usersInitialState, action) => {
    switch (action.type) {
        case ADD_USER: {
            const user = {id: state.usersList.length, ...action.user}
            return {...state, usersList: [...state.usersList, user]}
        }

        case UPDATE_USER: {
            const usersList = state.usersList.map(u => {
                if (u.id === action.userId) {
                    return {...u, ...action.user}
                } else {
                    return u
                }
            })
            return {...state, usersList: usersList};
        }

        case DELETE_USER: {
            const usersList = state.usersList.filter(u => u.id !== action.userId)
            return {...state, usersList: usersList};
        }
        default: {
            return state;
        }
    }
}