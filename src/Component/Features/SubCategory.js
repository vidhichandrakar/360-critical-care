import { Typography, Box, Button, colors } from "@mui/material";
import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import ExcelInCC from "../../Media/Images/ExcelInCriticalCareImg.png";
import doctorSign from '../../Media/Images/handsAndDoctorSign.png';
import functioning from '../../Media/Images/functioning.png';
import robot from '../../Media/Images/robot.png';
import building from '../../Media/Images/hospnew.png';
import transparentOverBuilding from '../../Media/Images/Rectangle 6.png';
import { useEffect } from "react";
import { getCategory } from "../ApiFactory/ApiAction";


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
  const [categoreData, setCategoreData] = useState([])

  useEffect(()=>{
    getCategory({callBack: (response) => {
      setCategoreData(response.data)
    } })
  },[])

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
        <Box className="SubBoxSubBox">
          <Box className="drNBCompleteBox">
            <Box className="drNBCompleteBox-left">
            <h5 className="drNB-head">  
              <b>{categoreData[0]?.category_name}</b>
            </h5>
            {console.log(categoreData, "line73")}
            <Box className="drNBSubSections">
              <Box className="changedDrNBBoxes">{categoreData[0]?.subcategories[0]?.category_name}</Box>
              <Box className="changedDrNBBoxes">{categoreData[0]?.subcategories[1]?.category_name}</Box>
              <Box className="changedDrNBBoxes">{categoreData[0]?.subcategories[2]?.category_name}</Box>
            </Box>
            </Box>
            <Box className="blueSemiCircle">
            <img src ={doctorSign} width={80} height={70} className="semiCircleIcon"/>
          </Box>
          </Box>

         
        </Box>

        <Box className="drNBCompleteBox">
          <Box className="drNBCompleteBox-left">
            <h5 className="drNB-head">
            <b>{categoreData[1]?.category_name}</b>
            </h5>
            <Box className="drNBSubSections">
              <Box className="changedDrNBBoxes">{categoreData[1]?.subcategories[0]?.category_name}</Box>
              <Box className="changedDrNBBoxes">{categoreData[1]?.subcategories[1]?.category_name}</Box>
              <Box className="changedDrNBBoxes">{categoreData[1]?.subcategories[2]?.category_name}</Box>
            </Box>
          </Box>
          <Box className="blueSemiCircle">
            <img src ={functioning} width={80} height={70} className="semiCircleIcon"/>
          </Box>
          </Box>

          <Box className="drNBCompleteBox">
          <Box className="drNBCompleteBox-left">
            <h5 className="drNB-head">
            <b>{categoreData[2]?.category_name}</b>
            </h5>
            <div className="drNBSubSections">
            <Box className="changedDrNBBoxes">{categoreData[1]?.subcategories[0]?.category_name}</Box>
              <Box className="changedDrNBBoxes">{categoreData[0]?.subcategories[1]?.category_name}</Box>
              <Box className="changedDrNBBoxes">{categoreData[1]?.subcategories[2]?.category_name}</Box>
            </div>
          </Box>

          <Box className="blueSemiCircle">
            <img src ={robot} width={80} height={70} className="semiCircleIcon"/>
          </Box>
        </Box>
       
       
      </div>

       

       
      

       </Fragment>
  );
};
export default SubCategory;
