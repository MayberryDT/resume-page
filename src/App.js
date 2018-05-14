import React, { Component } from 'react';
import './App.css';

import Title from './components/title/Title';
import AboutMe from './components/about-me/AboutMe';
import WorkExperience from './components/work-experience/work-experience';
import Education from './components/education/Education';
import Projects from './components/projects/Projects';
// import Wrap from './components/wrap/Wrap';
import Aux from './components/hoc/Auxiliary';

class App extends Component {
  render() {
    return (
      <Aux>
          <Title />
          <AboutMe />
          <WorkExperience />
          <Education />
          <Projects />
      </Aux>
    );
  }
}

export default App;
