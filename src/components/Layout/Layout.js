import React from 'react';
import Header from '../Header/Header';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <div className="main-content">
        <div className="inner">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
