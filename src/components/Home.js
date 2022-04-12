import React from "react";
import Nav from "./Nav";
import GlobalStyles from "./styles/Global";
import { faPersonWalkingArrowRight } from "@fortawesome/free-solid-svg-icons";
import { HomeBase, Heading, CanvasArea, 
    TextArea, WelcomeText, IconBorder, StylLink } from "./styles/Home.styled";
import glowingRock from "../images/glowRock2.gif"

export default function Home() {
    return(
        <div>
            <GlobalStyles />
            <Nav />
            <HomeBase>
                <Heading><b>Glow</b> <br/>Show</Heading>
                <CanvasArea>
                </CanvasArea>
                <TextArea>
                    <WelcomeText>
                        <p>Our features:</p>
                        <li>Shop around to find <b>glowing</b> rocks that give various abilities.</li>
                        <li>Found from the rarest of places, we provide only the <b>top notch</b> crystals.</li>
                        <li>Home delivery available at no extra cost.</li>
                        <li>Get <b>exclusive</b> deals as you level up.</li>
                        <li>Our philosophy is the mightier you are, the more bargaining power you gain.</li>
                        <li>This last point is just there to pad length.</li>
                        <li>Why are you still reading...go click the button below to shop for <b>awesome</b> crystals.</li>
                    </WelcomeText>
                    <StylLink to="/shop">Enter <IconBorder icon={faPersonWalkingArrowRight} /> </StylLink>
                </TextArea>
            </HomeBase>
        </div>
    )
}