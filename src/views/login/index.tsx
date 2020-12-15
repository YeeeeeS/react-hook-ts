import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { globalContext } from '@/reducer';

import './index.scss';

const Login: React.FC<{}> = () => {
  const history           = useHistory();
  let   [state, dispatch] = useContext(globalContext);
  console.log(state);

  const userLogin = () => {
    dispatch({ type: 'user-login-success' });
    history.push('/');
  }

  return (
    <div className="login-container"> 
      <div className="form-item">
        <input type="text"/>
      </div>
      <div className="form-item">
        <input type="text"/>
      </div>
      <div className="form-item">
        <button onClick={
          userLogin
        }>登录</button>
      </div>
    </div>
  )
}

export default Login;