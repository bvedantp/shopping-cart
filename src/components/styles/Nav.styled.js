import styled, { keyframes } from "styled-components"
import { Link } from "react-router-dom"

export const Navigation = styled.div`
    margin: 5px;
    padding: 3px;
`

export const NavExpand = styled.button`
    padding: 2px 6px;
    border-radius: 50%;
    color: #252A30;
    border: 3px solid #FFD42F;
    background-color: #FFD42F;
    position: fixed;
    z-index: 9;
    transition: transform 300ms ease;
    transform: ${(props)=> (props.isClicked ? "rotate(180deg)" : "rotate(0deg)")};
    /*used props to animate button on click */
`

const navSlideAnimation = keyframes`
    0% {width: 0;}
    30% {width: 15vw;}
    60% {width: 35vw;}
    100% {width: 50vw;}
`

const navSlideAnimation2 = keyframes`
    0% {width: 0;}
    30% {width: 5vw;}
    60% {width: 15vw;}
    100% {width: 20vw;}
`

export const NavBar = styled.nav`
    width: 50vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 8;
    background-color: #252A30;
    padding: 6rem 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
    overflow: hidden; //to not see underline during animation
    animation-name: ${navSlideAnimation};
    animation-duration: 300ms;

    @media only screen and (min-width: 900px) {
        width: 20vw;
        animation-name: ${navSlideAnimation2};
        animation-duration: 300ms;
    }
`

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: whitesmoke;
    position: relative;
    font-weight: 800;
    opacity: 0.8;
    transition: opacity 100ms ease-in;

    &:hover {
        color: #FFD42F;
        opacity: 1;
    }

    &:after {
        content: '';

        width: 200%;
        position: absolute;
        left: -40px;
        color: #FFD42F;
        bottom: -7px;
        border-width: 1px 10px;
        border-style: solid;
    }
`