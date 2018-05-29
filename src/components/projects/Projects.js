import React from 'react';

import classes from '../../App.css';

const projects = (props) => {
    return(
        <div className={classes.projects}>
            <div className={classes.wrap} id="projects">
                <div className={classes.colNarrow}>
                    <h2>Projects</h2>
                </div>
                <div className={classes.colWide}>
                    <p>
                        My upcoming, ongoing and finished 
                        projects will be listed here soon.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default projects;