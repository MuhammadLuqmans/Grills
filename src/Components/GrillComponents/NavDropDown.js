import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid , Link } from "@material-ui/core";
import { GasGrills } from "../Static/StaticData/NavbarGrils";

const myStyles = makeStyles((theme) => ({
  Drop_wrapper: {
    background: "#fff",
    border: "1px solid gray",
    margin: "auto",
    zIndex: "999",
    position: "absolute",
    right: 0,
    top: 101,
    left: 0,
    height:"90vh",
    width:"90vw"
  },
  Side_Bar_Menu:{
      display:"block",
      width:"300px",
  },
  Side_Bar_Menu:{
      padding:"32px",
      background:"#c1c0c08c",
      lineHeight:"30px",
      height:"80vh",
  },
  nav_side_bar_Links:{
      color:"#000"
  },
  items_box:{
      color:"#000",
      background:"#fff",
      border:"1px solid gray",
      textAlign:"center",
      margin:"14px 7px",
      borderRadius:"5px",
  }
}));

const GrillDropDown = ({DropMenu}) => {
  const classes = myStyles();
  return (
    <div>
      <div className={classes.Drop_wrapper}>
      <Grid item container xs={12}>
      <Grid item md={3} >
        <div className={classes.Side_Bar_Menu}>
          <Link className={classes.nav_side_bar_Links} onClick={()=>DropMenu()} >Gas Grills</Link><br />
          <Link className={classes.nav_side_bar_Links}>Charcoal Grills</Link><br />
          <Link className={classes.nav_side_bar_Links}>Wood Pellet Grills</Link><br />
          <Link className={classes.nav_side_bar_Links}>Electic Grills</Link><br />
          <Link className={classes.nav_side_bar_Links}>Portable Grills</Link><br />
        </div>
        </Grid>
        <Grid item container md={9}>
        <Grid item md={9}>
        <div className={classes.Dynamic_Container}>
        <Grid item container xs={12}>

        {GasGrills.map(data=>{
            return(
                <Box className={classes.items_box} key={data.id}>
                <img src={data.images} alt="items" width="140" />
                <p className={classes.items_text_titles}>{data.titles}</p>
                </Box>
            )
        })}
        </Grid>

        </div>
        </Grid>
        <Grid item md={3}>
        <img src="./assets/Navbar/main.jpg" width="100" />
        </Grid>
        </Grid>
        </Grid>
      </div>
    </div>
  );
};
export default GrillDropDown;
