/* eslint-disable no-restricted-globals */
import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillTransfer, faCircleXmark, faIndianRupeeSign, faSquarePlus, faSquareMinus } from "@fortawesome/free-solid-svg-icons";
import { Container, FrontCard, BackCard, Heading, 
    ShowMore, Price, FlipToBack, CloseBtn,
    Description, QuantityBox, AddToCart } from "./styles/Card.styled";

export default function Card(props) {
    const [goodsQuantity, setGoodsQuantity] = React.useState(1)
    const [flipState, setFlipState] = React.useState(false)
    
    function increment() {
        setGoodsQuantity(prevQuantity => {
            return prevQuantity+1
        })
    }

    function decrement() {
        setGoodsQuantity(prevQuantity => {
            return prevQuantity-1
        })
    }

    function flipIt() {
        setFlipState(prevState=> !prevState)
    }
    
    return(
        <Container isFlipped={flipState} flipOnClick={false} flipDirection="horizontal">
            <FrontCard>
                <img src={require(`../images/${props.prodImg}.jpg`)} alt="placeholder" />
                <Heading>{props.prodName}</Heading>
                <ShowMore>
                    <Price><FontAwesomeIcon icon={faIndianRupeeSign} /> {props.price}</Price>
                    <FlipToBack onClick={flipIt} > <FontAwesomeIcon icon={faMoneyBillTransfer} /></FlipToBack>
                </ShowMore>
            </FrontCard>
            <BackCard maincolor={props.color1} accentcolor={props.color2} >
                <CloseBtn onClick={flipIt} > <FontAwesomeIcon icon={faCircleXmark} /> </CloseBtn>
                <Description>{props.prodDes}</Description>
                <QuantityBox>
                    <button onClick={decrement} disabled={goodsQuantity === 1 ? true : false} ><FontAwesomeIcon icon={faSquareMinus} /></button>
                    <p>{goodsQuantity}</p>
                    <button onClick={increment} ><FontAwesomeIcon icon={faSquarePlus} /></button>
                </QuantityBox>
                <AddToCart onClick={(event)=>props.updateGoods({type:"inputQuantity", parentId: props.prodID, currValue: goodsQuantity, currName: props.prodName, currPrice: props.price})} >Add to Cart</AddToCart>
            </BackCard>
            {/* <input type="number" min="1" onChange={(event)=>props.updateGoods({type:"inputQuantity", parentId: event.target.parentElement.id,  currValue: Math.abs(event.target.value)})} /> */}
        </Container>
    )
}