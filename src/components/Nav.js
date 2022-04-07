import React from "react";
import { Link } from "react-router-dom";

const Nav = ()=> {
    const [show, setShow] = React.useState(false)

    function updateShowState() {
        setShow(prevShow => !prevShow)
    }

    return(
        <div>
            <button onClick={updateShowState} >Show Nav</button>
            {show && <nav>
                <Link to="/">Home</Link> 
                <Link to="/shop">Shop</Link>
                <Link to="/about">About</Link>
            </nav>}
        </div>
    )
}

export default Nav