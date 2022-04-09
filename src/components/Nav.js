import React from "react";
import {Navigation, NavExpand, NavBar, StyledLink} from "./styles/Nav.styled";
//import { Link } from "react-router-dom";

const Nav = ()=> {
    const [show, setShow] = React.useState(false)

    function updateShowState() {
        setShow(prevShow => !prevShow)
    }

    return(
        <Navigation>
            <NavExpand isClicked={show} onClick={updateShowState} >➤</NavExpand>
            {show && <NavBar>
                <StyledLink to="/">Home</StyledLink> 
                <StyledLink to="/shop">Shop</StyledLink>
                <StyledLink to="/about">About</StyledLink>
            </NavBar>}
        </Navigation>
    )
}

export default Nav