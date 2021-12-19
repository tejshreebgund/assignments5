import styled from "styled-components";
import {AppContext} from "../AppContext/AppContext";
import {useContext, useState} from "react";

const Home = () => {

    const {cart, product, handleCart} = useContext(AppContext);
    


    const Wrapper = styled.div`
        width: 1200px;
        border : 1px solid black;
        border-radius: 10px;
        margin : auto;
        display : grid;
        grid-template-columns: 33% 33% 33%;
        grid-gap : 1%;
    `
    const Container = styled.div`
        display : grid;
        grid-template-columns : 33% 33% 33%;
        grid-gap: 1%;
        border : 1px solid black;
    `
    const Image_container = styled.div`
    
            width: 100%;
            height: 100%;

    `
    const Image = styled.img`
        margin-top: 20px;
        width : 80%;
        height: 80%;
    `
    const Details = styled.div`
        display: flex;
        flex-direction: column;
    
    `
    const Name = styled.div`
        font-size: 15px;
        font-weight: bold;
        padding: 5px;
    `
    const Des = styled.div`
        padding: 5px;
        font-size: 15px;

    `
    const Price = styled.div`
        font-size: 15px;
        font-weight: bold;
        padding: 5px;
    `
    const Quantity_container = styled.div`
        border : 1px solid black;
        display: grid;
        grid-template-rows : 40% 20%;
        grid-gap: 39%;

    `
    const Quantity = styled.div`
    margin-top: 50px;
        width: 80%;
        height: 40px;
        border : 2px solid black;
        margin: auto;
        display: grid;
        grid-template-columns: 33% 33% 33%;
    `

    const Minus = styled.div`
        font-size : 30px;
        font-weight: bolder;
        margin-top: -5px;
        cursor : pointer;
    `
    const Number = styled.div`
        font-size : 20px;
        font-weight: bolder;
        height: 36px;
        padding: 2px;
        border : 1px solid black;
        
    `
    const Plus = styled.div`
        font-size : 30px;
        font-weight: bolder;
        margin-top: -5px;
        cursor : pointer;

    `

    const Button = styled.div`

    `
    const Cart_button = styled.button`
        width: 80%;
        height: 40px;
        background-color: gray;
        :hover {
            background-color: orange;
            cursor : pointer
        }
    `

        const [quantity, setQuantity] = useState(1);

        const handleQuantityMinus = (e) => {
            let index = cart.findIndex((p)=> p.id == e.id);
            if(index > -1) {
                let productItem = cart[index];
                productItem.quantity = productItem.quantity - 1;
                cart[index] = productItem;
                // console.log(cart);
            }

        }
        const handleQuantityPlus = (e) => {
            let index = cart.findIndex((p)=> p.id == e.id);
            if(index > -1) {
                let productItem = cart[index];
                productItem.quantity = productItem.quantity + 1;
                cart[index] = productItem;
                // console.log(cart);
            }

        }

    return (
        <Wrapper>
            {
                product.map((e) => (
                    <Container key = {e.id}>
                        <Image_container>
                            <Image src = {e.image_url} alt = "image" />
                        </Image_container>
                        <Details>
                            <Name>Name:- {e.product_name}</Name>
                            <Des>Desc :- {e.description}</Des>
                            <Price>Price :- ₹{e.price}</Price>
                        </Details>
                        <Quantity_container>
                            <Quantity>
                                <Minus onClick = {() => { 
                                    handleQuantityMinus(e)
                                }}>-</Minus>
                                <Number>{
                                        cart.map((p) => p.id == e.id ? `${p.quantity}` : e.quantity)
                                    }</Number>
                                <Plus onClick = {() => { 
                                    handleQuantityPlus(e)
                                }}>+</Plus>
                            </Quantity>
                            <Button>
                                <Cart_button onClick = {() => { 
                                    handleCart(e);
                                }}>
                                    Add to Cart
                                </Cart_button>
                            </Button>
                        </Quantity_container>
                    </Container>
                ))
            }
        </Wrapper>
    )
}
export {Home};