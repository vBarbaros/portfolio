import React from 'react';
import Sidebar from './Sidebar';
import QuickNav from './QuickNav';
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <div className="portfolio-layout">
      <Sidebar />
      <main className="main-content">
        {children}
      </main>
      <QuickNav />
    </div>
  );
};

export default Layout;
