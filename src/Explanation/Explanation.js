import React from 'react';
import Copyright from './Copyright';
import Date from './Date';

export default function Explanation(props) {
    const { explanation, date, copyright } = props;
    
    return (
        <>
            <Date date={date} />
            <Copyright copyright={copyright} />
            <div>{explanation}</div>
        </>
    )
}