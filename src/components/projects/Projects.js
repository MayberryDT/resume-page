import React from 'react';

import classes from '../../App.css';

const projects = (props) => {
    return(
        <div className={classes.projects}>
            <div className={classes.wrap}>
                <h2>Projects</h2>
                <p>
                    My upcoming, ongoing and finished 
                    projects will be listed here soon.
                </p>
                <p>Projects need changes</p>
            </div>
        </div>
    )
}

export default projects;