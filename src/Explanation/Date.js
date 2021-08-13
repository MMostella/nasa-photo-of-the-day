import React, { useImperativeHandle } from 'react';

import styled from 'styled-components';

const StyledDate = styled.div `
    margin: 0 43%;
`

export default function Date(props) {
    const { date } = props;

    return (
        <StyledDate >
            <h3>{date}</h3>
        </StyledDate >
    )
}