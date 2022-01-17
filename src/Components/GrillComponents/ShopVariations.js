import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const myStyles = makeStyles((theme) => ({
  Tites_variations: {
    fontSize: "32px",
    fontWeight: "700",
    color: "#000",
    lineHeight: "40px",
    marginBottom: "10px",
  },
  filters_heading: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "18px",
    fontWeight: 700,
  },
  shop_types: {
    fontSize: "18px",
    fontWeight: 700,
    marginBottom: "5px",
  },
  ul_lis: {
    border: "2px solid gray",
    listStyleType: "none",
  },
  check_box: {
    border: "2px solid black",
    height: "15px",
    width: "15px",
    borderRadius: "50%",
    display: "flex-box",
    marginRight: "10px",
    color: "#fff",
    margin: "5px",
    "&:hover": {
      backgroundColor: "red",
      color: "red",
    },
  },
  displays: {
    display: "flex",
    alignItems: "center",
    lineHeight: "10px",
  },
}));

const ShopVariations = () => {
  const classes = myStyles();
  return (
    <div>
      <Box className={classes.Variations_wrappers}>
        <p className={classes.Tites_variations}>Summit® Kamado</p>
        <div className={classes.filters_heading}>
          <p>Filter By</p>
          <p>Clear Filter</p>
        </div>
        <div>
          <p className={classes.shop_types}>Type</p>
          <hr />
          <div>
            <input type="checkbox" className={classes.check_box} />
            <label>Charcoal Grills</label>
            <ul className={classes.ul_lis}>
              <li>
                <div className={classes.displays}>
                  <p className={classes.check_box}>.</p>
                  <label>Charcoal Grills</label>
                </div>
              </li>
              <li>
                <div className={classes.displays}>
                  <p className={classes.check_box}>.</p>
                  <label>Charcoal Grills</label>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <p className={classes.shop_types}>Prices</p>
          <hr />
          <div>
            <input type="checkbox" className={classes.check_box} />
            <label>$1,000 - $1,499</label>
            <ul className={classes.ul_lis}>
              <li>
                <div className={classes.displays}>
                  <p className={classes.check_box}>.</p>
                  <label>Charcoal Grills</label>
                </div>
              </li>
              <li>
                <div className={classes.displays}>
                  <p className={classes.check_box}>.</p>
                  <label>$1,000 - $1,499</label>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Box>
    </div>
  );
};
export default ShopVariations;
