import React from 'react';

import classes from './Input.scss';

const input = (props) => {
    return (
        <div>
            <label>{props.label}</label>
            <input type={props.type} />
        </div>
        
    );
}

export default input;