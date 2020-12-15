import Loadable from 'react-loadable';
import loadPage from '../components/loading';

const Login = Loadable({
  loader : () => import('../views/login'),
  loading: loadPage
})

const Home = Loadable({
  loader : () => import('../views/home'),
  loading: loadPage
})

const pageA = Loadable({
  loader : () => import('../views/pageA'),
  loading: loadPage
})

const pageB = Loadable({
  loader : () => import('../views/pageB'),
  loading: loadPage
})

const pageC = Loadable({
  loader : () => import('../views/pageC'),
  loading: loadPage
})

const pageD = Loadable({
  loader : () => import('../views/pageD'),
  loading: loadPage
})

export interface IRouterProps {
  name?    : string,
  path?    : string,
  component: any,
  isLogin? : boolean
}

const routers: IRouterProps[] = [
  {
    name     : 'login',
    path     : '/login',
    component: Login,
    isLogin  : false
  },  
  {
    name     : 'home',
    path     : '/',
    component: Home,
    isLogin  : true
  },  
  {
    name     : 'pageA',
    path     : '/pageA',
    component: pageA,
    isLogin  : true
  },  
  {
    name     : 'pageC',
    path     : '/pageC',
    component: pageB,
    isLogin  : true
  },
  {
    name     : 'pageC',
    path     : '/pageC',
    component: pageC,
    isLogin  : true
  },
  {
    name     : 'pageD',
    path     : '/pageD',
    component: pageD,
    isLogin  : true
  }  
]

export default routers;