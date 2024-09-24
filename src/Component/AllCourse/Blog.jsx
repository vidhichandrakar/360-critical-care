import { Box, Button, Typography } from "@mui/material";
import react, { Fragment } from "react";
import homeimg from "../../Media/ProjectImage/AllCourseHome.jpg";
import cardimg from "../../Media/ProjectImage/AllCourseCard.jpg";
import NewsLetter from "../../Media/ProjectImage/AllCourseImg3.jpg";
import JoinImg from "../../Media/ProjectImage/AllCourseImg4.jpg";
import MobileViewHeadimg from "../../Media/Images/AllcourseHeadImg.png"
import "../../CSS/Courses.css";
import {AllCourseWOLCard , PopularCard} from "../../JsonData/JsonData"
import NewsLatter from "../MainComponent/LandingpageSubComponent/NewsLatter";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useState } from "react";
import { getBlog } from "../ApiFactory/ApiAction";
import { useEffect } from "react";

const Blog = () => {
  const [blogData, setBlogData] = useState([])
  useEffect(()=>{
    getBlog({callBack: (response) => {
      setBlogData(response.data)
    } })
  },[])
  return (
    <Fragment>
      <Header />
      <Box className="HeadimgBox">
        {console.log(blogData, "blogData")}
        <img src={homeimg} width="100%" className="WebViewImg" />
        <img src={MobileViewHeadimg} className="MobileViewImg" />
      </Box>
      <Box className="FeaturesBLog">
        <Typography>
          Featured story
        </Typography>
     <Box className="FeaturesDataBox">
     <img src={cardimg} className="Cardimgs"/>
      <Box sx={{ml:2}}>
        <Typography>
        Sbi clark first waitng list nvkdnvkdjvh cdbncjkds ndhbv vbfhdkn bdjrlfng vjfheje vkdj 
      </Typography>
        <Typography>
        Sbi clark first waitng list nvkdnvkdjvh cdbncjkds ndhbv vbfhdkn bdjrlfng vjfheje vkdj 
      </Typography>
      </Box>
     </Box>
      
      </Box>
      <Box className="PopularCourseMainBox">
        <Box className="PopularCourseBox">
          {blogData.map((item) => {
            return (
              <Box className="PopularCardBox">
                {/* <img src={item.image_url} className="Cardimgs" /> */}
                {item.image_url != null ? (<img src={item.image_url} className="Cardimgs" /> )  : (<img src={cardimg} className="Cardimgs" />) }
                <Box>
                  <Typography className="Para1" sx={{ mt: 1 }}>
                    {item.title}
                  </Typography>
                  <Typography className="Para2">{item.description}</Typography>
                </Box>
              </Box>
            );
          })}
         
        </Box>
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

export default Blog;
