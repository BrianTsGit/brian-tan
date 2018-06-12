import React, { Component } from 'react';

import Modal from '../../component/UI/Modal/Modal';
import Aux from '../Aux/Aux';

const withErrorHandler = (WrappedComponent, axios) => {
    //interceptors here to listen to requests and responses 

    return class extends Component {
        state = {
            error: null
        }

        componentWillMount () { //NOTE WE USE componentWillMount
            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({error: null})
                return req; //required by the service
            });

            this.resInterceptor = axios.interceptors.response.use(res => res, error => {
                error.message = 'There was a problem grabbing data. Give it another shot.';
                this.setState({error: error});
            });
        }

        componentWillUnmount () {
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }

        errorConfirmedHandler = () => {
            this.setState({error: null});
        }

        render () {
            return (
                <Aux>
                    <Modal 
                        close={this.errorConfirmedHandler}
                        show={this.state.error}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Aux>
            );
        };
    }
};

export default withErrorHandler; 

