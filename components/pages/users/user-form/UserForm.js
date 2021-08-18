import React, {useEffect, useState} from 'react';

import {Form, Input, InputNumber, Button, Select} from 'antd';
import {useDispatch} from 'react-redux';
import {addUser, updateUser} from '../../../../redux/users-actions';

const { Option } = Select;

const layout = {
    labelCol: {span: 8},
    wrapperCol: {span: 16},
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
    required: '${label} is required!',
    // types: {
    //     email: '${label} is not a valid email!',
    //     number: '${label} is not a valid number!',
    // },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};
/* eslint-enable no-template-curly-in-string */

export const UserForm = ({showForm, currentUser}) => {

    const [form] = Form.useForm();
    const [sex, setSex] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        if (currentUser) {
            form.setFieldsValue(currentUser);
        } else {
            onClear();
        }
    }, [currentUser])



    const onFinish = (data) => {
        if (currentUser) {
            dispatch(updateUser(currentUser.id, data))
        } else {
            dispatch(addUser(data));
        }
        onClear();
        showForm(false);
    };

    const onClear = () => {
        form.resetFields();
    };

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end', width: '100%'}}>
            <Button style={{margin: '10px 0 10px'}} onClick={() => showForm(false)}>Close</Button>
            <Form style={{width: '100%'}} {...layout} form={form} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                <Form.Item name='name' label="Name" rules={[{required: true}]}>
                    <Input/>
                </Form.Item>
                <Form.Item name='email' label="Email" rules={[{type: 'email'}]}>
                    <Input/>
                </Form.Item>
                <Form.Item name='telegram' label="Telegram">
                    <Input/>
                </Form.Item>
                <Form.Item name='sex' label="Sex" rules={[{required: true}]}>
                    <Select
                        value={sex}
                        style={{
                            width: 80,
                            margin: '0 8px',
                        }}
                        onChange={setSex}
                    >
                        <Option value="male">Male</Option>
                        <Option value="female">Female</Option>
                        <Option value="other">Other</Option>
                    </Select>
                </Form.Item>
                <Form.Item wrapperCol={{...layout.wrapperCol, offset: 8}}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                    <Button type="primary" danger onClick={onClear}>
                        Clear
                    </Button>
                </Form.Item>
            </Form>
        </div>

    );
};