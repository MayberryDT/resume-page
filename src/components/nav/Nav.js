import React, {Component} from 'react';
import {HashLink} from 'react-router-hash-link';

import classes from '../../App.css';

class Nav extends React.Component {
    render() {
        return(
            <div className={classes.nav}>
                <HashLink to="#title" className={classes.link}>
                        Title
                </HashLink>
                <HashLink to="#aboutMe" className={classes.link}>
                        About Me
                </HashLink>
                <HashLink to="#education" className={classes.link}>
                        Education
                </HashLink>
                <HashLink to="#workExperience" className={classes.link}>
                        Work Experience
                </HashLink>
                <HashLink to="#blog" className={classes.link}>
                        Blog
                </HashLink>
                <HashLink to="#projects" className={classes.link}>
                        Projects
                </HashLink>
            </div>
        )
    }
}

export default Nav;