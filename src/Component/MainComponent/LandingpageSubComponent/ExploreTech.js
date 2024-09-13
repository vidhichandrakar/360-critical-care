import React, { Fragment } from "react";
import { Typography, Box, Button, colors } from "@mui/material";
import building from "../../../Media/Images/hospnew.png";
import transparentOverBuilding from "../../../Media/Images/Rectangle 6.png";
import ExcelInCC from "../../../Media/Images/ExcelInCriticalCareImg.png";
const ExploreTech = () => {
  return (
    <Fragment>
      <div class="Imgcontainer">
        <img src={building} alt="Snow" className="BuildingImg" />
        <img src={transparentOverBuilding} className="transparentBlue" />
        <div class="centered">
          <Box className="ImgBoxData">
            <Box
              sx={{
                backgroundColor: "#FFF3E3",             
              }}
               className="DataCardBox"
            >
              <h1 className="aboutExploreClasses-head">
                <b>800+</b>
              </h1>
              <p className="aboutExploreClasses-para">
                <b>Students</b>
              </p>
            </Box>
            <Box
              sx={{
                backgroundColor: "#ffeeee",
               }}
                className="DataCardBox"
            >
              <h1 className="aboutExploreClasses-head">
                <b>3+</b>
              </h1>
              <p className="aboutExploreClasses-para">
                <b>Glorious Years</b>
              </p>
            </Box>
            <Box
             className="DataCardBox"
              sx={{
                backgroundColor: "#e4faff",
                  }}
            >
              <h1 className="aboutExploreClasses-head">
                <b>90%</b>
              </h1>
              <p className="aboutExploreClasses-para">
                <b>Success Rate</b>
              </p>
            </Box>
            <Box
              sx={{
                backgroundColor: "#ece7ff",
              }}
              className="DataCardBox"
            >
              <h1 className="aboutExploreClasses-head">
                <b>100+</b>
              </h1>
              <p className="aboutExploreClasses-para">
                <b>Teaching Videos</b>
              </p>
            </Box>
          </Box>
        </div>
      </div>
      <img src={ExcelInCC} height={240} className="excelInCriticalcareImg" /> 
    </Fragment>
  );
};
export default ExploreTech;
