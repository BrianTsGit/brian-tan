import React from 'react';
import PropTypes from 'prop-types';

import classes from './SideDrawer.scss';
import NavigationItems from '../NavigationItems/NavigationItems';
import Aux from '../../../hoc/Aux/Aux';
import Backdrop from '../../UI/Backdrop/Backdrop';

const sideDrawer = (props) => {
    let sideDrawerClasses = [classes.SideDrawer, classes.Close];
    if (props.show) {
        sideDrawerClasses = [classes.SideDrawer, classes.Open];
    }

    return (
        <Aux>
            <Backdrop show={props.show} clicked={props.close} />
            <div className={sideDrawerClasses.join(' ')}>
                <NavigationItems sideDrawer clicked={props.close} />
            </div>
        </Aux>
    );
};

sideDrawer.propTypes = {
    show: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired
};

export default sideDrawer; 