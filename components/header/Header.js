import React from "react";
import styles from './Header.module.scss';

import {Link} from 'react-router-dom'
import './Header.module.scss';

export const Header = () => (
    <header className={styles.header}>
        <h1>Header - Navigation</h1>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/users">Users</Link></li>
                <li><Link to="/events">Events</Link></li>
                <li><Link to="/result">Result</Link></li>
            </ul>
        </nav>
    </header>
)