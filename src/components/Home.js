import React from "react";
import Nav from "./Nav";
import GlobalStyles from "./styles/Global";

export default function Home() {
    return(
        <>
            <GlobalStyles />
            <Nav />
            <div>
                <h1>Glowing(glowing glows) Crystals(this does not)</h1>
                <div>
                    <p>Placeholder for 3d model</p>
                </div>
                <div>
                    <ul>
                        <li>Ho Ho Ho</li>
                        <li>Ho Ho Ho</li>
                        <li>Hoe Ho Hoe</li>
                        <li>Ho Ho Ho</li>
                    </ul>
                    <button>Shop Now</button>
                </div>
            </div>
        </>
    )
}