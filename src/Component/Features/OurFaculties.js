import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Image1 from "../../Media/Images/CorrectFirstImg.jpg";
import sananta from "../../Media/Images/sananta.png";
import Comma from "../../Media/Media_Image/testimonialComma.webp"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Box, Button, Typography } from "@mui/material";
import { getAllTestimonials } from "../ApiFactory/ApiAction";
function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <ChevronLeftIcon
      className={className}
      style={{ ...style, display: "block", color: "white", fontSize: "3rem", marginLeft: "-2%" }}
      onClick={onClick}
    />
  );
}
function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <ChevronRightIcon
      className={className}
      style={{ ...style, display: "block", color: "white", fontSize: "3rem", marginRight: "-2%" }}
      onClick={onClick}
    />
  );
}
const OurFaculties = ({courseData}) => {
  const [testimonialData, setTestimonialData] = useState([]);
  useEffect(() => {
    getAllTestimonials({
      callBack: (response) => {
        setTestimonialData(response?.data)
      },
      error: error => {
        console.error(error)
      }
    })
  }, [])

  const settings = {
    dots: true,
    infinite: courseData?.length > 1,
    speed: 500,
    // autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    arrow: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };
  return (
    <div  className="OurfacultiesmobileView" style={{width: "100%", padding: "3%" }}>
       {/* <Box className="FacultiesBox">
       <Typography className="FacultiesBoxHeading">Our Faculties</Typography>
       OurFaculties
          </Box> */}
          {/* <Box className="FacultiesCardBox"> */}
      <div className="slider-container" style={{ width: "100%", marginTop:"2%", marginLeft:"1%" }}>
        <Slider {...settings}>
        {courseData?.teamMembers?.map((data) => {
                return (
                  <Box className="FacultiesDetailsBox">
                    <Box className="NameBox">
                      <Box>
                        <Typography className="FacultiesName">
                          {data.member_name}
                        </Typography>
                        <Typography className="FacultiesDetails">
                          Associate director head, Critical care medanta
                          hospital, Ranchi, india, general secretary, Nephro
                          Critical Care Society
                        </Typography>
                      </Box>
                      <Button variant="contained" className="KnowNowBtn">
                        Known Now
                      </Button>
                    </Box>
                    <img src={sananta} className="FaculriesImg" />
                  </Box>
                );
              })}
        


        </Slider>
      </div>
      {/* </Box> */}
    </div>
  );
}

export default OurFaculties;
