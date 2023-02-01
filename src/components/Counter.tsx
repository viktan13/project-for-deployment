import React, {useState} from 'react';
import classes from './Counter.module.scss';

export const Counter = () => {

    const [count, setCount] = useState(0);



    return (
        <div >
            <h2>{count}</h2>
            <button className={classes.btn} onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};

