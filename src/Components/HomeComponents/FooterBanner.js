import { Grid ,Box,Button,Link, Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const myStyles = makeStyles((theme)=>({
    Footer_Background:{
        backgroundImage:"url(./assets/Banners/HomeFooter.webp)",
        backgroundRepeat:"no-repeat",
        backgroundPosition:"center",
        backgroundSize:"cover",
        padding:"40px 20px",
        marginTop:"40px",
    },
    Footer_wrapper:{
        color:"#fff",
    },
    footer_title:{
        fontSize:"36px",
        fontWeight:"600",
        marginBottom:"8px",
        letterSpacing:"0.05em",
        [theme.breakpoints.down('sm')]:{
            fontSize:"28px",
        }
    },
    Input_footer:{
        backgroundColor:"#fff",
        borderRadius:5,
        padding:"5px 5px 5px 10px",
        maxWidth:"310px",
        display:"flex",
        justifyContent:"space-between",

    },
    input_Button:{
        backgroundColor:"red",
        color:"#fff",
        fontWeight:"600",
        padding:"10px",
        width:"182px",
        border:"2px solid red",
        borderRadius:"5px",
    },
    input:{
        border:"none",
        fontSize:"16px",
        fontWeight:"500",
        color:"#000",
        outline:"none",
    },
    footer_Icons:{
        alignItems:"center",
        display:"flex",
        justifyContent:"space-between",
        paddingLeft:"50px",
        color:"#fff",
        fontSize:"30px",
        maxWidth:"500px",
        [theme.breakpoints.down('sm')]:{
            padding:0,
            marginTop:"25px",
        }
    },
    small_text:{
        fontSize:"14px",
        fontWeight:400,
        letterSpacing:"0.05em",
    },
    bold_text:{
        fontSize:"16px",
        fontWeight:600,
        color:"#fff",
        letterSpacing:"0.07em",
    },
    sub_text_of_title:{
        fontSize:"18px",
        marginBottom:"20px",
        fontWeight:"500",
    }
}))

const HomeFooter = () => {
    const classes = myStyles()
    return(
        <div  className={classes.Footer_Background}>
        <div className={classes.Footer_wrapper}>
        <h2 className={classes.footer_title}>Join Our Community</h2>
        <Typography className={classes.sub_text_of_title}>Email updates from our community of grill masters, food enthusiasts, and lovers of outdoor cooking.</Typography>
        <Grid item container xs={12}>
        <Grid item xs={12} sm={12} md={4}>
        <Box className={classes.Input_footer}>
        <input type="text" placeholder='Email Address' className={classes.input} />
        <button className={classes.input_Button}>Sign up</button>
        </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <Box className={classes.footer_Icons}>
        <a href="#" ><img src="./assets/Social/FaceBook.svg" alt="facebook icons" width="40" className={classes.Icons_all} /></a>
        <a href="#" ><img src="./assets/Social/InstaGram.svg" alt="facebook icons" width="40" className={classes.Icons_all} /></a>
        <a href="#" ><img src="./assets/Social/Printes.svg" alt="facebook icons" width="40" className={classes.Icons_all} /></a>
        <a href="#" ><img src="./assets/Social/Twitter.svg" alt="facebook icons" width="40" className={classes.Icons_all} /></a>
        <a href="#" ><img src="./assets/Social/Youtube.svg" alt="facebook icons" width="40" className={classes.Icons_all} /></a>
        </Box>
        </Grid>
        </Grid>
        <p className={classes.small_text}>This site is protected by re<Link className={classes.bold_text}><u>CAPTCHA</u></Link> and the</p>
        <p className={classes.small_text}>Google <Link className={classes.bold_text}><u>Privacy Policy</u></Link> and <Link className={classes.bold_text}><u>Terms of Service</u></Link> apply.</p>
        </div>
        </div>
    )
}
export default HomeFooter