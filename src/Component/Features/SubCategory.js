import { Typography, Box, Button, colors } from "@mui/material";
import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import ExcelInCC from "../../Media/Images/ExcelInCriticalCareImg.png"

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
        setSavedPath("/EDIC");
        console.log("oijn");
        break;
      }
      case "EDIC 2": {
        setSavedPath("/EDIC2");
        console.log("oijn");
        break;
      }
      case "TRICS-IDCCM": {
        setSavedPath("/IDCCM");
        console.log("oijn");
        break;
      }

      default:
    }
  };
  return (
    <Fragment>
      {/* <div>
        <p>thisssss</p>
      </div> */}
      <div className="allExploreCatCards">
        <Box className="drNBCompleteBox">
          <div className="drNBCompleteBox-left">
            <h5>DrNB/DM/IFCCM Critical Care</h5>
            <div className="drNBSubSections">
              <div className="drNBTwoOptions">
                <Box className="drNBOptions">Top Long Course</Box>
                <Box className="drNBOptions-two">Top Short Course</Box>
              </div>
              <Box className="drNBOptions2ndClm">Top Crash Course</Box>
            </div>
          </div>

          <div>
            <Box className="blueSemiCircle">
              <p>icon</p>
            </Box>
          </div>
        </Box>

        <Box className="drNBCompleteBox">
          <h5>
            <b>EDIC</b>
          </h5>
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

        <Box className="exploreTechEnabledBox">
          {/* <img src={} width={} height={} /> */}
          <h2 sx={{color:"#ffffff"}}><b>Explore Tech-Enabled Online Classes</b></h2>
          <p sx={{color:"#ffffff"}}>Creating new benchmarks in learning expirences</p>

          <Box className="aboutExploreClasses">
            <Box sx={{backgroundColor:"#FFF3E3", borderRadius:"9px", width:"135px", height:"114px"}}>
              {/* <img scr={img11} width={50} height={50}/> */}
              <h1>800+</h1>
              <p>Students</p>
            </Box>
            {/* <Box className="verticalDivider"></Box> */}
            <Box sx={{backgroundColor:"#FFEEEE", borderRadius:"9px", width:"135px", height:"114px"}}>
              <h1>3+</h1>
              <p>Glorious Years</p>
            </Box>
            <Box sx={{backgroundColor:"#E4FAFF", borderRadius:"9px", width:"135px", height:"114px"}}>
              <h1>90%</h1>
              <p>Success Rate</p>
            </Box>
            <Box sx={{backgroundColor:"#ECE7FF", borderRadius:"9px", width:"135px", height:"114px"}}>
              <h1>100+</h1>
              <p>Teaching Videos</p>
            </Box>
          </Box>
        </Box>

      {/* <div> */}
        <img src={ExcelInCC} height={240} className="excelInCriticalcareImg"/>
      {/* </div> */}
    </Fragment>
  );
};
export default SubCategory;
