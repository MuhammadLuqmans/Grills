import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import ShopVariations from './ShopVariations'
import ShopCards from './ShopCards'

const myStyles = makeStyles((theme)=>({
    shop_Layout:{
        maxWidth:"1200px",
        margin:"auto",
        marginTop:"40px",
    },
    shop_items_container:{
        padding:"20px",
    },
    variation_Container:{
        padding:"20px 14px",
    }
}))

const GrillsPageLayout = () =>{
    const classes = myStyles()
    return(
        <div>
        <Grid item container sx={12} className={classes.shop_Layout}>
        <Grid item md={3} className={classes.variation_Container}>
        <ShopVariations />
        </Grid>
        <Grid item md={9} className={classes.shop_items_container}>
        <ShopCards />
        </Grid>
        </Grid>
        </div>
    )
}
export default GrillsPageLayout;