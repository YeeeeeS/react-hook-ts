import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../header';
import Footer from '../footer';

const BasicLayout: React.FC<{}> = (props) => {
  return (
    <>
      <Header />
      <ul>
        <li><Link to="pageA">线条动画效果</Link></li>
        <li><Link to="pageB">按钮动画效果</Link></li>
      </ul>
      { props.children }
      <Footer />
    </>
  )
}

export default BasicLayout;