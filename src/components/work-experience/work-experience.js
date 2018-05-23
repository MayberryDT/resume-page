import React from 'react';

import classes from '../../App.css';

const workExperience = (props) => {
    return(
        <div className={classes.workExperience}>
            <div className={classes.wrap}>
                <h2>Work Experience</h2>
                <div className={classes.colNarrow}>
                    <h3>ESL Teacher</h3>
                    <p>AtoZ Corporation</p>
                    <p>March 2018 - Present</p>
                </div>
                <div className={[classes.colWide, classes.description, classes.marginTop].join(' ')}>
                    <p>
                        I teach kids from kindergarden to junior high 
                        English on a daily basis, foster team
                        teaching skills, working with other teachers 
                        with multiple languages, creating 
                        and executing well-designed lesson plans, while 
                        adhereing to a structured curriculum.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default workExperience;