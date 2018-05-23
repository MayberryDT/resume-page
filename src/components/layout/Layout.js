import React from 'react';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';

import Title from '../title/Title';
import AboutMe from '../about-me/AboutMe';
import WorkExperience from '../work-experience/work-experience';
import Education from '../education/Education';
import Projects from '../projects/Projects';
import Blog from '../blog/blog';
import Aux from '../hoc/Auxiliary';

const layout = (props) => {
    return(
        <Aux>
            <Title />
            <AboutMe />
            <Education />
            <WorkExperience />
            <Blog />
            <Projects />
        </Aux>
    )
}

export default layout;