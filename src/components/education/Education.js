import React from 'react';

import classes from '../../App.css';

const education = (props) => {
    return(
        <div className={classes.education}>
            <div className={classes.wrap}>
                <h2>Education</h2>
                <div>
                    <h3>Oklahoma State University</h3>
                    <p>University Studies</p>
                </div>
                <div>
                    <p>
                        I studied Management Science and Information 
                        Systems, as well as Japanese Language, merging 
                        the two to form a Universities Studies degree.
                    </p>
                </div>
                <div>
                    <h3>Shinshu University</h3>
                    <p>Intensive Japanese Study Course</p>
                </div>
                <div>
                    <p>
                        I went through a year long course that immersed 
                        me in the Japanese language, improving my skills 
                        greatly while also taking other courses related 
                        to my major in Japanese-spoken classes.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default education;