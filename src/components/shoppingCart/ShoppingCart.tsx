import React, { useState } from "react";
import { Button, Typography } from '@material-ui/core';




export const ShoppingCart: React.FC = () => {
    const [cart, modifyCart] = useState({ name: "apple", count: 20 });

    const handleClickVeggie = (rand: number) => {
        let veg = ["potato", "onion", "lettuce", "tomato"]
        modifyCart({ name: veg[rand], count: cart.count })
        console.log(veg[rand])

    }

    return (

        <div>
            <h1>Choose your veggie and add it to the cart</h1>
            <Typography>{cart.name}{cart.count}{modifyCart}</Typography>
            <Button onClick={() => handleClickVeggie(0)}>Potato</Button>
            <Button onClick={() => handleClickVeggie(1)}>Onion</Button>
            <Button onClick={() => handleClickVeggie(2)}>Lettuce</Button>
            <Button onClick={() => handleClickVeggie(3)}>Tomato</Button>
            <button onClick={() => modifyCart({ name: cart.name, count: cart.count + 1 })}>+</button>
            <button onClick={() => modifyCart({ name: cart.name, count: cart.count - 1 })}>-</button>
        </div>

    );
};
