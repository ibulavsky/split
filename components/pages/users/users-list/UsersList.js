import React from 'react';
import {List, Avatar, Popconfirm} from 'antd';
import {useSelector} from 'react-redux';

import style from './UsersList.module.scss';
import {DeleteFilled, EditFilled} from '@ant-design/icons';

import man from '../../../../styles/assets/man.svg';
import woman from '../../../../styles/assets/woman.svg';
import other from '../../../../styles/assets/other.svg';

export const UsersList = ({onEditUser, onDeleteUser}) => {

    const users = useSelector(store => store.users.usersList);

    return (
        <List
            itemLayout="horizontal"
            dataSource={users}
            renderItem={item => <User key={item.id} item={item} onEditUser={onEditUser} onDeleteUser={onDeleteUser}/>}
        />)
}

const User = ({item, onEditUser, onDeleteUser}) => {
    const email = item.email ? `Email: ${item.email}` : `Email: -`;
    const telegram = item.telegram ? `Telegram: ${item.telegram}` : `Telegram: -`;

    let avatar;
    switch (item.sex) {
        case 'male':
            avatar = man;
            break;
        case 'female':
            avatar = woman;
            break;
        default:
            avatar = other;
    }

    return (
        <List.Item className={style.user}>
            <List.Item.Meta
                avatar={<Avatar src={avatar}/>}
                title={<div className={style.userTitle}>
                    <div>{item.name}</div>
                    <div className={style.userControl} onClick={() => onEditUser(item)}><EditFilled/></div>
                    <div className={style.userControl}>
                        <Popconfirm placement="top" title={'Are you sure?'} onConfirm={() => onDeleteUser(item.id)}
                                    okText="Yes" cancelText="No">
                            <DeleteFilled/>
                        </Popconfirm>
                    </div>
                </div>}
                description={<>
                    <div>{email}</div>
                    <div>{telegram}</div>
                </>}
            />
        </List.Item>
    )
}
