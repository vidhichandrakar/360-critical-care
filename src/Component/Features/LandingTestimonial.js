import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Image1 from "../../Media/Images/CorrectFirstImg.jpg";
import Comma from "../../Media/Media_Image/testimonialComma.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Box, Typography } from "@mui/material";
import { getAllTestimonials } from "../ApiFactory/ApiAction";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <ChevronLeftIcon
      className={className}
      style={{
        ...style,
        display: "block",
        color: "white",
        fontSize: "3rem",
        marginLeft: "-2%",
      }}
      onClick={onClick}
    />
  );
}
function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <ChevronRightIcon
      className={className}
      style={{
        ...style,
        display: "block",
        color: "white",
        fontSize: "3rem",
        marginRight: "-2%",
      }}
      onClick={onClick}
    />
  );
}
const LandingTestimonial = () => {
  const [testimonialData, setTestimonialData] = useState([]);
  
  useEffect(() => {
    getAllTestimonials({
      callBack: (response) => {
        setTestimonialData(response?.data);
      },
      error: (error) => {
        console.error(error);
      },
    });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    // autoplay: true,
    slidesToShow: window.innerWidth < 768 ? 1 : 3,
    autoplaySpeed: 3000,
    arrow: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div style={{ backgroundColor: "#24A28E", width: "100%", padding: "3%" }}>
      <Box className="CenteredHeading">
        <Typography className="TestimonialHead">
          Student of 360 Critical Care
        </Typography>
        <Typography className="TestimonialPara">
          Hear from our students
        </Typography>
      </Box>
      <div
        className="slider-container"
        style={{ width: "97%", marginTop: "2%", marginLeft: "1%" }}
      >
        <Slider {...settings}>
          {testimonialData?.map((data) => (
            <div key={1} className="sliderFlex">
              <Box className="testimonialBox">
                <img src={Comma} width={40} height={40} className="topComma" />
                <Typography className="wrap-text-testimonial ">
                  {data?.comment}
                </Typography>
                <Typography className="author">{data?.author}</Typography>
                <img
                  src={Comma}
                  width={40}
                  height={40}
                  style={{ float: "right", transform: "scaleX(-1)" }}
                />
              </Box>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default LandingTestimonial;
