import Flippy, { FrontSide, BackSide } from 'react-flippy';
import styled from 'styled-components';
import { keyframes } from 'styled-components';

export const Container = styled(Flippy)`
    max-width: 300px;
    padding: 4px;
    margin: 8px;
`

export const FrontCard = styled(FrontSide)`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid #FFD42F;
    border-radius: 8px;

    img {
        min-width: 270px;
        min-height: 250px;
        margin-top: -12px;
        border-radius: 8px;
        object-fit: cover;
    }
`

export const Heading = styled.h3`
    font-size: 1.4em;
    text-align: center;
    color: #FFD42F;
`

export const ShowMore = styled.div`
    display: flex;
    gap: 1em;
    justify-content: space-around;
    align-items: center;
    margin: 8px 6px 0 6px;
`

export const Price = styled.p`
    font-weight: 700;
    font-size: 1.1em;
    background-color: #2b3136;
    padding: 4px 38px;
    border-radius: 18px;
`

export const FlipToBack = styled.button`
    background-color: #1B2025;
    color: #FFD42F;
    padding: 5px;
    font-size: 1.1em;
    border: 2px solid #FFD42F;
    border-radius: 6px;

    &:hover, &:active {
        background-color: #FFD42F;
        color: #1B2025;
        border: 2px solid #ffd52f0;
    }
`
//for animation pass props using arrow function, not the normal way
const pulsingLight = (props) => keyframes`
    0% {
        box-shadow: 0 0 15px ${props.accentcolor};
    }

    20% {
        box-shadow: 0 0 15px #1B2025;
    }

    40% {
        box-shadow: 0 0 15px ${props.maincolor};
    }

    70% {
        box-shadow: 0 0 15px #1B2025;
    }

    100% {
        box-shadow: 0 0 15px ${props.accentcolor};
    }

`

export const BackCard = styled(BackSide)`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid #FFD42F;
    border-radius: 8px;
    animation: ${pulsingLight} 6s ease-in-out infinite normal both;
`

export const CloseBtn = styled.button`
    align-self: flex-end;
    color: #FFD42F;
    border: none;
    background-color: #1B2025;
    cursor: pointer;
`

export const Description = styled.section`
    padding: 10px;
    text-align: center;
    margin: 8px;
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    text-overflow: ellipsis;
    pointer-events: none;
    background-color: #2b3136;
    border-radius: 8px;

`

export const QuantityBox = styled.div`
    display: flex;
    align-items: center;
    margin: 15px 2px;

    button {
        margin-top: 3px;
        color: #FFD42F;
        background-color: #1B2025;
        border: none;
        font-size: 1.5em;
    }

    p {
        margin: 0 10px;
        text-align: center;
        font-weight: 600;
        padding: 4px 50px;
        border: 2px solid #FFD42F;
        border-radius: 7px;
    }
`

export const AddToCart = styled.button`
    margin-top: 5px;
    padding: 3px 10px;
    border-radius: 18px;
    text-align: center;
    border: none;
    background-color: #FFD42F;
    opacity: 0.6;
    transition: opacity 100ms ease-in;

    &:hover, &:active {
        opacity: 1;
        box-shadow: 0 0 12px #FFD42F;
    }
`