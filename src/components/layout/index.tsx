import React from 'react';
import Header from '../header';
import Footer from '../footer';

const BasicLayout: React.FC<{}> = (props) => {
  return (
    <>
      <Header/>
      { props.children }
      <Footer />
    </>
  )
}

export default BasicLayout;