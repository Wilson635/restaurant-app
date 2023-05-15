import * as React from 'react';


export const Helmet = (props) => {

    document.title = 'RestShop | ' + props.title

    return (
        <div className="w-100">
            {props.children}
        </div>
    );
};