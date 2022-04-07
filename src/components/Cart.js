import React from "react";

export default function Cart(props) {
    const [show, setShow] = React.useState(false)

    function updateShowState() {
        setShow(prevShow => !prevShow)
    }

    const allProdList = props.allGoods.map((item, index) => {
        return (<ul key={index} >
            <li>{item.prodName}</li>
            <li>{item.quantity}</li>
            <li>{item.price}</li>
        </ul>)
    })

    const finalPrice = props.allGoods.reduce((prevValue, currValue)=> {
        return prevValue + (currValue.quantity * currValue.price) 
    },0)

    function checkOut(){
        alert('Yay, you did the thing!!')
    }

    return(
        <div>
            <button onClick={updateShowState} >Show Cart</button>
            {show && <div>
                <h2>Shopping Cart</h2>
                <div>
                    {allProdList}
                </div>
                <p>Final Price: {finalPrice}</p>
                <button onClick={checkOut} >Checkout</button>
            </div>}
        </div>
    )
}