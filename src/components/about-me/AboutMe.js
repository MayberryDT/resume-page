import React from 'react';

import classes from '../../App.css'

const aboutMe = (props) => {
    return(
        <div className={classes.aboutMe}>
            <div className={classes.wrap}>
                <h2>About Me</h2>
                <p>
                    I come from Oklahoma in the United States and 
                    I am currently an Assistant Language Teacher 
                    in the city of Matsumoto, Japan. 
                </p>
                <p>
                    Recently I have decided to improve my 
                    web-development skills in order to become
                    a freelance web-developer to fulfill my 
                    dream of becoming location independent so
                    that I can travel the world freely while 
                    also creating applications that sound fun.
                </p>
                <p>
                    This website is the first of many web 
                    publications to come. I plan on sharing my
                    progress through blog posts, videos, and 
                    whatever else seems appropriate. All of 
                    which, can be found on this site.
                </p>
            </div>
        </div>
    )
}

export default aboutMe;