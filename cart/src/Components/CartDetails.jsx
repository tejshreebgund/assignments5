import styled from "styled-components";
import {AppContext} from "../AppContext/AppContext";
import {useContext, useState, useEffect} from "react";

const Cart = () => {
    const {cart, product, handleCart} = useContext(AppContext);
    console.log(cart);
    const [total, setTotal] = useState();
     useEffect(() => {
        let sum = 0;
        cart.forEach((e) => {

            sum = sum + (e.price * e.quantity);
        })
        setTotal(sum);
    },[])
    return (
        <div>
            <table>
                <tr>Invoice</tr>
                <tr>
                    <th>Name</th>
                    <th>qnty</th>
                    <th>price</th>
                    <th>Tprice</th>
                </tr>
                {
                    cart.map((e) => (
                        <tr key = {e.id}>
                            <td>{e.product_name}</td>
                            <td>{e.quantity}</td>
                            <td>{e.price}</td>
                            <td>{e.quantity * e.price}</td>
                        </tr>
                    ))
                }
                <tr>
                    <td>Total price is {
                        total
                        }</td>
                </tr>
            </table>
        </div>
    )
}

export {Cart};