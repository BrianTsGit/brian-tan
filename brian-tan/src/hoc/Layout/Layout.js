import React, { Component } from 'react';

import Aux from '../Aux/Aux';
import Toolbar from '../../component/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../component/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    };

    closeSideDrawerHandler = () => {
        this.setState({showSideDrawer: false});
    }

    toggleSideDrawerHandler = () => {
        this.setState(prevState => {
            return {showSideDrawer: !prevState.showSideDrawer}
        });
    }

    render () {
        return (
            <Aux>
                <Toolbar toggleSideDrawer={this.toggleSideDrawerHandler} />
                <SideDrawer 
                    close={this.closeSideDrawerHandler}
                    show={this.state.showSideDrawer}/>
                {this.props.children}
            </Aux>
        );
    }
}

export default Layout;