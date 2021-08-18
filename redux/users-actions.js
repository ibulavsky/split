export const ADD_USER = 'ADD_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const DELETE_USER = 'DELETE_USER';

export const addUser = (user) => ({
    type: ADD_USER,
    user,
});

export const updateUser = (userId, user) => ({
    type: UPDATE_USER,
    userId,
    user,
});

export const deleteUser = (userId) => ({
    type: DELETE_USER,
    userId,
});