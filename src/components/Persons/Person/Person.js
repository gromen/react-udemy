import React from 'react';
import Input from './../../../Input';

import classes from './person.css';

const person = ( props ) => {
    const { name, clicked, age, changeValue } = props;

    return (
        <div className={classes.person} onClick={clicked}>
            <p>I'm {name} and I am {age} years old!</p>
            <Input change={changeValue}/>
        </div>
    )
};

export default person;