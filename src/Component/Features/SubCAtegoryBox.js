import React, { useState } from "react";
import { Link } from "react-router-dom";
import book from "../../Media/Images/book.png";

const SubCAtegoryBox = () => {
  const [show, SetShow] = useState(false);
  const [showButton, setShowButton] = useState("View More");

  function toggle() {
    SetShow((show) => !show);
    if (!show === true) {
      setShowButton("View Less");
    } else {
      setShowButton("View More");
    }
  }
  const CategoryData1 = [
    {
      herf: "",
      head: "Top Long Course",
      Button: "Explore",
    },
    {
      head: "Top short Course",
      Button: "Explore",
    },
    {
      herf: "/TopCourse",
      head: "Top Crash Course",
      Button: "Explore",
    },
    {
      herf: "/EDIC",
      head: "EDIC 1",
      Button: "Explore",
    },
    {
      herf: "/EDIC2",
      head: "EDIC 2",
      Button: "Explore",
    },
  ];
  const CategoryData2 = [
    {
      herf: "/TopCourse",
      head: "TRICS-I",
      Button: "Explore",
    },
    {
      herf: "/IDCCM",
      head: "TRICS-IDCCM",
      Button: "Explore",
    },
    {
      herf: "/TopCourse",
      head: "Nephro Critical Care Review Course",
      Button: "Explore",
    },
    {
      herf: "/TopCourse",
      head: "Sepsis BASIC",
      Button: "Explore",
    },
    {
      herf: "/TopCourse",
      head: "Sepsis ADVANCED",
      Button: "Explore",
    },
    {
      herf: "/TopCourse",
      head: "Critical Care Nutrition",
      Button: "Explore",
    },
  ];

  return (
    <>
      <div className="SubCategoryBox">
        {CategoryData1.map((value) => (
          <Link to={value.herf}>
            {" "}
            <div className="SubBox">
              <div className="leftCard">
                <p>
                  <b>{value.head}</b>
                </p>
                <p className="ShowButton">{value.Button}</p>
              </div>
              <div className="rightCard">
                <img src={book} className="cardImg" />
              </div>
            </div>
          </Link>
        ))}
        {show &&
          CategoryData2.map((value) => (
            <Link to={value.herf}>
              <div className="SubBox">
                <div className="leftCard">
                  <p>
                    <b>{value.head}</b>
                  </p>
                  <p className="ShowButton">{value.Button}</p>
                </div>
                <div className="rightCard">
                  <img src={book} className="cardImg" />
                </div>
              </div>
            </Link>
          ))}
      </div>
      <div>
        <p onClick={toggle} className="ShowButton">
          {showButton}
        </p>
      </div>
    </>
  );
};

export default SubCAtegoryBox;
