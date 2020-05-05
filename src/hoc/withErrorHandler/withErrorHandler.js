import React, { useState, useEffect } from 'react';

import Aux from '../Aux/Aux';
import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) => {
  return props => {
    const [error, setError] = useState();

    const reqInterceptor = axios.interceptors.request.use(request => {
      setError(null);
      return request;
    });
    const resInterceptor = axios.interceptors.response.use(request => request, err => {
      setError(err);
    })

    useEffect(() => {
      return () => {
        axios.interceptors.request.eject(reqInterceptor);
        axios.interceptors.response.eject(resInterceptor);
      }
    }, [reqInterceptor, resInterceptor])

    const errorConfirmedHandler = () => {
      setError(null);
    }

    return (
      <Aux>
        <Modal
          show={error}
          modalClosed={errorConfirmedHandler}>
          {error ? error.message : null}
        </Modal>
        <WrappedComponent {...props} />
      </Aux>
    )
  }
}

export default withErrorHandler;