import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faTrashCan, faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
import { ToggleCart, CartDisplay, CartBar, 
    ProdListArea, ProdName, ProdSummary, 
    FinalPrice, CheckOut } from "./styles/Cart.styled";

export default function Cart(props) {
    const [show, setShow] = React.useState(false)

    function updateShowState() {
        setShow(prevShow => !prevShow)
    }

    const allProdList = props.allGoods.map((item, index) => {
        return (<ul key={index} >
            <ProdName>{item.prodName}</ProdName>
            <ProdSummary>
                <li>{item.quantity}</li>
                <li>₹ {item.price}</li>
                <button onClick={()=> props.updateGoods({type:"deleteItem", parentId: item.prodID})} ><FontAwesomeIcon icon={faTrashCan} /></button>
            </ProdSummary>
        </ul>)
    })

    const finalPrice = props.allGoods.reduce((prevValue, currValue)=> {
        return prevValue + (currValue.quantity * currValue.price) 
    },0)

    function checkOut(){
        alert('Yay, you did the thing!!')
    }

    return(
        <CartDisplay>
            <ToggleCart onClick={updateShowState} ><FontAwesomeIcon icon={faCartShopping} /></ToggleCart>
            {show && <CartBar>
                <h2>Shopping Cart</h2>
                <ProdListArea>
                    {allProdList}
                </ProdListArea>
                <FinalPrice><b>Total :</b> <em><FontAwesomeIcon icon={faIndianRupeeSign} /> {finalPrice}</em> </FinalPrice>
                <CheckOut onClick={checkOut} >Checkout</CheckOut>
            </CartBar>}
        </CartDisplay>
    )
}