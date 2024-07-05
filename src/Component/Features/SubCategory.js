import { Typography, Box, Button } from "@mui/material";
import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

const SubCategory = ({ categorySelected }) => {
  const categoryType = {
    Category_One: ["Top Long Course", "Top short Course", "Top Crash Course"],
    Category_Two: ["EDIC 1", "EDIC 2", "TRICS-I"],
    Category_Three: ["TRICS-IDCCM"],
    Category_Four: [
      "Nephro Critical Care Review Course",
      "Sepsis BASIC",
      " Sepsis ADVANCED",
      "Critical Care Nutrition",
    ],
  };

  const [savedPath, setSavedPath] = useState("");

  const handleCourses = ({ type }) => {
    // console.log(type);

    switch (type) {
      case "Top Crash Course": {
        console.log("sdojif");
        setSavedPath("/TopCourse");
        break;
      }
      case "EDIC 1": {
        setSavedPath("/EDIC",);
        console.log("oijn");
        break;
      }
      case "EDIC 2": {
        setSavedPath("/EDIC2",);
        console.log("oijn");
        break;
      }
      case "TRICS-IDCCM": {
        setSavedPath("/IDCCM",);
        console.log("oijn");
        break;
      }

      default:
    }
  };
  return (
    <Fragment>
      <div className="allExploreCatCards">
        
        <Box className="drNBCompleteBox">
          <h5>DrNB/DM/IFCCM Critical Care</h5>
          <div className="drNBSubSections">
          <div className="drNBTwoOptions">
          <Box className="drNBOptions">Top Long Course</Box>
          <Box className="drNBOptions-two">Top Short Course</Box>
          </div>
          <Box className="drNBOptions2ndClm">Top Crash Course</Box>
          </div>
        </Box>

        <Box className="drNBCompleteBox">
          <h5>EDIC</h5>
          <div className="drNBSubSections">
          <div className="drNBTwoOptions">
          <Box className="drNBOptions">Top Long Course</Box>
          <Box className="drNBOptions-two">Top Short Course</Box>
          </div>
          <Box className="drNBOptions2ndClm">Top Crash Course</Box>
          </div>
        </Box>

        <Box className="drNBCompleteBox">
          <h5>IDCCM</h5>
          <div className="drNBSubSections">
          <div className="drNBTwoOptions">
          <Box className="drNBOptions">Top Long Course</Box>
          <Box className="drNBOptions-two">Top Short Course</Box>
          </div>
          <Box className="drNBOptions2ndClm">Top Crash Course</Box>
          </div>
        </Box>
    </div>
      
    </Fragment>
  );
};
export default SubCategory;
