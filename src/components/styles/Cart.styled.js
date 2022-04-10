import styled from "styled-components";
import { keyframes } from "styled-components";

export const CartDisplay = styled.div`
    margin: 5px;
    padding: 3px;
`

export const ToggleCart = styled.button`
    padding: 8px;
    margin-right: 12px;
    border-radius: 50%;
    color: #FFD42F;
    border: 3px solid #FFD42F;
    background-color: #252A30;
    position: fixed;
    top: 10px;
    right: 0;
    z-index: 13;
    display: flex;
    justify-content: center;
    align-items: center;  
`

const cartSlideAnimation = keyframes`
    0% {width: 0;}
    100% {width: 50vw;}
`

export const CartBar = styled.div`
    width: 75vw;
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 12;
    background-color: #FFD42F;
    color: #252A30;
    padding: 3rem 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
    overflow: scroll;
    animation: ${cartSlideAnimation} 300ms ease-out;
`

export const ProdListArea = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
    width: 65vw;

    ul {
        list-style-type: none;
    }
`

export const ProdName = styled.li`
    font-weight: 700;
    font-size: small; //maybe delte
    margin-bottom: 6px;
`

export const ProdSummary = styled.summary`
    display: flex;
    align-items: center;
    gap: 1em;

    li {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 4px;
        font-size: 17px;
        padding: 4px 16px;
        background-color: #252A30;
        color: #FFD42F;
        flex-grow: 1;
        text-align: center;
        border-radius: 5px;
    }

    button {
        margin-left: auto;
        color: #252A30;
        background-color: #FFD42F;
        border: none;
        padding: 5px;
    }
`

export const FinalPrice = styled.p`
    align-self: flex-end;
    margin: 4px;

    em {
        background-color: #ccab26;
        padding: 5px 16px;
        border-radius: 16px;
        font-style: normal;
    }

    &::before {

    }
`

export const CheckOut = styled.button`
    background-color: rgba(255, 255, 255, 0);
    border: 2px solid #252A30;
    padding: 5px 24px;
    border-radius: 26px;

    &:hover, &:active {
        background-color: #252A30;
        color: #FFD42F;
    }
`