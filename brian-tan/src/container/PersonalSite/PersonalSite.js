import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './PersonalSite.scss'
import initials from '../../assets/images/initials_white.png';

class PersonalSite extends Component {
    state = {

    }

    render () {
        return(
            <div className={classes.PersonalSite}>
                <div className={classes.LargeImage}>
                    <img src={initials} />
                </div>
                <div className={classes.PersonalMessage}>
                    <h1>BRIAN TAN</h1>
                    <h2>
                        Software developer with 2+ years of experience working with 4+ companies as a consultant. 
                        Web app craftsman using React and AngularJS frameworks. 
                        Skillful in writing RESTful web services in Node/Express and .NET technologies.
                    </h2>
                    <h4>
                        Enjoys recreating recipes he finds on YouTube. 
                        Finds quad-colored pens really useful.
                        Loves watching deeply profound docu-series like Diners, Drive-ins, and Dives.
                    </h4>
                    <h4>
                        Contact me at brian.lin.tan@gmail.com
                    </h4>
                </div>
            </div>
        );
    };
}

export default PersonalSite;