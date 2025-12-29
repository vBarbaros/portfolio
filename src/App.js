import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import Baeldung from './pages/Baeldung/Baeldung';
import Medium from './pages/Medium/Medium';
import Substack from './pages/Substack/Substack';
import ArticleViewer from './components/ArticleViewer/ArticleViewer';
import './assets/styles/normalize.css';
import './assets/styles/variables.css';
import './assets/styles/architect-theme.css';

function App() {
  return (
    <HelmetProvider>
      <Router basename="/portfolio">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/baeldung" element={<Baeldung />} />
            <Route path="/baeldung/:id" element={<ArticleViewer platform="Baeldung" />} />
            <Route path="/medium" element={<Medium />} />
            <Route path="/medium/:id" element={<ArticleViewer platform="Medium" />} />
            <Route path="/substack" element={<Substack />} />
            <Route path="/substack/:id" element={<ArticleViewer platform="Substack" />} />
          </Routes>
        </Layout>
      </Router>
    </HelmetProvider>
  );
}

export default App;
