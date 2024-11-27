import React, { Fragment, useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Box, Button, Typography } from "@mui/material";
import sananta from "../../Media/Images/sananta.png";
import EDIC from "../../Media/Images/EDIC-1.png";
import Juduwa from "../../Media/Images/Juduwa.png";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import homeimg from "../../Media/Images/AllCourseHome.jpg";
// import yellowEnvlope from "../../Images/yellowEnvlope.jpeg";
// import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
// import AddModeratorIcon from "@mui/icons-material/AddModerator";
// import { Link } from "react-router-dom";
import { buyCourse, duration } from "../ApiFactory/ApiAction";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { redirectRestriction } from "../ApiFactory/redirectRestriction";
import OurFaculties from "./OurFaculties";
import CriticalCareReportImg from "../../Media/Images/CriticalCareWrittingBoard.png";
import { tripmHtmlTagsToNormalFormat } from "../Utils/CommonUtils";

const ExploreCourses = () => {
  const [courseData, setCourseData] = useState({});

  let location = useLocation();
  const courseId = location?.state?.courseId;
  const navigate = useNavigate();
  const [durationData, setDuration] = useState([]);
  const [specialDiscountImg, SetSpecialDiscountImg] = useState("");
  const [exploreCourseBanner, SetExploreCourseBanner] = useState("");
  const [isVideo, SetIsVideo] = useState("");

  useEffect(() => {
    if (redirectRestriction()) {
      buyCourse({
        courseId,
        callBack: (response) => {
          const userCallBack = response?.data;
          setCourseData(userCallBack[0]);
        },
        error: (error) => {
          console.log(error.message);
        },
      });
      duration({
        callBack: (response) => {
          const userCallBack = response?.data;
          setDuration(userCallBack);
        },
        error: (error) => {},
      });
    } else {
    }
  }, [courseId]);

  const handleLearnNow = (courseId) => {
    SetIsVideo(true);
  };

  return (
    <Fragment>
      <Header />
      <Box className="HeadimgBox">
        {courseData?.thumbnail_path_mobile != null ? (
          <img
            src={courseData?.thumbnail_path_desktop}
            width="100%"
            className="WebViewImg"
          />
        ) : (
          <img
            src={CriticalCareReportImg}
            width="100%"
            className="WebViewImg"
          />
        )}
      </Box>
      <div className="MobileBuyNowCardBox">
        <div className="StickyBOx">
          <img src={EDIC} className="EDICImg" />
          <Box sx={{ textAlign: "center" }}>
            <Typography>Special Discount Price</Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
              }}
            >
              <Typography>
                ₹
                {courseData?.durations?.length &&
                  courseData?.durations[0]?.offer_price}
              </Typography>
              <Typography sx={{ textDecoration: "line-through" }}>
                ₹
                {courseData?.durations?.length &&
                  courseData?.durations[0]?.price}
              </Typography>
              <Typography className="offBox">25%off</Typography>
            </Box>
            <Button
              variant="contained"
              className="BuyNowCardButton"
              onClick={() => handleLearnNow(courseData?.course_id)}
            >
              Buy Now
            </Button>
          </Box>
        </div>
      </div>
      <Box className="CDMainBox">
        <Typography className="CourseDetailsHead">Courses Details</Typography>
        <Typography className="CourseDetails">
          {tripmHtmlTagsToNormalFormat(courseData?.description)}
        </Typography>
      </Box>
      <OurFaculties
        className="OurfacultiesmobileView"
        teamMember={courseData?.teamMembers}
      />
      {courseData?.teamMembers?.length !== null ? (
        <Box className="FacultiesBox">
          <Typography className="FacultiesBoxHeading">Our Faculties</Typography>
          OurFaculties
          <Box className="FacultiesCardBox">
            {courseData?.teamMembers?.map((data) => {
              return (
                <Box className="FacultiesDetailsBox">
                  <Box className="NameBox">
                    <Box>
                      <Typography className="FacultiesName">
                        {data.member_name}
                      </Typography>
                      <Typography className="FacultiesDetails">
                        Associate director head, Critical care medanta hospital,
                        Ranchi, india, general secretary, Nephro Critical Care
                        Society
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
          </Box>
        </Box>
      ) : null}

      <Box className="TBIMainBox">
        <Typography className="CourseDetailsHead marginmobile">
          This Batch Includes
        </Typography>
        <Box className="BatchDetails">
          <ol className="OredrlistBox">
            <li>Doubt Clearing Live Class</li>
            <li>Online Lectures</li>
            <li>Dpps and test with Solutions</li>
            <li>Videos Lecture</li>
            <li>Mock Test Set</li>
            <li>Best Guidance</li>
            <li>Dedicated WhatsApp Group</li>
          </ol>
          <div className="BuyNowCardBox">
            <div className="StickyBOx">
              {isVideo ? (
                <video width="400" controls autoPlay>
                  <source
                    src={specialDiscountImg?.thumbnail_video_path}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              ) : specialDiscountImg?.thumbnail_path_mobile != null ? (
                <img
                  src={specialDiscountImg?.thumbnail_path_mobile}
                  className="EDICImg"
                />
              ) : (
                <img src={CriticalCareReportImg} className="EDICImg" />
              )}

              <img
                src={specialDiscountImg?.thumbnail_path_mobile}
                className="EDICImg"
              />
              <Box sx={{ textAlign: "center" }}>
                <Typography>Special Discount Price</Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                  }}
                >
                  <Typography>
                    ₹
                    {courseData?.durations?.length &&
                      courseData?.durations[0]?.offer_price}
                  </Typography>
                  <Typography sx={{ textDecoration: "line-through" }}>
                    ₹
                    {courseData?.durations?.length &&
                      courseData?.durations[0]?.price}
                  </Typography>
                  <Typography className="offBox">25%off</Typography>
                </Box>
                <Button
                  variant="contained"
                  className="BuyNowCardButton"
                  onClick={() => handleLearnNow(courseData?.course_id)}
                >
                  Play Now
                </Button>
              </Box>
            </div>
          </div>
        </Box>
      </Box>

      <Box className="FAQMainBox">
        <Typography className="CourseDetailsHead marginmobile">
          FAQ’s What does the TRICS 1 Cover?
        </Typography>
        <Box className="FAQDetails">
          <ul className="CourseDetails">
            <li>
              Once enrolled it will provide a detailed  overview of syllabus and
              study material.
            </li>
            <li>
              Candidates will have access to the “TRICS- EDIC-1 Cloud” platform.
              It’s a unique resource meant for preparation of EDIC-1.
            </li>
            <li>
              The modules are classified as per the EDIC-1 syllabus. The whole
              course consists of 10 modules with section wise MOCK tests.
            </li>
            <li>
              Each module consists of pre-reading for a week followed by a mock
              test as per the EDIC-1 standards.
            </li>
          </ul>
        </Box>
      </Box>

      <Box className="GetAccessBox">
        <Box className="GetAccessLeftSide">
          <Typography className="FreeCoursesText">
            Get Access To Our{" "}
            <span className="FreeCourseC0lor">Free Courses</span> Now
          </Typography>
          <Typography className="QualityMaterial">
            Get instant access to high - quality material
          </Typography>
          <Box>
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                mt: 2,
              }}
              className="GetsearchBarBox"
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Email id / Phone"
                inputProps={{ "aria-label": "search google maps" }}
              />
              <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <ChevronRightIcon className="ChevronRightIcon" />
              </IconButton>
            </Paper>
          </Box>
        </Box>
        <img src={Juduwa} className="juduwaimg" />
      </Box>

      <Footer />
    </Fragment>
  );
};

export default ExploreCourses;
