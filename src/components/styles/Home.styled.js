import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const HomeBase = styled.div`
    margin: 3vh 12px;
    padding: 10px;
    display: flex;
    gap: 2em;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Heading = styled.h1`
    color: #FFD42F;
    margin: 0;
    padding: 5px;
    font-size: 3em;
`

export const CanvasArea = styled.div`
    position: fixed;
    top: 20%;
    left: -10%;
    width: 50vw;
    height: 70vh;
    
`

export const TextArea = styled.section`
    align-self: flex-end;
    display: flex;
    flex-direction: column;
    gap: 1.5em;
    width: 50vw;
    
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