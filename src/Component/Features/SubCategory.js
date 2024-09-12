import { Typography, Box, Button, colors } from "@mui/material";
import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import ExcelInCC from "../../Media/Images/ExcelInCriticalCareImg.png";
import doctorSign from '../../Media/Images/handsAndDoctorSign.png';
import functioning from '../../Media/Images/functioning.png';
import robot from '../../Media/Images/robot.png';
import building from '../../Media/Images/hospnew.png';
import transparentOverBuilding from '../../Media/Images/Rectangle 6.png';


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
      <div className="allExploreCatCards">
        <Box className="drNBCompleteBox">
          <Box className="drNBCompleteBox-left">
            <h5 className="drNB-head">
              <b>DrNB/DM</b>
            </h5>
            <Box className="drNBSubSections">
              {/* <Box className="drNBOptions">Top Long Course</Box>
                <Box className="drNBOptions-two">Top Short Course</Box>
                <Box className="drNBOptions2ndClm">Top Crash Course</Box> */}
              <Box className="changedDrNBBoxes">Top Long Course</Box>
              <Box className="changedDrNBBoxes">Top Short Course</Box>
              <Box className="changedDrNBBoxes">Top Crash Course</Box>
            </Box>
          </Box>

          <Box className="blueSemiCircle">
            <img src ={doctorSign} width={80} height={70} className="semiCircleIcon"/>
          </Box>
        </Box>

        <Box className="drNBCompleteBox">
          <Box className="drNBCompleteBox-left">
            <h5 className="drNB-head">
              <b>EDIC</b>
            </h5>
            <Box className="drNBSubSections">
              <Box className="changedDrNBBoxes-EDIC">TRICKS-1</Box>
              <Box className="changedDrNBBoxes-EDIC">TRICKS-2</Box>
              <Box className="changedDrNBBoxes-EDIC">TRICKS-i</Box>
            </Box>
          </Box>

          <Box className="blueSemiCircle-second">
            <img src ={functioning} width={80} height={70} className="semiCircleIcon"/>
          </Box>
        </Box>

        <Box className="drNBCompleteBox">
          <Box className="drNBCompleteBox-left">
            <h5 className="drNB-head">
              <b>IDCCM</b>
            </h5>
            <div className="drNBSubSections">
              <Box className="changedDrNBBoxes">TRICKS-IDCCM</Box>
              {/* <Box className="changedDrNBBoxes">Top Short Course</Box> */}
              {/* <Box className="changedDrNBBoxes">Top Crash Course</Box> */}
            </div>
          </Box>

          <Box className="blueSemiCircle">
            <img src ={robot} width={80} height={70} className="semiCircleIcon"/>
          </Box>
        </Box>
      </div>

      <Box className="exploreTechEnabledBox">
        <img src ={building} className="BuildingImg"/>
        <img src={transparentOverBuilding} className="transparentBlue"/>
        <Box className="exploreCTechategorySection">
        <h2 style={{ color: "#ffffff" }}>
          <b>Explore Tech-Enabled Online &&& Classes</b>
        </h2>
        <p
          style={{ color: "#ffffff" }}
          className="paraFontSize-forMobileView-common"
        >
          Creating new benchmarks in learning expirences
        </p>

        <Box className="aboutExploreClasses">
          <Box
            sx={{
              backgroundColor: "#FFF3E3",
              borderRadius: "9px",
              width: "135px",
              height: "114px",
            }}
          >
            <h1 className="aboutExploreClasses-head">
              <b>800+</b>
            </h1>
            <p className="aboutExploreClasses-para">
              <b>Students</b>
            </p>
          </Box>
          {/* <Box className="verticalDivider"></Box> */}
          <Box
            sx={{
              backgroundColor: "#FFEEEE",
              borderRadius: "9px",
              width: "135px",
              height: "114px",
            }}
          >
            <h1 className="aboutExploreClasses-head">
              <b>3+</b>
            </h1>
            <p className="aboutExploreClasses-para">
              <b>Glorious Years</b>
            </p>
          </Box>
          <Box
            sx={{
              backgroundColor: "#E4FAFF",
              borderRadius: "9px",
              width: "135px",
              height: "114px",
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
              backgroundColor: "#ECE7FF",
              borderRadius: "9px",
              width: "135px",
              height: "114px",
            }}
          >
            <h1 className="aboutExploreClasses-head">
              <b>100+</b>
            </h1>
            <p className="aboutExploreClasses-para">
              <b>Teaching Videos</b>
            </p>
          </Box>
        </Box>
        </Box>
      </Box>

      <img src={ExcelInCC} height={240} className="excelInCriticalcareImg" />
    </Fragment>
  );
};
export default SubCategory;
