import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, 
    faAddressCard,
    faSquareH,
    faSpider,
    faArrowsToDot,
    faMeteor,
    faShuttleSpace,
    faGauge,
    faDungeon,
    faSignature,
    faFireFlameCurved,
    faBarsProgress,
    faRobot,
    faPuzzlePiece,
    faUserSecret,
    faEye,
    faBiohazard,
    faRadiation,
    faSnowflake,
    faAtom, 
    faAnkh} from '@fortawesome/free-solid-svg-icons';

const Container = styled.section`
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
`

const Row = styled.div`
    position: relative;
    top: -25%;
    left: -6%;
    width: 100%;
    display: flex;
    padding: 10px 0;
    white-space: nowrap;
    font-size: 30px;
    transform: rotate(-30deg);
    
`

const iconGlow = keyframes`
    0% {color: #252A30;}
    50% {color: #FFD42F}
    100% {color: #252A30;}
    `

const IconGlowed = styled(FontAwesomeIcon)`
    color: #252A30;
    padding: 5px;
    transition: 3s;
    user-select: none;
    cursor: default;
    filter: drop-shadow(0 0 6px #FFD42F);
    animation: ${iconGlow} 12s ease-in-out 1s infinite normal both;
`

const Icon = styled(FontAwesomeIcon)`
    color: #252A30;
    padding: 5px;
    transition: 3s;
    user-select: none;
    cursor: default;

    &:hover, &:active {
        transition: 50ms;
        color: #FFD42F;
        filter: drop-shadow(0 0 6px #FFD42F); //because fontawesome are svg icons and so text-shadow won't work
    }
`

const linesSlide = keyframes`
    0% {transform: translateX(100%);}
    100% {transform: translateX(-100%);}
`

const linesSlide2 = keyframes`
    0% {transform: translateX(0%); }
    100% {transform: translateX(-200%);}
`

const InnerDiv = styled.div`
    animation: ${linesSlide} 80s linear infinite;
    animation-delay: -80s;

    &:nth-child(2) {
        animation: ${linesSlide2} 80s linear infinite;
        animation-delay: -40s;
    }

`

export default function AboutBg({ className: aboutBackground }){
//passed className otherwise styled compoentns wont work

    let arre = Array.from(Array(18)).map((item,index)=> {
        return(
            <Row key={index}>
                    <InnerDiv>
                        <Icon icon={faCoffee} />
                        <Icon icon={faAddressCard} />
                        <Icon icon={faArrowsToDot} />
                        <Icon icon={faAtom} />
                        <Icon icon={faBarsProgress} />
                        <Icon icon={faBiohazard} />
                        {(Math.floor(Math.random()*10)) > 8 ? <IconGlowed icon={faDungeon} /> : <Icon icon={faDungeon} />}
                        <Icon icon={faGauge} />
                        <Icon icon={faShuttleSpace} />
                        <Icon icon={faSignature} />
                        <Icon icon={faRadiation} />
                        {(Math.floor(Math.random()*10)) > 8 ? <IconGlowed icon={faRobot} /> : <Icon icon={faRobot} />}
                        <Icon icon={faPuzzlePiece} />
                        <Icon icon={faEye} />
                        <Icon icon={faUserSecret} />
                        <Icon icon={faSnowflake} />
                        <Icon icon={faFireFlameCurved} />
                        <Icon icon={faMeteor} />
                        {(Math.floor(Math.random()*10)) > 8 ? <IconGlowed icon={faSpider} /> : <Icon icon={faSpider} />}
                        <Icon icon={faSquareH} />
                    </InnerDiv>
                    <InnerDiv>
                    <Icon icon={faCoffee} />
                    <Icon icon={faAddressCard} />
                    <Icon icon={faArrowsToDot} />
                    {(Math.floor(Math.random()*10)) > 8 ? <IconGlowed icon={faAtom} /> : <Icon icon={faAtom} />}
                    <Icon icon={faBarsProgress} />
                    <Icon icon={faBiohazard} />
                    <Icon icon={faDungeon} />
                    <Icon icon={faGauge} />
                    <Icon icon={faShuttleSpace} />
                    <Icon icon={faSignature} />
                    {(Math.floor(Math.random()*10)) > 8 ? <IconGlowed icon={faRadiation} /> : <Icon icon={faRadiation} />}
                    <Icon icon={faPuzzlePiece} />
                    <Icon icon={faEye} />
                    <Icon icon={faUserSecret} />
                    <Icon icon={faAnkh} />
                    <Icon icon={faSnowflake} />
                    {(Math.floor(Math.random()*10)) > 8 ? <IconGlowed icon={faFireFlameCurved} /> : <Icon icon={faFireFlameCurved} />}
                    <Icon icon={faMeteor} />
                    <Icon icon={faSpider} />
                    <Icon icon={faSquareH} />
                    </InnerDiv>
            </Row>

        )
    })
    return(
        <Container className={aboutBackground}>
            {arre}
        </Container>
    )
}