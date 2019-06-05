import React from 'react';
import './App.css';
import BannerContainer from './components/MainBanner/BannerContainer';
import ProjectsContainer from './components/Projects/ProjectsContainer';

function App() {
  return (
    <div className="App">
      <BannerContainer />
      <ProjectsContainer />
    </div>
  );
}

export default App;
