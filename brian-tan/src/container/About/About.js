import React, { Component } from 'react';

import classes from './About.scss';

class About extends Component {
    render () {
        return (
            <div className={classes.About}>
                <div className={classes.AboutImage}>
                    <img src="https://hillcountryhomestyle.com/wp-content/uploads/2016/01/sweet-dill-pickle.png" alt="AboutImage" />
                </div>
                <div className={classes.AboutDescription}>
                    <p>
                        You have stumbled upon the personal site of Brian Tan. His name sounds familiar, and upon 
                        digging through your memory you remember having a conversation with a few weeks AboutImage.
                        You guys somehow ended up talking about Guy Fieri and Brian made a comment about wishing he were
                        a "permanent resident of Flavortown." His site seems interesting but you could be watching Vine
                        compilations on Youtube instead.
                    </p>
                    <p>
                        <strong>Turn to page 11</strong> if you think his site is worth checking out.
                    </p>
                    <p>
                        <strong>Turn to page 36</strong> because you want no business with a resident of Flavortown. 
                    </p>
                </div>

            </div>
        );
    };
}

export default About;