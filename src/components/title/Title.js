import React from 'react';

import classes from '../../App.css';

const title = (props) => {
    return(
        <div className={classes.title}>
            <div className={classes.wrap}>
                <h1>Tyler Mayberry</h1>
                <h3>Personal Site</h3>
            </div>
        </div>
    )
}

export default title;