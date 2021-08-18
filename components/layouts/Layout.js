import React, {useState} from 'react';

import {Layout, Menu} from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    DollarCircleOutlined,
    UsergroupAddOutlined,
    CheckCircleOutlined,
} from '@ant-design/icons';
import "./MainLayout.scss";
import logo from "../../styles/assets/example.png";
import {Page} from '../pages/Page';

const {Header, Sider, Content} = Layout;

export const MainLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [currentPage, setPage] = useState('users');

    const changePage = ({item, key, keyPath, domEvent}) => {
        setPage(key);
    }

    const toggle = () => {
        setCollapsed(!collapsed);
    };

    return (
        <Layout className={"main-layout"}>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                {collapsed
                    ? <img className={"logo-small"} src={logo} alt="logo-small"/>
                    : <img className={"logo"} src={logo} alt="logo"/> }
                <Menu onClick={changePage} theme="dark" mode="inline" defaultSelectedKeys={['users']}>
                    <Menu.Item key="users" icon={<UsergroupAddOutlined />}>
                        <span>users</span>
                    </Menu.Item>
                    <Menu.Item key="events" icon={<DollarCircleOutlined />}>
                        <span>events</span>
                    </Menu.Item>
                    <Menu.Item key="result" icon={<CheckCircleOutlined />}>
                        <span>result</span>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background header">
                    {collapsed
                        ? <MenuUnfoldOutlined className={'trigger'} onClick={toggle}/>
                        : <MenuFoldOutlined className={'trigger'} onClick={toggle}/>
                    }
                    {currentPage.toUpperCase()}
                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                    }}
                >
                    {<Page currentPage={currentPage} />}
                </Content>
            </Layout>
        </Layout>
    );
}