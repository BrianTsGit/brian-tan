import React from 'react';

import classes from './GridImage.scss';

const gridImage = (props) => {
    return (
        <div className={classes.GridImage}
            style={{ backgroundImage: 'url(' + props.image + ')' }}>
        </div>
    );
}

export default gridImage;