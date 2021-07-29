import React from "react";

import styles from '../styles/App.module.scss';
import {Header} from './header/Header';
import {Main} from './pages/Main';

export const App = () => {
    return (
        <div className={styles.app}>
            <Header/>
            <Main/>
        </div>
    );
}