import {createContext, useState} from "react";

const AppContext = createContext();
const AppContextProvider = ({children}) => {

    const products = [{
        "id": 1,
        "quantity" : 134,
        "product_name": "abc",
        "image_url": "http://dummyimage.com/200x200.jpg/dddddd/000000",
        "description": "what what what",
        
      }, {
        "id": 2,
        "product_name": "def",
        "quantity" : 145,

        "image_url": "http://dummyimage.com/200x200.png/dddddd/000000",
        "description": "sssssssssssssssssssssssssssssssssssssssssss",
        
      }, {
        "id": 3,
        "quantity" : 167,

        "product_name": "ghi",
        "image_url": "http://dummyimage.com/200x200.jpg/ff4444/ffffff",
        "description": "yesssssssssssssssssssssssssssssss",
      
      }]

      const [product, setProduct] = useState(products);
      const [cart, setCart] = useState([]);

      const handleCart = (data) => {
        let index = cart.findIndex((p)=> p.id == data.id);
        if(index > -1) {
            let productItem = cart[index];
            productItem.quantity = productItem.quantity + 1;
            cart[index] = productItem;
            // console.log(cart);
        } else {
          setCart([...cart, data]);
        }
          
      }
      // const handleQuantity = (id, val) {

      // }

    return (
        <AppContext.Provider value = {{product, cart, handleCart}}>
            {children}
        </AppContext.Provider>
    )
}

export {AppContext, AppContextProvider};