import React from 'react';
import Copyright from './Copyright';
import Date from './Date';

import styled from 'styled-components';

const StyledExpl = styled.div `
    margin: 0 15%;
    // border: 1px solid red;

    h3 {
        color: ${pr => pr.theme.primaryColor}
    }

    h4 {
        color: ${pr => pr.theme.primaryColor};
    }

    div {
        color: ${pr => pr.theme.secondaryColor};
    }
`

export default function Explanation(props) {
    const { explanation, date, copyright } = props;
    
    return (
        <StyledExpl >
            <Date date={date} />
            <Copyright copyright={copyright} />
            <div>{explanation}</div>
        </StyledExpl >
    )
}