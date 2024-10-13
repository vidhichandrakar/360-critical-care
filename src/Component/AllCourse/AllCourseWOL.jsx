import { Box, Button, Typography } from "@mui/material";
import react, { Fragment } from "react";
import homeimg from "../../Media/ProjectImage/AllCourseHome.jpg";
import cardimg from "../../Media/ProjectImage/AllCourseCard.jpg";
import NewsLetter from "../../Media/ProjectImage/AllCourseImg3.jpg";
import JoinImg from "../../Media/ProjectImage/AllCourseImg4.jpg";
import MobileViewHeadimg from "../../Media/Images/AllcourseHeadImg.png";
import "../../CSS/Courses.css";
import { AllCourseWOLCard, PopularCard } from "../../JsonData/JsonData";
import NewsLatter from "../MainComponent/LandingpageSubComponent/NewsLatter";
import { getAllCourses } from "../ApiFactory/ApiAction";
import { useState } from "react";
import { useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const AllCourseWOL = () => {
  const [allCourseData, setAllCourseData] = useState([]);

  useEffect(() => {
    getAllCourses({
      callBack: (response) => {
        setAllCourseData(response.data);
      },
    });
  }, []);
  return (
    <Fragment>
      <Header />
      <Box className="HeadimgBox">
        <img src={homeimg} width="100%" className="WebViewImg" />
        <img src={MobileViewHeadimg} className="MobileViewImg" />
      </Box>
      {console.log(allCourseData, "allCourseData")}
      <Box className="CoursesCardMainBox">
        {allCourseData?.length &&
          allCourseData?.map((item) => {
            return (
              <Box className="CradBox">
                <img src={item.thumbnail_path} className="CoursesCardImg" />
                <Box className="CardTextBox">
                  <Typography className="CardHeading .wrap-text-50 ">
                    {item.course_name}
                  </Typography>
                  <Box className="Price_ButtonBox">
                    <Box>
                      <Typography sx={{ fontWeight: 600 }}>
                        Special Discounted Price
                      </Typography>
                      <Box className="PriceBox">
                        <Typography sx={{ fontWeight: 600 }}>
                          {item.durations[0].offer_price}
                        </Typography>
                        <Typography
                          sx={{
                            ml: "100px",
                            color: "grey",
                            textDecoration: "line-through",
                          }}
                        >
                          {item.durations[0].price}
                        </Typography>
                        <Typography sx={{ ml: 6 }} className="offBox">
                          40% OFF
                        </Typography>
                      </Box>
                    </Box>
                    <Button variant="contained" className="ExploreButton">
                      Explore Now
                    </Button>
                  </Box>
                </Box>
              </Box>
            );
          })}
      </Box>
      <Box className="JoinContainer">
        <Typography className="JoinHeading">Join Our Free Webinar</Typography>
        <Button className="Joincentered" variant="contained">
          <span className="JoinNow">Join Now</span>
          <span className="Subscribe">Subscribe</span>
        </Button>
      </Box>
      <Box className="PopularCourseMainBox">
        <Typography sx={{ fontSize: "2rem", fontWeight: 700 }}>
          Our <span className="HeadingColor">Popular Course</span>
        </Typography>

        <Box className="PopularCourseBox">
          {PopularCard.map((item) => {
            return (
              <Box className="PopularCardBox">
                <img src={cardimg} className="Cardimgs" />
                <Box>
                  <Typography className="Para1" sx={{ mt: 1 }}>
                    {item.Para1}
                  </Typography>
                  <Typography className="Para2">{item.Para2}</Typography>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
      <NewsLatter />
      <Footer />
    </Fragment>
  );
};

export default AllCourseWOL;
