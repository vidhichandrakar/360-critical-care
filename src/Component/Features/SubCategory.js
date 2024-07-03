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
    console.log(type);

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
      {categoryType[categorySelected]?.map((data) => {
        return (
          <Fragment>
            <Box className="subCatBox">
              <Typography className="subCatHead">{data}</Typography>
              <Link
                to={savedPath}
                onClick={() => handleCourses({ type: data })}
                className="subCatSubHead"
              >
                Explore
              </Link>
            </Box>

            {categoryType[categorySelected].length > 2 ? <br /> : null}
          </Fragment>
        );
      })}
    </Fragment>
  );
};
export default SubCategory;
