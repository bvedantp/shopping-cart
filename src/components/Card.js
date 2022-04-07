/* eslint-disable no-restricted-globals */
import React from "react";

export default function Card(props) {
    const [goodsQuantity, setGoodsQuantity] = React.useState(1)
    
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

    return(
        <div id={props.prodID} name={props.prodName} price={props.price}>
            <img alt="placeholder" />
            <h4>{props.prodName}</h4>
            <p>{props.price}</p>
            <button onClick={decrement} disabled={goodsQuantity === 1 ? true : false} >Decrement</button>
            <p>{goodsQuantity}</p>
            <button onClick={increment} >Increment</button>
            {/* <input type="number" min="1" onChange={(event)=>props.updateGoods({type:"inputQuantity", parentId: event.target.parentElement.id,  currValue: Math.abs(event.target.value)})} /> */}
            <button onClick={(event)=>props.updateGoods({type:"inputQuantity", parentId: event.target.parentElement.id, currValue: goodsQuantity, currName: props.prodName, currPrice: props.price})} >Add to Cart</button>
        </div>
    )
}