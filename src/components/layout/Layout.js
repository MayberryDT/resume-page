import React from 'react';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';

import Title from '../title/Title';
import Nav from '../nav/Nav';
import AboutMe from '../about-me/AboutMe';
import WorkExperience from '../work-experience/work-experience';
import Education from '../education/Education';
import Projects from '../projects/Projects';
import Blog from '../blog/blog';
import Aux from '../hoc/Auxiliary';

class Layout extends React.Component {
    render() {
        const main = () => (
        <Aux>
            <Title />
            <AboutMe />
            <Education />
            <WorkExperience />
            <Blog />
            <Projects />
        </Aux>
        )
    return(
        <Aux>
            <Router>
                <div>
                    <Nav />
                </div>
            </Router>
            <Title />
            <AboutMe />
            <Education />
            <WorkExperience />
            <Blog />
            <Projects />
        </Aux>
    )
    }
}

export default Layout;