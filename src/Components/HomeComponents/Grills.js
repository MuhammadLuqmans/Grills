import React from "react";
import { Typography, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { Data, MeetData } from "./CardData";
import HomeSlider from "./Slider";

const myStyles = makeStyles((theme) => ({
  Grill_Title: {
    fontSize: "44px",
    color: "#000",
    textAlign: "center",
    marginTop: "50px",
    fontWeight: "600",
    fontFamily: "Roboto Slab",
    [theme.breakpoints.down("sm")]: {
      fontSize: "32px",
    },
  },
  Banner_card: {
    backgroundImage: "url(./assets/Banners/Ban.jpg)",
    width: "100%",
    backgroundRepeat: "none",
    backgroundSize: "cover",
    textAlign: "right",
    color: "#fff",
    height: "570px",
    marginTop: "80px",
    alignItem: "center",
    [theme.breakpoints.down("md")]: {
      height: "400px",
    },
    [theme.breakpoints.down("sm")]: {
      height: "300px",
    },
  },
  sub_title_item: {
    fontSize: "20px",
    fontWeight: 600,
  },
  title_items: {
    fontSize: "46px",
    fontWeight: 700,
    margin: "0px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "32px",
      fontWeight: "600",
    },
  },
  text_wrapper: {
    maxWidth: "800px",
    paddingTop: "180px",
    margin: "auto",
    padding: "20px",
    [theme.breakpoints.down("md")]: {
      paddingTop: "120px",
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: "80px",
    },
  },
  button_card_banner: {
    backgroundColor: "red",
    textAlign: "center",
    padding: "10px",
    width: 152,
    fontWeight: 700,
    letterSpacing: "0.09em",
    marginTop: "20px",
    borderRadius: "5px",
    "&:hover": {
      backgroundColor: "brown",
    },
  },
  card_full_Grills: {
    maxWidth: "360px",
    display: "flex-blox",
    boxShadow: "4px 4px 8px gray",
  },
  card_Image: {
    // width:"100%",
  },
  card_content: {
    padding: "20px 10px",
    color: "#000",
  },
  Grill_card_title: {
    fontSize: "26px",
    color: "#232323",
    fontFamily: "Roboto Slab",
    fontWeight: 600,
    textDecoration: "underline",
    underlineColor: "red",
    underlineWidth: "0px",
    transform: "4s",
    "&:hover": {
      color: "#000",
      textDecoration: "underline",
      underlineWidth: "100%",
    },
  },
  Grill_card_discription: {
    fontWeight: 600,
    color: "#232323",
  },
  mainDiv: {
    margin: "10px auto",
  },
  btn_header: {
    border: "1px solid red",
    background: "linear-gradient(red, red)",
    borderRadius: "5px",
    color: "#fff",
    fontWeight: "500",
    width: "152px",
    padding: "8px 0px",
    textTransform: "capitalize",
    fontSize: "16px",
    fontFamily: "Roboto Slab",
    letterSpacing: "0.05em",
    marginTop: "20px",
  },
}));

const Grills = () => {
  const classes = myStyles();
  return (
    <div className="mt-10 max-w-[1170px] mx-auto">
      <Typography className={classes.Grill_Title}>Find Your Grill</Typography>
      <Grid item xs={12}>
        <HomeSlider />
      </Grid>
      <div className={classes.Banner_card}>
        <div className={classes.text_wrapper}>
          <h1 className={classes.sub_title_item}>
            TOOLS, COOKWARE, GEAR & MORE
          </h1>
          <h2 className={classes.title_items}>New Year, New Accessories​</h2>
          <Button variant="contained" className={classes.btn_header}>
            Shop Now
          </Button>
        </div>
      </div>
      <Typography className={classes.Grill_Title}>
        Our Favorite Picks
      </Typography>
      <Grid item container xs={12} spacing={3} className={classes.mainDiv}>
        {Data.map((data) => {
          return (
            <Grid
              item
              key={data.id}
              xs={12}
              sm={6}
              md={4}
              lg={4}
              className={classes.Card_Grid}
            >
              <div className={classes.card_full_Grills}>
                <div className={classes.card_Image}>
                  <img src={data.imageGrill} alt="mainCard" width="100%" />
                </div>
                <div className={classes.card_content}>
                  <Link to="#">
                    <Typography className={classes.Grill_card_title}>
                      {data.title}
                    </Typography>
                  </Link>
                  <Typography className={classes.Grill_card_discription}>
                    {data.discription}
                  </Typography>
                </div>
              </div>
            </Grid>
          );
        })}
      </Grid>
      
      <Typography className={classes.Grill_Title}>
        Our Favorite Picks
      </Typography>
      <Grid item container xs={12} spacing={3} className={classes.mainDiv}>
        {MeetData.map((data) => {
          return (
            <Grid
              item
              key={data.id}
              xs={12}
              sm={6}
              md={4}
              lg={4}
              className={classes.Card_Grid}
            >
              <div className={classes.card_full_Grills}>
                <div className={classes.card_Image}>
                  <img src={data.imageGrill} alt="mainCard" width="100%" />
                </div>
                <div className={classes.card_content}>
                  <Link to="#">
                    <Typography className={classes.Grill_card_title}>
                      {data.title}
                    </Typography>
                  </Link>
                  <Typography className={classes.Grill_card_discription}>
                    {data.discription}
                  </Typography>
                </div>
              </div>
            </Grid>
          );
        })}
      </Grid>
      
    </div>
  );
};

export default Grills;
