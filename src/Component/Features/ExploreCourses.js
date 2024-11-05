import React, { Fragment, useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Box, Button, Typography } from "@mui/material";
import sananta from "../../Media/Images/sananta.png";
import EDIC from "../../Media/Images/EDIC-1.png";
import Juduwa from "../../Media/Images/Juduwa.png";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from '@mui/material/IconButton';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
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

const ExploreCourses = () => {

  const [courseData, setCourseData] = useState({});

  let location = useLocation();
  const courseId = location?.state?.courseId;

  
  console.log("location",location)
  console.log("idd",courseId)
  const navigate = useNavigate();
  const [durationData, setDuration] = useState([]);
  useEffect(() => {
    console.log("idd",courseId)
  //  setLoaderState(true);
   if (redirectRestriction()) {
    //  setLoaderState(true);
   buyCourse({
     courseId,
     callBack: (response) => {
       const userCallBack = response?.data;
       setCourseData(userCallBack[0]);
    //    setLoaderState(false);
     },
     error: (error) => {
      //  toast.error(error.message);
       console.log(error.message);
      //  setLoaderState(false);
     },
   });
   duration({
     callBack: (response) => {
       const userCallBack = response?.data;
       setDuration(userCallBack);
       console.log(response, "kjhgfxdgchj");
     },
     error: (error) => {
      //  toast.error(error.message);
      //  console.log(error.message);
     },
   });
 
  //    getAllCourse({
  //      callBack: (response) => {
  //        const userCallBack = response?.data;
  //        const isPublish = "published";
  //        const pubishedCourse = userCallBack.filter(
  //          (item) => item.is_publish === isPublish
  //        );
  //        setCourse(pubishedCourse);
  //        setLoaderState(false);
  //      },
  //      error: (error) => {
  //        toast.error(error.message);
  //        console.log(error.message);
  //        setLoaderState(false);
  //      },
  //    });
  //    duration({
  //      callBack: (response) => {
  //        const userCallBack = response?.data;
  //        setDuration(userCallBack);
  //        console.log(response, "kjhgfxdgchj");
  //      },
  //      error: (error) => {
  //        toast.error(error.message);
  //        console.log(error.message);
  //      },
  //    });
   } else {
    //  navigate("/");
   }
 }, [courseId]);

 const handleLearnNow = (courseId) => {
  navigate("/user/CoursesContent", { state: { courseId: courseId } });
  console.log("moded", courseId);
};


  return (
    <Fragment>
        <Header />
      <Box className="HeadimgBox">
                <img src={homeimg} width="100%"  className="WebViewImg"/>
            </Box>
            <div className="MobileBuyNowCardBox">
                <div className="StickyBOx">
                <img src={EDIC} className="EDICImg"/>
                <Box sx={{textAlign: "center"}}>
                    <Typography>Special Discount Price</Typography>
                    <Box sx={{display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}>
                        <Typography>₹{courseData?.durations?.length && courseData?.durations[0]?.offer_price}</Typography>
                        <Typography sx={{textDecoration: "line-through"}}>₹{courseData?.durations?.length && courseData?.durations[0]?.price}</Typography>
                        <Typography className="offBox">25%off</Typography>
                    </Box>
                {/* <Link to="/user/PurchasedCourse">  */}
                <Button  variant="contained" className="BuyNowCardButton" 
                   onClick={() => handleLearnNow(courseData?.course_id)}
                    >Buy Now</Button>
                {/* </Link> */}
                </Box>
                </div>
                </div>
            {/* {console.log(courseData, "courseData")}
            {console.log(durationData, "durationData")} */}
      <Box className="CDMainBox">
        <Typography className="CourseDetailsHead">Courses Details</Typography>
        <ul className="CourseDetails">
          <li>10 section wise 3 whole syllabus mock test</li>
          <li>Convenient timing for Exam</li>
          <li>Access to Debrif videos </li>
          <li>High probability question bank</li>
        </ul>
      </Box>
{console.log(courseData, "courseData")}
<OurFaculties  className="OurfacultiesmobileView"/>
      <Box className="FacultiesBox">
        
        <Typography className="FacultiesBoxHeading">Our Faculties</Typography>
        OurFaculties
        <Box className="FacultiesCardBox">
          <Box className="FacultiesDetailsBox">
            <Box className="NameBox">
              <Box>
                <Typography className="FacultiesName">
                  Tapas kumar sahoo
                </Typography>
                <Typography className="FacultiesDetails">
                  Associate director head, Critical care medanta hospital,
                  Ranchi, india, general secretary, Nephro Critical Care Society
                </Typography>
              </Box>
              <Button variant="contained" className="KnowNowBtn">
                Known Now
              </Button>
            </Box>
            <img src={sananta} className="FaculriesImg" />
          </Box>
          <Box className="FacultiesDetailsBox" sx={{ ml: 3 }}>
            <Box className="NameBox">
              <Box>
                <Typography className="FacultiesName">
                  Tapas kumar sahoo
                </Typography>
                <Typography className="FacultiesDetails">
                  Associate director head, Critical care medanta hospital,
                  Ranchi, india, general secretary, Nephro Critical Care Society
                </Typography>
              </Box>
              <Button variant="contained" className="KnowNowBtn">
                Known Now
              </Button>
            </Box>
            <img src={sananta} className="FaculriesImg" />
          </Box>
        </Box>
        
      </Box>

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
                <img src={EDIC} className="EDICImg"/>
                <Box sx={{textAlign: "center"}}>
                    <Typography>Special Discount Price</Typography>
                    <Box sx={{display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}>
                        <Typography>₹{courseData?.durations?.length && courseData?.durations[0]?.offer_price}</Typography>
                        <Typography sx={{textDecoration: "line-through"}}>₹{courseData?.durations?.length && courseData?.durations[0]?.price}</Typography>
                        <Typography className="offBox">25%off</Typography>
                    </Box>
                {/* <Link to="/user/PurchasedCourse">  */}
                <Button  variant="contained" className="BuyNowCardButton" 
                   onClick={() => handleLearnNow(courseData?.course_id)}
                    >Buy Now</Button>
                {/* </Link> */}
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
                // width: 588,
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
