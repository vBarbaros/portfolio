# In-Place Jekyll to React Migration Guide

## Overview
This guide converts your existing Jekyll portfolio to React while keeping the same directory name and location at `/Users/victor/Documents/projects/portfolio`.

## Step 1: Backup and Prepare

### 1.1 Backup Current Jekyll Project
```bash
# Create backup of current Jekyll project
cd /Users/victor/Documents/projects
cp -r portfolio portfolio-jekyll-backup

# Navigate to portfolio directory
cd portfolio
```

### 1.2 Clean Current Directory
```bash
# Remove Jekyll-specific files (keep assets and content for migration)
rm -rf _site .jekyll-cache
rm Gemfile Gemfile.lock jekyll-theme-architect.gemspec
rm -rf _sass _layouts _includes script docs
```

## Step 2: Initialize React Project

### 2.1 Initialize React in Current Directory
```bash
# Initialize npm project
npm init -y

# Install React dependencies
npm install react react-dom react-scripts react-router-dom react-helmet-async
npm install --save-dev gh-pages

# Create React project structure
mkdir -p src/components/{Header,Footer,Layout,PlatformCard}
mkdir -p src/pages/{Home,Baeldung,Medium,Substack}
mkdir -p src/assets/{images,styles}
mkdir -p src/{data,utils}
mkdir -p public
```

### 2.2 Update Package.json
```bash
# Replace package.json content
cat > package.json << 'EOF'
{
  "name": "victor-barbarosh-portfolio",
  "version": "0.1.0",
  "homepage": "https://vBarbaros.github.io/portfolio",
  "private": true,
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.8.0",
    "react-helmet-async": "^1.3.0",
    "react-scripts": "5.0.1"
  },
  "devDependencies": {
    "gh-pages": "^5.0.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
EOF
```

## Step 3: Create Public Files

### 3.1 Create public/index.html
```bash
cat > public/index.html << 'EOF'
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta name="description" content="Victor Barbarosh - Full-Stack Developer & DevOps Portfolio" />
    <title>Victor Barbarosh Portfolio</title>
    
    <!-- Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-XGREHZMB6R"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-XGREHZMB6R');
    </script>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
EOF
```

### 3.2 Create public/manifest.json
```bash
cat > public/manifest.json << 'EOF'
{
  "short_name": "VB Portfolio",
  "name": "Victor Barbarosh Portfolio",
  "start_url": ".",
  "display": "standalone",
  "theme_color": "#000000",
  "background_color": "#ffffff"
}
EOF
```

## Step 4: Migrate Assets

### 4.1 Move Images
```bash
# Move existing images to React assets
mv assets/images/* src/assets/images/
```

### 4.2 Create CSS Files
```bash
# Create base styles
cat > src/assets/styles/variables.css << 'EOF'
:root {
  --primary-color: #2e7bcf;
  --secondary-color: #151515;
  --text-color: #373737;
  --background-color: #f2f2f2;
  --header-bg: linear-gradient(#373737, #2d2d2d);
  --font-family: 'Helvetica Neue', Helvetica, Arial, serif;
}
EOF

# Create architect theme CSS (converted from SCSS)
cat > src/assets/styles/architect-theme.css << 'EOF'
/* Architect Theme Styles */
* {
  box-sizing: border-box;
}

body {
  font-family: var(--font-family);
  font-size: 15px;
  font-weight: 400;
  line-height: 1.5;
  color: var(--text-color);
  background: var(--background-color);
}

.header {
  background: var(--header-bg);
  border-bottom: solid 1px #275da1;
  padding: 35px 0;
  color: #fff;
}

.header .inner {
  max-width: 650px;
  margin: 0 auto;
  text-align: center;
}

.header h1 {
  margin: 0;
  font-size: 48px;
  font-weight: bold;
  letter-spacing: -1px;
}

.header h2 {
  margin: 0;
  font-size: 24px;
  font-weight: normal;
  color: #9ddcff;
}

.main-content {
  max-width: 650px;
  margin: 0 auto;
  padding: 20px;
}

.platform-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.platform-card {
  background: #fff;
  border: 1px solid #d8d8d8;
  border-radius: 3px;
  padding: 20px;
  text-align: center;
}

@media (max-width: 768px) {
  .header h1 {
    font-size: 32px;
  }
  
  .header h2 {
    font-size: 18px;
  }
  
  .platform-grid {
    grid-template-columns: 1fr;
  }
}
EOF

# Create normalize CSS
cat > src/assets/styles/normalize.css << 'EOF'
/* Normalize CSS */
html {
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
}

body {
  margin: 0;
}

main {
  display: block;
}

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

a {
  background-color: transparent;
  color: #2879d0;
  text-decoration: none;
}

a:hover {
  color: #2268b2;
  text-decoration: underline;
}

img {
  border-style: none;
  max-width: 100%;
  height: auto;
}
EOF
```

## Step 5: Create React Components

