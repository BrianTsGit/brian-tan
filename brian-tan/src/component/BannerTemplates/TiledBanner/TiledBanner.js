import React from 'react';

import classes from './TiledBanner.scss';

const tiledBanner = (props) => {

    let background = [];

    for (let i = 0; i < 20; i++) {
        background.push(
            <div key={'tile_' + i} className={classes.Tile}>
                <img src={props.image} alt="TileImg" />
            </div>
        );
    }

    return (
        <div className={classes.TiledBanner}>
            <div className={classes.MobileComponent}>
                <div className={classes.Tile}>
                    <img src={props.image} alt="TileImg" />
                </div>
            </div>
            <div className={classes.DesktopComponent}>
                {background}
            </div>
        </div>
    );
}

export default tiledBanner; 