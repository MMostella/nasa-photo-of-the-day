import React from 'react';

import styled from 'styled-components';

const StyledTitle = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 150%;
    text-decoration: underline;
    color: ${pr => pr.theme.primaryColor};
`

export default function Title(props){
    
    const { title } = props;

    return (
        <StyledTitle >
            <h1>{title}</h1>
        </StyledTitle >
    )
}