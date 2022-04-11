import React from "react";
import Nav from "./Nav";
import GlobalStyles from "./styles/Global";
import { faPersonWalkingArrowRight } from "@fortawesome/free-solid-svg-icons";
import { HomeBase, Heading, CanvasArea, 
    TextArea, WelcomeText, IconBorder } from "./styles/Home.styled";

export default function Home() {
    return(
        <>
            <GlobalStyles />
            <Nav />
            <HomeBase>
                <Heading>Glow Show</Heading>
                <CanvasArea>
                    <canvas></canvas>
                </CanvasArea>
                <TextArea>
                    <WelcomeText>
                        <p>Our features:</p>
                        <li>Shop around to find <b>glowing</b> rocks that give various abilities.</li>
                        <li>Found from the rarest of places, we provide only the <b>top notch</b> crystals.</li>
                        <li>Home delivery available at no extra cost.</li>
                        <li>Get <b>exclusive</b> deals as you level up.</li>
                    </WelcomeText>
                    <button>Shop Now <IconBorder icon={faPersonWalkingArrowRight} /> </button>
                </TextArea>
            </HomeBase>
        </>
    )
}