### 5.1 Main App Component
```bash
cat > src/App.js << 'EOF'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import Baeldung from './pages/Baeldung/Baeldung';
import Medium from './pages/Medium/Medium';
import Substack from './pages/Substack/Substack';
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
            <Route path="/medium" element={<Medium />} />
            <Route path="/substack" element={<Substack />} />
          </Routes>
        </Layout>
      </Router>
    </HelmetProvider>
  );
}

export default App;
EOF
```

### 5.2 Layout Component
```bash
cat > src/components/Layout/Layout.js << 'EOF'
import React from 'react';
import Header from '../Header/Header';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main className="main-content">
        {children}
      </main>
    </div>
  );
};

export default Layout;
EOF
```

### 5.3 Header Component
```bash
cat > src/components/Header/Header.js << 'EOF'
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="inner">
        <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
          <h1>Victor Barbarosh Portfolio</h1>
        </Link>
        <h2>Full-Stack Developer & DevOps Specialist</h2>
      </div>
    </header>
  );
};

export default Header;
EOF
```

### 5.4 Platform Card Component
```bash
cat > src/components/PlatformCard/PlatformCard.js << 'EOF'
import React from 'react';
import { Link } from 'react-router-dom';

const PlatformCard = ({ platform, linkTo }) => {
  return (
    <div className="platform-card">
      <img src={platform.image} alt={platform.name} style={{ width: '60px', height: '60px', marginBottom: '10px' }} />
      <h3>{platform.name}</h3>
      <p>{platform.description}</p>
      <Link to={linkTo} style={{ display: 'inline-block', marginTop: '10px', padding: '8px 16px', background: '#2879d0', color: 'white', borderRadius: '3px', textDecoration: 'none' }}>
        View Articles
      </Link>
    </div>
  );
};

export default PlatformCard;
EOF
```

## Step 6: Create Content Data

### 6.1 Content Data File
```bash
cat > src/data/content.js << 'EOF'
export const personalInfo = {
  name: "Victor Barbarosh",
  title: "Full-Stack Developer & DevOps",
  description: "Seasoned Full-Stack Software Developer and DevOps specialist at Ericsson with over 5 years of experience",
  education: "Master of Science (M.Sc.) in Computer Science from McGill University",
  linkedin: "https://www.linkedin.com/in/victor-barbarosh-56a03743",
  github: "https://github.com/vBarbaros"
};

export const platforms = {
  baeldung: {
    name: "Baeldung",
    url: "https://www.baeldung.com/editor/victorbarbarosh",
    description: "In-depth articles on Java Core and Spring Framework",
    image: "/assets/images/baeldung.png"
  },
  medium: {
    name: "Medium",
    url: "https://medium.com/@geeks.sw.gig",
    description: "Creative writings, haikus, and technical content",
    image: "/assets/images/medium.png"
  },
  substack: {
    name: "Substack",
    url: "https://substack.com/@theanatomyofanalgorithm",
    description: "Data Structures, Algorithms, and Full-Stack Development",
    image: "/assets/images/substack.png"
  }
};

export const experience = [
  {
    title: "Senior Full Stack & DevOps Developer",
    company: "Ericsson",
    period: "October 2022 – Present",
    description: "Leading full-stack development projects with SpringBoot, Angular, and PostgreSQL"
  },
  {
    title: "Full Stack Software Developer",
    company: "Ericsson",
    period: "May 2019 – October 2022",
    description: "Developed critical features using PHP, Angular, and SpringBoot"
  }
];
EOF
```

## Step 7: Create Page Components

### 7.1 Home Page
```bash
cat > src/pages/Home/Home.js << 'EOF'
import React from 'react';
import { Helmet } from 'react-helmet-async';
import PlatformCard from '../../components/PlatformCard/PlatformCard';
import { personalInfo, platforms, experience } from '../../data/content';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Victor Barbarosh - Full-Stack Developer Portfolio</title>
        <meta name="description" content={personalInfo.description} />
      </Helmet>
      
      <section style={{ marginBottom: '40px' }}>
        <h1>Full-Stack Developer & DevOps</h1>
        <p>{personalInfo.description}</p>
        <p>I hold a {personalInfo.education}, specializing in intelligent systems and machine learning.</p>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2>Writing Contributions</h2>
        <div className="platform-grid">
          <PlatformCard platform={platforms.baeldung} linkTo="/baeldung" />
          <PlatformCard platform={platforms.medium} linkTo="/medium" />
          <PlatformCard platform={platforms.substack} linkTo="/substack" />
        </div>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2>Professional Experience</h2>
        {experience.map((job, index) => (
          <div key={index} style={{ marginBottom: '20px', padding: '15px', background: '#fff', border: '1px solid #d8d8d8', borderRadius: '3px' }}>
            <h3 style={{ margin: '0 0 5px 0' }}>{job.title}</h3>
            <h4 style={{ margin: '0 0 5px 0', color: '#666' }}>{job.company}</h4>
            <p style={{ margin: '0 0 10px 0', fontStyle: 'italic', color: '#888' }}>{job.period}</p>
            <p style={{ margin: '0' }}>{job.description}</p>
          </div>
        ))}
      </section>

      <section>
        <p>Connect with me on <a href={personalInfo.linkedin}>LinkedIn</a> or <a href={personalInfo.github}>GitHub</a></p>
      </section>
    </>
  );
};

export default Home;
EOF
```

