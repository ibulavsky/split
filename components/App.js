import React from "react";

import '../styles/App.scss';
import 'antd/dist/antd.less';
import '../styles/themes/dark.less';
import {Provider} from 'react-redux';
import store from '../redux/store';
import {MainLayout} from './layouts/Layout';
import {Page} from './pages/Page';

export const App = () => {
    return (
        <Provider store={store}>
            <div className={"app"}>
                <MainLayout content={<Page/>}/>
            </div>
        </Provider>
    );
}