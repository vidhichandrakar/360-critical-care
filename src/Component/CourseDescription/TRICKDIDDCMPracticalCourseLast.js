import React from "react";
import TRICKS1Img from "../../Media/Images/TRICKS1Img.png";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import { Button } from "@mui/material";
import Sananta from "../../Media/Images/sananta.png";
import tapas from "../../Media/Images/tapas.png";
import BatchIncludeImg from "../../Media/Images/TRICKSBatchInclude.png";
import SanantaTapas from "../../Media/Images/SanantaAndTapas.png";
import "./TRICKS.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import TextField from "@mui/material/TextField";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import TRICKSIDDCMImg from "../../Media/Images/TRICKSIDDCMImg.png";
import DoctorCardImg from "../../Media/Images/DoctorCardImg.png";
import topLongCourseImg from "../../Media/Images/topLongCourseImg.png";
import buyTCCImg from "../../Media/Images/buyTopCrashCourseImg.png";
import mobileViewMainImg from "../../Media/Images/mobileViewMainImg.png";
import cardImg from "../../Media/Images/cardImg.png";
import CourseDescriptionMobileHeader from '../Header/CourseDescriptionMobileHeader';
import DoctorKidCard from "../../Media/Images/DoctorKidCard.png";
import headPhonesGirlImg from "../../Media/Images/HeadphonesGirl.png"


// ------- LAST TRICKS PAGE----------- 


const TRICKDIDDCMPracticalCourseLast = () => {
  return (
    <div className="tricksCompletePage">
      <Header />
      <CourseDescriptionMobileHeader />
      <img src={TRICKSIDDCMImg} width={1695} height={355} className="TRICKMainImg"/>
      <img src ={mobileViewMainImg} className="TRICKMainMobileImg"/>
      <Box className="courseDetailsBox">
        <Typography className="courseDetailsHead">
          <b>Course Details</b>
        </Typography>
        <Typography className="courseDetailsul">
          <ul className="TRICKSDisk">
            <li>Extensive Coverage Topics asked in IDCCM- Practicals.</li>
            <li>Real time IDCCM Practical Exam Experience.</li>
            <li>Access to Discussion Video</li>
            <li>Access to High Probability Questions Bank.</li>
          </ul>
        </Typography>
      </Box>

      <Typography className="ourFacultiesHead">Our Faculties</Typography>
      <div className="OurfacultiesCard">
        <Box
          sx={{ maxWidth: 525, flexGrow: 1 }}
          className="OurFacultiesLeftCard"
        >
          <Box className="ourFacultiesAlignment">
            <Typography sx={{ fontSize: "1.3rem", mt: -2 }}>
              <b className="AquaColor">Tapas Kumar Sahoo</b>
            </Typography>
            <Typography className="ourFacultiesAbout">
              Associate Director & Head, Critical Care Medanta Hospital, Ranchi,
              India, General Secretary, Nephro Critical Care Society
            </Typography>
            <Button className="knowMoreBtnOne">Know More</Button>
          </Box>

          <Box>
            <img src={tapas} width={70} height={70} />
          </Box>
        </Box>

        <Box
          sx={{ maxWidth: 525, flexGrow: 1 }}
          className="OurFacultiesLeftCard"
        >
          <Box className="ourFacultiesAlignment">
            <Typography sx={{ fontSize: "1.3rem", mt: -2 }}>
              <b className="AquaColor">Sananta Dash</b>
            </Typography>
            <Typography className="ourFacultiesAbout">
              Consultant Intensivist, Townsville University Hospital, OLD,
              Senior Lecturer, JCU School of Medicine & Dentistry, James Cook
              University Academic Secretary, Nephro Critical Care Society,
              Australia
            </Typography>
            <Button className="knowMoreBtnTwo">Know More</Button>
          </Box>

          <Box>
            <img src={Sananta} width={70} height={70} />
          </Box>
        </Box>
      </div>

      <Box className="thisBatchIncluesBox">
        <Box>
          <Typography sx={{ mt: 4 }} className='thisBatchIncludesHead'>
            <b>This Batch Includes</b>
          </Typography>
          <Typography className="thisBatchIncludesul">
            <ul className="TRICKSDisk">
              <li>Extensive coverage of Table Vivas in pre recorded videos.</li>
              <li>Mock exam 1 & 2 simulation.</li>
              <li>Grand Mock (IDCCM pattern) for All Registered Candidated with Slot pre</li>
              <li>Dedicated WhatsApp group for Discussion.</li>
            </ul>
          </Typography>
        </Box>

        <Box className="batchBuyNowCard">
          <img src={headPhonesGirlImg} width={400} height={200}  className="mainCardImg"/>
          <img src ={cardImg} className="cardImgDoctor" />
          <Box>
            <Typography sx={{ fontSize: "0.9rem", textAlign: "center", m: 1 }}>
              Special Discount Price
            </Typography>
            <Box className="SDPSection">
              <Box className="TRICKSMainPrice">
                <b>₹3000</b>
              </Box>
              <Box sx={{ m: "0px 49px" }}>₹4000</Box>
              <Box className="SDP-offerPrice">25% OFF</Box>
            </Box>
          </Box>
          <Button className="buyNowBtnBatch">
            <b>Buy Now</b>
          </Button>
        </Box>
      </Box>

      <Box className="TRICKS-FAQsBox-TOPCrashCourseTheory-last">
        <Typography className='thisBatchIncludesHead'>
          <b>FAQ's What does the TRICKS IDDCM Practical Coverage</b>
        </Typography>
        <Typography className="TRICKS-FAQs-TOPCrashCourseTheory-last">
          <ul className="TRICKSDisk">
            <li>
              <b>Candidates will have access to the "TRICKS IDDCM Cloud" platform. It's a unique resources meant for preparation of IDDCM.</b>
            </li>
            <li>
              <b>The modules are classified as per the IDDCM syllabus. The whole course consists of 10 modules with sectin wise MOCK tests.</b>
            </li>
            <li>
                <b>Extensive coverage of Table Vivas in pre recorded videos.</b>
            </li>
          </ul>
        </Typography>
      </Box>

      <Box className="TRICKSfreeCourseBox-last">
        <Box className="TRICKFreeCourses-left">
          <Typography className="freeResourcesText">
            Get Access To Our <br />
            <span className="AquaColor">Free Courses</span> Now
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              color: "#b7b4b4",
              mt: 2,
              mb: 1,
            }}
          >
            <Typography>Get instant access to high</Typography>
            <FiberManualRecordIcon className="TRICKS-dot"/>
            <Typography>quality material</Typography>
          </Box>

          <Box
            sx={{
              width: 380,
              maxWidth: "100%",
            }}
          >
            <TextField fullWidth label="Email id" id="fullWidth">
              <Box sx={{ backgroundColor: "#199884", borderRadius: "50%" }}>
                <ChevronRightIcon/>
              </Box>
            </TextField>
          </Box>
        </Box>

        <Box>
          <img src={SanantaTapas} width={1000} height={392} className="sanantaAndTapas"/>
        </Box>
      </Box>
      <Footer />
    </div>
  );
};

export default TRICKDIDDCMPracticalCourseLast;
