import React, { useState } from "react";
import { Link } from "react-router-dom";

const SubCAtegoryBox = () => {
    const [show, SetShow] = useState(false);
    const [showButton, setShowButton] = useState("View More");

    function toggle() {
        SetShow((show) => !show);
        if(!show === true){
            setShowButton("View Less")
        }
        else{
            setShowButton("View More")
        }
      }
    const CategoryData1 = [
        {   
            herf: '',
            head : "Top Long Course",
            Button: "Explore"
        },
        {
            head : "Top short Course",
            Button: "Explore"
        },
        {
            herf: '/TopCourse',
            head : "Top Crash Course",
            Button: "Explore"
        },
        {
            herf: '/EDIC',
            head : "EDIC 1",
            Button: "Explore"
        },
        {
            herf: '/EDIC2',
            head : "EDIC 2",
            Button: "Explore"
        },
        
    ]
    const CategoryData2 = [
        {
            head : "TRICS-I",
            Button: "Explore"
        },
        {
            herf: '/IDCCM',
            head : "TRICS-IDCCM",
            Button: "Explore"
        },
        {
            head : "Nephro Critical Care Review Course",
            Button: "Explore"
        },
        {
            head : "Sepsis BASIC",
            Button: "Explore"
        },
        {
            head : "Sepsis ADVANCED",
            Button: "Explore"
        },
        {
            head : "Critical Care Nutrition",
            Button: "Explore"
        },
    ]
   
    return(
       <>
       <div className="SubCategoryBox">
       {CategoryData1.map((value) => (
           <Link to={value.herf}> <div className="SubBox">
                <p><b>{value.head}</b></p>
                <p className="ShowButton">{value.Button}</p>
            </div></Link>
        ))}
       {show && CategoryData2.map((value) => (
            <div className="SubBox">
                <p><b>{value.head}</b></p>
                <p className="ShowButton">{value.Button}</p>
            </div>
        ))}
        
       </div>
       <div>
        <p onClick={toggle} className="ShowButton">
            {showButton}
        </p>
       </div>

       </>
    )
}

export default SubCAtegoryBox;