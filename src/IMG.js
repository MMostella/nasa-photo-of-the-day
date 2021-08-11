import React from 'react';

export default function IMG(props) {
    const { url } = props;

    return (
        <>
            <img src={url}></img>
        </>
    )
}