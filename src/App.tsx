import React, { useReducer, useContext } from 'react';
import { Switch, HashRouter, Route, Redirect } from 'react-router-dom';
import routers, { IRouterProps } from './router';
import BasicLayout from './components/layout';
import page404 from './views/404';

import { initState, globalContext, globalReducer } from './reducer';

const App: React.FC<{}> = () => {
  let   store   = useReducer(globalReducer, initState);
  const [state] = store;

  return (
    <globalContext.Provider value = {store}>
      <HashRouter >
        <Switch>
          {routers.map((item: IRouterProps, key: number) => {
            return (
              <Route
                key = {key}
                exact
                path   = {item.path}
                render = {(props: any) => {
                  if (!item.isLogin || state.isLogin) {
                    if (item.name === 'login') {
                      return ( <item.component {...props} /> )
                    }
                    else {
                      return (
                        <BasicLayout {...props}>
                          <item.component {...props} />
                        </BasicLayout>
                      )
                    }
                  }
                  else {
                    return <Redirect exact to = {'/login'} />;
                  }
                }}
              />
            );
          })}
          <Route component = {page404}  />
        </Switch>
      </HashRouter>
    </globalContext.Provider>
  );
}

export default App;
