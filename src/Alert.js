import React, { useState, useEffect } from 'react';

export default function Alert({ msg, type }) {
    //declare new state variable and initialize it's state to false
    const [display, setdisplay] = useState(false);
    //to be run after every render, the effect is passed to it
    useEffect(() => {
        if (msg) {
            setdisplay(true);
            setInterval(() => {
                setdisplay(false);
            }, 2000); //set display to false every 2 seconds
        }
    }, [msg]); //only re-run if msg changes
    return <>{display && <div className={`alert alert-${type}`}>{msg}</div>}</>;
}
