import React from 'react';

import classes from '../../App.css';

const wrap = (props) => (
    <div className={classes.wrap}>
        {props.children}
    </div>
);

export default wrap;