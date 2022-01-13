import { makeStyles } from '@material-ui/core/styles'
import React from 'react'
import Header from './Header'
import { Grid, Link, Box } from '@material-ui/core'

const myStyles = makeStyles((theme)=>({
    main_Navbar_container:{
        maxWidth:"1200px",
        padding:"10px 20px",
        margin:"auto",
        textDecoration:"none",
        justifyContent:"space-between",
        position:"sticky",
        top:0,
    },
    navbar_part_first:{
        justifyContent:"space-between",
        color:"#000",
        alignItems:"center",
        maxWidth:"63.5%",
        [theme.breakpoints.down('md')]:{
            maxWidth:"70%",
        }
    },
    nav_link_text:{
        color:"#000",
        cursor:"pointer",
        fontWeight:"500",
        letterSpacing:"0.05em",
    },
    navbar_part2:{
        alignItems:"center",
        maxWidth:"35%",
        justifyContent:"end",
        [theme.breakpoints.down('md')]:{
            maxWidth:"25%",
        }
    },
    search_box:{
        backgroundColor:"#EDEDED",
        borderRadius:"6px",
        display:"flex",
        padding:"10px 8px",
        color:"#000",
        marginRight:"15px",
        [theme.breakpoints.down('md')]:{
            display:"none"
        }
    },
    search_input:{
        backgroundColor:"#ededed",
        border:"none",
        "&:focus":{
            outline:"none"
        }
    },
    logIn_box:{
        display:"flex",
        fontSize:"14px",
        marginRight:"12px",
    },
    icon_search:{
        display:"none",
        marginRight:"20px",
        [theme.breakpoints.down('md')]:{
            display:"block"
        },
    }
}))

const Navbar = () => {
    const classes = myStyles()
    return(
        <div>
        <Header />
        <Grid item container  xs={12} className={classes.main_Navbar_container}>
        <Grid item container className={classes.navbar_part_first}>
       <Link to="#"  className={classes.links_nav}><img src="/assets/Navbar/weber-logo.svg" alt="navbar" width="90" /></Link>
       <Link to="/"><p className={classes.nav_link_text}>Grills <img src="./assets/Navbar/arrow.svg" alt="arrow" width="15" /> </p></Link>
       <Link to="/"><p className={classes.nav_link_text}>Accessories <img src="./assets/Navbar/arrow.svg" alt="arrow" width="15" /> </p></Link>
       <Link to="/"><p className={classes.nav_link_text}>Discover <img src="./assets/Navbar/arrow.svg" alt="arrow" width="15" /></p></Link>
       <Link to="/"><p className={classes.nav_link_text}>Recipes <img src="./assets/Navbar/arrow.svg" alt="arrow" width="15" /></p></Link>
       <Link to="/"><p className={classes.nav_link_text}>Parts & Support <img src="./assets/Navbar/arrow.svg" alt="arrow" width="15" /></p></Link>
        </Grid>
        <Grid item container className={classes.navbar_part2}>
        <img src="./assets/Navbar/search.svg" alt='search' width="20" className={classes.icon_search} />
        
        <Box className={classes.search_box}>
        <img src="./assets/Navbar/search.svg" alt='search' width="20" />
        <input type="text" placeholder='Search...' className={classes.search_input} />
        </Box>
        <Box className={classes.logIn_box}>
        <img src="./assets/Navbar/user.svg" alt="login_user" width="25" />
        <p>Login / SignUp</p>
        </Box>
        <img src="./assets/Navbar/cart.svg" alt="cart" width="25"/>
        </Grid>
        </Grid>
        </div>
    )
}
export default Navbar;