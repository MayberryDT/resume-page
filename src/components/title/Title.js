import React from 'react';

import classes from '../../App.css';

const title = (props) => {
    return(
        <div className={classes.title}>
            <div className={classes.wrap} id="title">
                <h1>Tyler Mayberry</h1>
                <h3>(work in progress)</h3>
            </div>
        </div>
    )
}

export default title;