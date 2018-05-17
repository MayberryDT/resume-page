import React from 'react';

import Title from '../title/Title';
import AboutMe from '../about-me/AboutMe';
import WorkExperience from '../work-experience/work-experience';
import Education from '../education/Education';
import Projects from '../projects/Projects';
import Aux from '../hoc/Auxiliary';

const layout = (props) => {
    return(
        <Aux>
            <Title />
            <AboutMe />
            <WorkExperience />
            <Education />
            <Projects />
        </Aux>
    )
}

export default layout;