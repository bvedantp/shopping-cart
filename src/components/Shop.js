/* eslint-disable no-restricted-globals */
import React from "react";
import Nav from "./Nav";
import Card from "./Card";
import Cart from "./Cart";
import data from "../data.json"

const initialGoods = []
//reducer is seriously good, USE IT MORE
const reducer = (allGoods, action) => {
    switch (action.type) {
        case "inputProdID":
            let isIdPresent = allGoods.findIndex(element => (element.prodID === action.parentId))
            if(isIdPresent === -1) {
                return [...allGoods, {prodID: action.parentId, quantity: 1}]
            } else {
                return [...allGoods]
            }
//no longer need the above case as implemented counter on Card component
        case "inputQuantity":
            let isPresent = allGoods.findIndex(element => (element.prodID === action.parentId))
            if(isPresent === -1) {
                return [
                    ...allGoods,
                    {
                        prodID: action.parentId,
                        prodName: action.currName,
                        price: action.currPrice,
                        quantity: action.currValue
                    }
                ]
            } else {
                const stateCopy = allGoods.slice()
                stateCopy[isPresent].quantity = action.currValue
                return [...stateCopy] 
            }

        default:
                throw new Error();
    }
}

export default function Shop() {
    const [allGoods, dispatch] = React.useReducer(reducer, initialGoods)

//take prod id and quantity from card and populate state
    // const [allGoods, setAllGoods] = React.useState([])

    // function updateGoods(event) {
    //     console.log(allGoods) //in one line selected id
    //     setAllGoods(prevGoods => {
    //         return [
    //             ...prevGoods,
    //             {
    //                 prodID: event.target.parentElement.id,
    //                 quantity: event.target.previousElementSibling.value
    //             }
    //         ]
    //     })
    // }

    let Cards = data.map((item)=> {
       return <Card key={item.productID} prodID={item.productID} prodName={item.productName} price={item.productPrice} updateGoods={dispatch} /> 
    })

    console.log(allGoods)
    return(
        <div>
            <Nav />
            <Cart allGoods={allGoods} />
            {Cards}
        </div>
    )
}