import React from "react";
import Header from "../Header/Header";
import { Box, Typography } from "@mui/material";
import Stethoscope from "../../Media/Images/StethoscopeImg.png";
import PrepatoryImg from "../../Media/Images/PrepatoryImg.png";
import { Margin } from "@mui/icons-material";
import Sananta from "../../Media/Images/sananta.png";
import tapas from "../../Media/Images/tapas.png";
import globalMap from "../../Media/Images/globalMap.png";
import Footer from "../Footer/Footer";
import NewsLetter from "../../Media/ProjectImage/AllCourseImg3.jpg";



const ComprehensivePreparatoryCourse = () => {
  return (
    <>
      <Header />

      <img
        src={PrepatoryImg}
        width={1526}
        height={360}
        //   style={Margin="23px"}
      />

      <Box className="abt360CriticalCare">
        <img src={Stethoscope} width={530} height={350}/>
        <Box className="abt360CriticalCare-right">
          <Typography className="youtubeHead">
            About 360 Critical Care
          </Typography>
          <Typography sx={{ mt: 3 }}>
            Critical Care Medicine has advanced significantly, becoming a
            cornerstone of modern medical and surgical practice. The scope of
            Critical Care is expanding rapidly, driven by continuous
            advancements in the field. This initiative aims to provide a
            comprehensive and current resource on intensive care practices. By
            offering up-to-date information, it seeks to bridge the gap between
            the leading experts in the field and Critical Care practitioners
            globally. This resource is designed to support practitioners by
            keeping them informed about the latest developments, techniques, and
            best practices in Critical Care Medicine. It emphasizes the
            importance of staying current with the rapidly evolving landscape of
            Critical Care to ensure the highest standards of patient care and
            safety. Through this initiative, practitioners can enhance their
            knowledge and skills, ultimately improving patient outcomes in
            intensive care settings.
          </Typography>
          <Typography sx={{ mt: 3 }}>
            The idea of this endeavor originated with Our Founders
          </Typography>
        </Box>
      </Box>

      <Typography className="ourFounderHead">Our Founders</Typography>
      <div className="OurfoundersCard">
        <Box
          sx={{ maxWidth: 400, flexGrow: 1 }}
          className="OurFoundersLeftCard"
        >
          <img src={tapas} width={70} height={70} />
          <Typography sx={{ fontSize: "1.3rem", mt: 2 }}>
            <b>Dr. Tapas Kumar Sahoo</b>
          </Typography>
          <Typography sx={{ fontSize: "0.8rem", mt: 1, mb: 3 }}>
            Director
          </Typography>
          <Typography sx={{ fontSize: "0.7rem", padding: "0px 0px", color:"#002C4F" }}>
            MD (Anesthesiology)| FNB (CCM)| EDIC | FCCP | IFCCM | Canadian
            Critical care Fellowship (University of Toronto) | MBA (Healthcare
            Management) | Associate Director and HOD | Department of Critical
            Care | Medanta Hospital, Ranch
          </Typography>
          <Box className="ourFoundersHorizontalLine"></Box>
        </Box>

        <Box
          sx={{ maxWidth: 400, flexGrow: 1 }}
          className="OurFoundersLeftCard"
        >
          <img src={Sananta} width={70} height={70} />
          <Typography sx={{ fontSize: "1.3rem", mt: 2 }}>
            <b>Dr. Sananta Kumar Dash</b>
          </Typography>
          <Typography sx={{ fontSize: "0.8rem", mt: 1, mb: 3 }}>
            Director
          </Typography>
          <Typography sx={{ fontSize: "0.7rem", color:"#002C4F" }}>
            “My aim is to democratize and transform the education landscape in
            Bharat.”
          </Typography>
          <Box className="ourFoundersHorizontalLine"></Box>
        </Box>
      </div>

      <Typography className="whyChooseUsHead">Why Choose Us?</Typography>
      <Box className="whyChooseUsSection">
        <Box className="countryWiseStuBox">
            <li><Typography sx={{fontSize:"1.3rem", margin:"20px 2px"}}><b>Country Wise Student</b></Typography>
             <ul>India - 2,000</ul>
             <ul>UAE - 1,300</ul>
             <ul>USA - 6,060</ul>
             <ul>Australia - 2,700</ul>
            </li>
        </Box>
        <Box className="whyChooseUsVerticalLine"></Box>
        <img src={globalMap} width={600} height={290}/>
      </Box>

      <Box className="percentageOfSuccess">
            <Box sx={{backgroundColor:"#FFF3E3", borderRadius:"9px", width:"135px", height:"114px"}}>
              <h1 style={{marginTop:4}}>800+</h1>
              <p style={{fontSize:"0.8rem"}}>Students</p>
            </Box>
            <Box sx={{backgroundColor:"#FFEEEE", borderRadius:"9px", width:"135px", height:"114px"}}>
              <h1>3+</h1>
              <p style={{fontSize:"0.8rem"}}>Glorious Years</p>
            </Box>
            <Box sx={{backgroundColor:"#E4FAFF", borderRadius:"9px", width:"135px", height:"114px"}}>
              <h1>90%</h1>
              <p style={{fontSize:"0.8rem"}}>Success Rate</p>
            </Box>
            <Box sx={{backgroundColor:"#ECE7FF", borderRadius:"9px", width:"135px", height:"114px"}}>
              <h1>100+</h1>
              <p style={{fontSize:"0.8rem"}}>Teaching Videos</p>
            </Box>
          </Box>

          <img src={NewsLetter} width="100%"/>
          <Footer/>
    </>
  );
};

export default ComprehensivePreparatoryCourse;
