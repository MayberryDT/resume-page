import React from 'react';

import classes from '../../App.css';

const education = (props) => {
    return(
        <div className={classes.education}>
            <div className={classes.wrap}>
                <h2>Education</h2>
                    <div className={classes.colNarrow}>
                        <h3>Oklahoma State University</h3>
                        <p>August 2011 - May 2017</p>
                        <p>University Studies</p>
                    {/* </div>
                    <div className={classes.colNarrow}> */}
                        <h3>Shinshu University</h3>
                        <p>September 2015 - August 2016</p>
                        <p>Intensive Japanese Study Course</p>
                    </div>
            </div>
        </div>
    )
}

export default education;