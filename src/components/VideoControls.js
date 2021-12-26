import styled, { css } from 'styled-components'

export const VideoWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin:auto;
    align-item: center;
`

export const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem auto;
    align-item: center;
`

export const VideoShowButton = styled.button`  
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: auto;
    padding: 0.25em 1em;

    ${props => props.primary && css`
    background: palevioletred;
    color: white;
    `}
    `;
