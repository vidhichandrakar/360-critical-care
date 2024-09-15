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



const TOPCrashCourseTheory = () => {
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
            <li>Comprehensive coverage of Critical Care Syllabus</li>
            <li>Theory preparation with focus on Previous Years Questions</li>
            <li>OSCE/VIVA Marathon- Viva questions in Rapid Fire.</li>
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
            <ol>
              <li>Four-day long in-person face to face exam preparation course</li>
              <li>Target Audience:-</li>
              {/* <li> */}
                <ol type="a" className="batchSubCategory-a">
                    <li>DrNB Super Speciality Trainees(1-3 years)</li>
                    <li>DM Critical Care Students</li>
                    <li>IDCCM/IFCCM Candidates</li>
                </ol>
              {/* </li> */}
              <li>Theory Preparation with focus of previous Years Questions</li>
              <li>Demonstration on Long case Examination patterns & Viva</li>
              <li>Multiple national teachers as Mentors and Examiners as course Faculties</li>
            </ol>
          </Typography>
        </Box>

        <Box className="batchBuyNowCard">
          <img src={buyTCCImg} width={400} height={200}  className="mainCardImg"/>
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

      <Box className="TRICKS-FAQsBox-TOPCrashCourseTheory">
        <Typography className='thisBatchIncludesHead'>
          <b>FAQ's What does the Theory-OSCE-Practical Crash Course Cover?</b>
        </Typography>
        <Typography className="TRICKS-FAQs-TOPCrashCourseTheory">
          <ul className="TRICKSDisk">
            <li>
              <b>The candidates will have access to the "Top Crash Coursse Cloud" platform.</b>
            </li>
            <li>
              <b>Discussion Focused on Answering the Questions in a Structured Template(S-Tem) Pattern</b>
            </li>
          </ul>
        </Typography>
      </Box>

      <Box className="TRICKSfreeCourseBox">
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

export default TOPCrashCourseTheory;
