import { Card ,Button } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const myStyles = makeStyles((theme)=>({
    Shop_Cards:{
        maxWidth:"300px",
    },
    Card_images:{
        height:"280px",
        border:"1px solid #d3d0d0",
        "&:hover":{
            src:"./assets/Grills/Stars.svg"
        }
    },
    contents_cards:{
        padding:"10px 20px",
    },
    review_stars:{
        display:"flex",
        width:"95px",
        justifyContent:"space-between",
    },
    price_and_Cart:{
        display:"flex",
        justifyContent:"space-between",
        border:"2px solid gary"
    },
    cart_btn:{
        border:"1px solid red",
        color:"#fff",
        background:"red",
        height:"50px",
        width:"80px",
        borderRadius:"5px",
        cursor:"pointer",
    }
}))

const ShopCards = () => {
    const classes = myStyles()
    return(
        <div>
        <Card className={classes.Shop_Cards}>
        <img src="https://product-images.weber.com/Grill-Images/Charcoal/18501101BR_1800x1800.png?w=400&h=400&auto=compress%2cformat" alt='cards assets' width="100%" className={classes.Card_images}/>
        <div className={classes.contents_cards}>
        <p className={classes.shop_Card_titles}>Summit® Kamado S6 Charcoal Grill Center</p>
        <div className={classes.review_stars}>
        <img src='./assets/Grills/Stars.svg' alt="stars" width="20" />
        <img src='./assets/Grills/Stars.svg' alt="stars" width="20" />
        <img src='./assets/Grills/Stars.svg' alt="stars" width="20" />
        <img src='./assets/Grills/Stars.svg' alt="stars" width="20" />
        </div>
        <div className={classes.price_and_Cart}>
        <p>$1,949.00</p>
        <button className={classes.cart_btn}><img src='./assets/Grills/Carts.svg' alt="cart" width="25px"/></button>
        </div>
        </div>
        </Card>
        </div>
    )
}
export default ShopCards;