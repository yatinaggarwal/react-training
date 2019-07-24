import React, { Component } from 'react';
import Modal from '../../components/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null
    }

    componentWillMount() {
      this.reqIntercepter = axios.interceptors.request.use(req => {
        this.setState({error: null});
        return req;
      })
      this.resIntercepter = axios.interceptors.response.use(res => res, error => {
        this.setState({error: error});
      })
    }

    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqIntercepter);
      axios.interceptors.response.eject(this.resIntercepter);
    }

    errorConfirmedHandler = () => {
      this.setState({error: null});
    }

    render() {
      return (
        <>
          { this.state.error ? 
            <Modal onModalClose={this.errorConfirmedHandler}>
              <p>{this.state.error.message}</p>
            </Modal>
          : null }
          <WrappedComponent {...this.props} />
        </>
      );
    }
  }
}

export default withErrorHandler;