import React from 'react';

import classes from './ConceptGridImage.scss';

const gridImage = (props) => {
    let gridImageClasses = [classes.GridImage, classes.Hide].join(' ');

    if (props.show) {
        gridImageClasses = [classes.GridIamge, classes.Show].join(' ');
    }

    return (
        <div className={classes.GridImage}
            style={{ backgroundImage: 'url(' + props.image + ')' }}>
        </div>
    );
}

export default gridImage;