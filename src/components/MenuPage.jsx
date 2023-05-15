import * as React from 'react';
import {Helmet} from "./helmet/Helmet";
import { NewsLetter } from './UI/NewsLetter';
import { MenuItems } from './UI/MenuItems';


export const MenuPage = () => {
    return (
        <Helmet title="Menu">
            <MenuItems />
            <NewsLetter />
        </Helmet>
    );
};