import styled from "styled-components";
import AboutBg from "../AboutBg";

export const AboutBackground = styled(AboutBg)`
    position: absolute;
    top: 0;
    left: 0;
`
export const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 4vh 20px 0 30px;
`

export const Heading = styled.h2`
    font-size: 3em;
    z-index: 3;
`

export const BlurredBox = styled.div`
    border: 3px solid #FFD42F;
    background-color: #252a3034;
    border-radius: 10px;
    padding: 8px;
    z-index: 4;
    backdrop-filter: blur(6px);
    display: flex;
    flex-direction: column;
`

export const Para = styled.p`
    font-size: small;

    b {
        color: #FFD42F;
    }

    a {
        color: #FFD42F;
        font-weight: 700;

        &:hover, &:active {
            background-color: #FFD42F;
            color: black;
        }
    }
`

export const SendMail = styled.button`
    margin: 14px;
    margin-bottom: 5px;
    padding: 8px;
    border-radius: 9px;
    color: #FFD42F;
    border: 1px solid #FFD42F;
    background-color: rgba(0,0,0,0.2);

    &:hover, &:active {
        box-shadow: 0 0 5px #FFD42F;
        background-color: #ffd52f58;
    }
`