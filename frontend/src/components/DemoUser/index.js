import React from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

function DemoUserPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const credential = 'Demo-lition';
  const password = 'password';

  if (sessionUser) return (
    <Redirect to="/" />
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    return dispatch(sessionActions.login({ credential, password }))
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Demo User</button>
    </form>
  );
}

export default DemoUserPage;