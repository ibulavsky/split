import React from "react";
import {Events} from './events/Events';
import {Result} from './result/Result';
import {Users} from './users/Users';

// Events page allows to create and edit transactions (events).
export const Page = ({currentPage}) => {
    switch (currentPage) {
        case "users":
            return <Users/>
        case "events":
            return <Events/>
        case "result":
            return <Result/>
    }
}