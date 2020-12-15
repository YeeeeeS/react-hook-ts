import React, { Context } from 'react';

interface stateType {
  index   : number,
  isLogin : boolean,
  userInfo: object
}

let initState: stateType = {
  index   : 0,
  isLogin : true,
  userInfo: {}
};

interface actionType {
  type : string,
  data : object,
  index: number
}

function globalReducer(state: stateType, action: actionType ){
  switch(action.type){
    case 'user-login-success': 
      return {
        ...state,
        isLogin: true
      }
    case 'user-logout-success':
      return {
        ...state,
        isLogin: false
      }
    default: 
      return state
  }
}

let globalContext: Context<any> = React.createContext(initState);

export {
  globalReducer,
  initState,
  globalContext
}