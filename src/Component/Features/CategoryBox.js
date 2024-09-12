import { Typography, Box, Card } from "@mui/material";
import React, { useState } from "react";
import DropDown from "../Header/NestedMenu";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  DropdownMenuItem,
  DropdownNestedMenuItem,
} from "../Header/NestedDropdown";
import SubCategory from "./SubCategory";
import SubCAtegoryBox from "./SubCAtegoryBox";
import img11 from "../../Media/Images/BrainThinking.png";
import thinking from "../../Media/Images/manBrain.png";
import LiveRedIcon from "../../Media/Images/LiveIconRed.png";
import WriteWithPencil from '../../Media/Images/WritingPencil.png';
import Award from '../../Media/Images/Award.png';
import functioning from '../../Media/Images/functioning.png';
import "../../CSS/Courses.css";

const CategoryBox = () => {
  const [categorySelected, setCategorySelected] = useState("Category_One");
  const handleCategory = (category) => {
    console.log(category);
    setCategorySelected(category);
  };
  return (
    <Box className="categoryMainBox">
      <Box className="breifesInHomePage">
        <Box>
          <img
            src={thinking}
            className="CategoryImg"
          />
          <p className="paraFontSize-forMobileView-common CategoryforMobileView">24 X 7 Access to exam debriefs</p>
        </Box>
        <Box className="verticalDivider"></Box>
        <Box>
          <img src={LiveRedIcon}
            className="CategoryImg" />
          <p className="paraFontSize-forMobileView-common CategoryforMobileView">Multiple Free Lectures</p>
        </Box>
        <Box className="verticalDivider"></Box>
        <Box>
          <img src={WriteWithPencil} 
            className="CategoryImg" />
          <p className="paraFontSize-forMobileView-common CategoryforMobileView CategoryforMobileView">One to one Interection</p>
        </Box>
        <Box className="verticalDivider"></Box>
        <Box >
          <img src={Award}
            className="CategoryImg4" />
          <p className="paraFontSize-forMobileView-common CategoryforMobileView">All in one App</p>
        </Box>
      </Box>

      <Typography className="catHeading">
        Explore <span style={{ color: "#199884" }}>Category</span>
      </Typography>
      <b className="paraFontSize-forMobileView-common">360CC is preparing students for 4 exam categories.</b>
      <div className="category">
        <div class="rowDesign">
          {/* <div className="cardBox">  
        <Box className={categorySelected==="Category_One"?"catDrop highlight":"catDrop"} >
            <DropdownNestedMenuItem label="DrNB/DM/IFCCM" onClick={()=>handleCategory("Category_One")}
              rightIcon={<KeyboardArrowRightIcon />}
              menu={[
                <DropdownMenuItem onClick={() => { }}>
                  <Typography className="dropDownText"> Top Long Course</Typography>
                </DropdownMenuItem>,
                <DropdownMenuItem onClick={() => { }}>
                  Top Short Course
                </DropdownMenuItem>,
                <DropdownMenuItem onClick={() => { }}>
                 Top Crash Course
                </DropdownMenuItem>
              ]}>
              Delete <DeleteForeverIcon />
            </DropdownNestedMenuItem>
          </Box>

          <Box className={categorySelected==="Category_Two"?"catDrop highlight":"catDrop"} >
            <DropdownNestedMenuItem label="EDIC" onClick={()=>handleCategory("Category_Two")}
              rightIcon={<KeyboardArrowRightIcon />}
              menu={[
                <DropdownMenuItem onClick={() => { }}>
                  EDIC 1
                </DropdownMenuItem>,
                <DropdownMenuItem onClick={() => { }}>
                  EDIC 2
                </DropdownMenuItem>,
                <DropdownMenuItem onClick={() => { }}>
                  TRICS-I
                </DropdownMenuItem>
              ]}>
              Delete <DeleteForeverIcon />
            </DropdownNestedMenuItem>
          </Box>
          <Box className={categorySelected==="Category_Three"?"catDrop highlight":"catDrop"} >
            <DropdownNestedMenuItem label="IDCCM" onClick={()=>handleCategory("Category_Three")}
              rightIcon={<KeyboardArrowRightIcon />}
              menu={[
                <DropdownMenuItem onClick={() => { }}>
                  TRICS-IDCCM
                </DropdownMenuItem>

              ]}>
              Delete <DeleteForeverIcon />
            </DropdownNestedMenuItem>
          </Box>
          <Box className={categorySelected==="Category_Four"?"catDrop highlight":"catDrop"} >
            <DropdownNestedMenuItem onClick={()=>handleCategory("Category_Four")}
              label="Other"
              rightIcon={<KeyboardArrowRightIcon />}
              menu={[
                <DropdownMenuItem onClick={() => { }}>
                  Nephro Critical Care Review Course
                </DropdownMenuItem>,
                <DropdownMenuItem onClick={() => { }}>
                  Sepsis BASIC
                </DropdownMenuItem>,
                <DropdownMenuItem onClick={() => { }}>
                  Sepsis ADVANCED
                </DropdownMenuItem>,
                <DropdownMenuItem onClick={() => { }}>
                  Critical Care Nutrition
                </DropdownMenuItem>,

              ]} />
          </Box>
          </div> */}

          <div className=" rightBoxCat">
            <SubCategory categorySelected={categorySelected} />
          </div>
        </div>
        <SubCAtegoryBox />
        <div></div>
      </div>
    </Box>
  );
};

export default CategoryBox;
