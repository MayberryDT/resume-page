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
import ContactMe from '../contact-me/contactMe';
import Aux from '../hoc/Auxiliary';

class Layout extends React.Component {
    render() {
    return(
        <Aux>
            <Router>
                <div>
                    <Nav />
                </div>
            </Router>
            <Title />
            <AboutMe />
            <WorkExperience />
            <Education />
            <ContactMe />
        </Aux>
    )
    }
}

export default Layout;