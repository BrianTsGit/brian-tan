import React from 'react';

import Aux from '../Aux/Aux';

const layout = (props) => {
    return (
        <Aux>
            <h1>Navigation Bar</h1>
            {props.children}
        </Aux>
    );
}

export default layout;