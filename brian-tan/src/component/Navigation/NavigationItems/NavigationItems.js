import React from 'react';
import { connect } from 'react-redux';

import classes from './NavigationItems.scss';
import NavigationItem from './NavigationItem/NavigationItem';
import googlePlusLogo from '../../../assets/images/googlePlusLogo.png';
import * as actions from '../../../store/actions/index';

const navigationItems = (props) => {
    const userLogin = () => {
        console.log('clicked');
        props.googleSignIn();
    };

    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem sectionName="Home" link="/" />
            <NavigationItem sectionName="Food" link="/food" />
            <NavigationItem sectionName="Television" link="/television" />
            <NavigationItem sectionName="Gaming" link="/gaming" />
            <NavigationItem sectionName="Misc." link="/" />
            <li className={classes.Login}>
                <a href="http://localhost:5000/auth/google">
                    <img src={googlePlusLogo} alt="Login" />
                </a>
            </li>
        </ul>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        googleSignIn: () => dispatch(actions.googleSignIn())
    };
};

export default connect(null, mapDispatchToProps)(navigationItems);