### 7.2 Platform Pages
```bash
# Baeldung page
cat > src/pages/Baeldung/Baeldung.js << 'EOF'
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Baeldung = () => {
  return (
    <>
      <Helmet>
        <title>Baeldung Articles - Victor Barbarosh</title>
        <meta name="description" content="Java Core and Spring Framework articles by Victor Barbarosh" />
      </Helmet>
      
      <h1>Baeldung Articles</h1>
      <p>In-depth articles on Java Core and Spring Framework.</p>
      
      <div style={{ marginTop: '20px' }}>
        <a href="https://www.baeldung.com/editor/victorbarbarosh" target="_blank" rel="noopener noreferrer" 
           style={{ display: 'inline-block', padding: '10px 20px', background: '#2879d0', color: 'white', borderRadius: '3px', textDecoration: 'none' }}>
          Visit Baeldung Profile
        </a>
      </div>
      
      <Link to="/" style={{ display: 'block', marginTop: '20px' }}>← Back to Home</Link>
    </>
  );
};

export default Baeldung;
EOF

# Medium page
cat > src/pages/Medium/Medium.js << 'EOF'
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Medium = () => {
  return (
    <>
      <Helmet>
        <title>Medium Articles - Victor Barbarosh</title>
        <meta name="description" content="Creative writings and technical content by Victor Barbarosh" />
      </Helmet>
      
      <h1>Medium Articles</h1>
      <p>Creative writings, haikus, and technical content related to software development and AI.</p>
      
      <div style={{ marginTop: '20px' }}>
        <a href="https://medium.com/@geeks.sw.gig" target="_blank" rel="noopener noreferrer"
           style={{ display: 'inline-block', padding: '10px 20px', background: '#2879d0', color: 'white', borderRadius: '3px', textDecoration: 'none' }}>
          Visit Medium Profile
        </a>
      </div>
      
      <Link to="/" style={{ display: 'block', marginTop: '20px' }}>← Back to Home</Link>
    </>
  );
};

export default Medium;
EOF

# Substack page
cat > src/pages/Substack/Substack.js << 'EOF'
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Substack = () => {
  return (
    <>
      <Helmet>
        <title>Substack Articles - Victor Barbarosh</title>
        <meta name="description" content="Data Structures, Algorithms, and Full-Stack Development articles" />
      </Helmet>
      
      <h1>Substack Articles</h1>
      <p>Focused on Data Structures, Algorithms, and Full-Stack Development topics.</p>
      
      <div style={{ marginTop: '20px' }}>
        <a href="https://substack.com/@theanatomyofanalgorithm" target="_blank" rel="noopener noreferrer"
           style={{ display: 'inline-block', padding: '10px 20px', background: '#2879d0', color: 'white', borderRadius: '3px', textDecoration: 'none' }}>
          Visit Substack Profile
        </a>
      </div>
      
      <Link to="/" style={{ display: 'block', marginTop: '20px' }}>← Back to Home</Link>
    </>
  );
};

export default Substack;
EOF
```

### 7.3 Create index.js
```bash
cat > src/index.js << 'EOF'
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
EOF
```

## Step 8: Clean Up and Deploy

### 8.1 Remove Old Files
```bash
# Remove remaining Jekyll files
rm -rf posts-* thumbnail.png LICENSE README.md _config.yml
rm -rf assets # (already moved to src/assets)
```

### 8.2 Install Dependencies and Test
```bash
# Install all dependencies
npm install

# Test the application
npm start
# Visit http://localhost:3000 to verify everything works
```

### 8.3 Deploy to GitHub Pages
```bash
# Build and deploy
npm run build
npm run deploy

# Update GitHub repository settings to use gh-pages branch
```

## Step 9: Update Repository

### 9.1 Commit Changes
```bash
git add .
git commit -m "Convert Jekyll portfolio to React"
git push origin main
```

### 9.2 Configure GitHub Pages
- Go to repository Settings → Pages
- Source: Deploy from a branch
- Branch: gh-pages / (root)
- Save

## Verification Checklist

- [ ] React app runs locally (`npm start`)
- [ ] All routes work (/, /baeldung, /medium, /substack)
- [ ] Images display correctly
- [ ] Styling matches original design
- [ ] SEO meta tags present
- [ ] Google Analytics working
- [ ] GitHub Pages deployment successful
- [ ] Mobile responsive design
- [ ] External links work

## File Structure After Migration
```
portfolio/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   ├── pages/
│   ├── assets/
│   ├── data/
│   ├── App.js
│   └── index.js
├── package.json
└── README.md (create new)
```

This migration keeps your portfolio in the same directory while converting it to a modern React application with the same visual design and functionality.
