import { Box, Typography } from "@mui/material";
import React, { Fragment } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

const NewsLatter = () => {
  return (
    <Fragment>
      <Box className="NewLetterBox">
        <Typography className="SubscribeFont">Subscribe to</Typography>
        <Typography className="OurNewsFont">Our newsletter</Typography>
        <Paper
          component="form"
          className="GmailBox"
            // sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 1158 , ml:"10%", borderRadius: "100px" }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search Google Maps"
            inputProps={{ "aria-label": "search google maps" }}
          />
          <Button variant="contained" sx={{ p: "10px" }} aria-label="search">
            Subscribe
          </Button>
        </Paper>
      </Box>
    </Fragment>
  );
};

export default NewsLatter;