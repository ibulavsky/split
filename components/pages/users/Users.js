import React, {useState} from "react";
import {useDispatch} from 'react-redux';
import {deleteUser} from '../../../redux/users-actions';
import {UserForm} from './user-form/UserForm';
import {UsersList} from './users-list/UsersList';

import {UserAddOutlined} from '@ant-design/icons';
import {Button} from 'antd';
import style from './users.module.scss';

export const Users = () => {

    const size = 'large';
    const [isForm, showForm] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
    const dispatch = useDispatch();

    const onEditUser = (user) => {
        showForm(true);
        setCurrentUser(user);
    }

    const onAddNewUser = () => {
        showForm(true);
        setCurrentUser(null);
    }

    const onDeleteUser = (userId) => {
        showForm(false);
        setCurrentUser(null);
        dispatch(deleteUser(userId))
    }

    return <div className={style.container}>
        <div className={style.pageTitle}>
            Users page allows to create and edit user.
        </div>
        <div className={style.content}>
            <div className={style.usersListWrapper}><UsersList onEditUser={onEditUser} onDeleteUser={onDeleteUser}/>
            </div>
            <div className={style.formWrapper}>
                {!isForm
                    ? <Button type="primary" onClick={onAddNewUser} shape="round" icon={<UserAddOutlined/>}
                              size={size}>
                        Add user
                    </Button>
                    : <UserForm showForm={showForm} currentUser={currentUser} setCurrentUser={setCurrentUser}/>
                }
            </div>
        </div>
    </div>
}