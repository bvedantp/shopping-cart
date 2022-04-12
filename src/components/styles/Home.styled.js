import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { keyframes } from "styled-components";
import glowingRock from "../../images/glowRock2.gif"


export const HomeBase = styled.div`
    margin: 3vh 12px;
    padding: 10px;
    display: flex;
    gap: 2em;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const glowing = keyframes`
    0% {text-shadow: 0 0 2px #FFD42F;}
    5% {text-shadow: 0 0 18px #69603b;}
    8% {text-shadow: 0 0 20px #FFD42F;}
    12% {text-shadow: 0 0 2px #69603b;}
    14% {text-shadow: 0 0 18px #FFD42F;}
    20% {text-shadow: 0 0 18px #FFD42F;}
    40% {text-shadow: 0 0 18px #FFD42F;}
    42% {text-shadow: 0 0 2px #69603b;}
    46% {text-shadow: 0 0 18px #FFD42F;}
    50% {text-shadow: 0 0 18px #FFD42F;}
    60% {text-shadow: 0 0 18px #FFD42F;}
    100% {text-shadow: 0 0 18px #FFD42F;}
`

export const Heading = styled.h1`
    color: whitesmoke;
    margin: 0;
    padding: 5px;
    text-align: center;
    font-size: 1em;

    b {
        color: #FFD42F;
        font-weight: 800;
        font-size: 4em;
        animation: ${glowing} 5s ease-in 0s infinite normal forwards;
    }
`

export const CanvasArea = styled.div`
    position: fixed;
    top: 20%;
    left: 0%;
    width: 50vw;
    height: 77vh;
    background: url(${glowingRock});
    transform: rotate(180deg);
    z-index: -1;
/* 
    img {
        position: absolute;

    top: 20%;
    left: -10%;
    width: 50vw;
    height: 70vh;
    object-fit: cover;
         clip: rect(0px,200px,200px,100px);
    } */
`

export const TextArea = styled.section`
    align-self: flex-end;
    display: flex;
    flex-direction: column;
    gap: 1.5em;
    width: 40vw;
    
    /* position: fixed;
    padding: 2rem;
    right: -4%;
    top: 30vh; */
    button {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 4px 12px;
        border: 2px solid #FFD42F;
        border-radius: 6px;
        color: #FFD42F;
        background-color: rgba(255, 213, 47, 0);
        text-align: right;

        &:hover {
            background-color: #FFD42F;
            color: #1B2025;
        }
    }

`
export const StylLink = styled(Link)`
    display: flex;
        justify-content: space-between;
        text-decoration: none;
        align-items: center;
        padding: 4px 12px;
        border: 2px solid #FFD42F;
        border-radius: 6px;
        color: #FFD42F;
        background-color: rgba(255, 213, 47, 0);
        text-align: right;

        &:hover {
            background-color: #FFD42F;
            color: #1B2025;
        }
`

export const WelcomeText = styled.ul`
    line-height: 1.2em;
    
    p {
        font-weight: 700;
        margin-bottom: 15px;
    }

    li::marker {
        color: #FFD42F;
        font-weight: bold;
    }

    b{
        color: #FFD42F;
    }
`

export const IconBorder = styled(FontAwesomeIcon)`
    border-left: 3px solid #FFD42F;
    padding-left: 9px;
`