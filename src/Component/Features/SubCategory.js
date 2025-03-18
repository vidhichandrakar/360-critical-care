import { Box } from "@mui/material";
import React, { Fragment, useState } from "react";
import { useEffect } from "react";
import { getCategory } from "../ApiFactory/ApiAction";
import { useNavigate } from "react-router-dom";


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

  useEffect(() => {
    getCategory({
      callBack: (response) => {
        setCategoreData(response.data)
      }, error: () => { }
    })
  }, [])

  const handleCourses = ({ type }) => {
    switch (type) {
      case "Top Crash Course": {
        setSavedPath("/TopCourse");
        break;
      }
      case "EDIC 1": {
        setSavedPath("/EDIC");
        break;
      }
      case "EDIC 2": {
        setSavedPath("/EDIC2");
        break;
      }
      case "TRICS-IDCCM": {
        setSavedPath("/IDCCM");
        break;
      }

      default:
    }
  };
  const subcategoriesdata = categoreData?.subcategories
  const navigate = useNavigate();
  const handlechange = (category_id) => {
    navigate("/Critical-care/Allcourse", { state: { category_id: category_id, subcategories: null } });
  };
  const handlechangeBySubcategory = (category_id) => {
    navigate("/Critical-care/Allcourse", { state: { subcategories: category_id, category_id: null } });
  };
  return (
    <Fragment>
      <div className="allExploreCatCards">
        {
          categoreData?.slice(0, 4)?.map((item) => (
            <Box className="SubBoxSubBox">
              <Box className="drNBCompleteBox">
                <Box className="drNBCompleteBox-left">
                  <h5 className="drNB-head" onClick={() => handlechange(item?.category_id)}>
                    <b>{item?.category_name}</b>
                  </h5>
                  {item?.subcategories?.length !== 0 ? <div className="drNBSubSections">
                    {item?.subcategories?.slice(0, 3)?.map((data) => (
                      <Box>
                        <Box className="changedDrNBBoxes"
                          onClick={() => handlechangeBySubcategory(data?.category_id)}>
                          {data?.category_name}</Box>
                      </Box>
                    ))}

                  </div> : <div><p>no date</p></div>}
                </Box>
              </Box>


            </Box>
          ))
        }
      </div>
    </Fragment>
  );
};
export default SubCategory;
