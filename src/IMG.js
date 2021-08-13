import React from 'react';

import styled from 'styled-components';

const StyledImg = styled.div `

    img {
        border-radius: 15px;
        padding: 50px;
        border: 2px solid black;
    }
`

export default function IMG(props) {
    const { url } = props;

    return (
        <StyledImg >
            <img src={url}></img>
        </StyledImg >
    )
}