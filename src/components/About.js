import React from "react";
import Nav from "./Nav";
import GlobalStyles from "./styles/Global";
import { AboutBackground, Heading, Section, BlurredBox, Para, SendMail } from "./styles/About.styled"

export default function About() {
    function sendEmail(){
        window.open("mailto:bvedantp@gmail.com?subject=SendMail&body=Description");
      };

    return(
        <div>
            <GlobalStyles />
            <Nav />
            <AboutBackground />
            <Section>
                <Heading>ABOUT</Heading>
                <BlurredBox>
                    <Para>We are the number one brand when it comes to shopping for <b>glowing</b> crystals.
                        We can home deliver it to you at no cost asked. To clarify, we mean no additional cost except the delivery fee,
                        packaging fee, product handling fee, markup fee, liability fee, markdown fee, pre-insurance fee and of course who can forget GST.
                        <br/>
                        <br/>
                        But most importantly, if you liked this website and are curious to meet the <b>creator</b>,
                        feel free to contact me on <a href="https://www.linkedin.com/in/b-vedant-pandey-637a1115a/">LinkedIn</a> or go through my code on <a href="https://github.com/bvedantp/shopping-cart">Github</a>.
                    </Para>
                    <SendMail onClick={sendEmail} >Contact Me</SendMail>
                </BlurredBox>
            </Section>
        </div>
    )
}