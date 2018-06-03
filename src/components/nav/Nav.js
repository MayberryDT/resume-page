import React, {Component} from 'react';
import {HashLink} from 'react-router-hash-link';

import classes from '../../App.css';

class Nav extends React.Component {
    render() {
        return(
            <div className={classes.nav}>
                <HashLink to="#aboutMe" className={classes.link}>
                        About
                </HashLink>
                <HashLink to="#workExperience" className={classes.link}>
                        Work Experience
                </HashLink>
                <HashLink to="#education" className={classes.link}>
                        Education
                </HashLink>
                <HashLink to="#contactMe" className={classes.link}>
                        Contact
                </HashLink>
                {/* <HashLink to="#blog" className={classes.link}>
                        Blog
                </HashLink>
                <HashLink to="#projects" className={classes.link}>
                        Projects
                </HashLink> */}
            </div>
        )
    }
}

export default Nav;