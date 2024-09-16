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
import "./Aboutus.css";
import PWRedImg from "../../Media/Images/MobileViewPWRedImg.png";

const Aboutus = () => {
  return (
    <>
      <Header />

      <img
        src={PrepatoryImg}
        width={1697}
        height={360}
        className="aboutUsFirstImg"
        //   style={Margin="23px"}
      />

      <Box className="abt360CriticalCare">
        <img
          src={Stethoscope}
          width={530}
          height={350}
          className="stethoscopeImg"
        />

        <img src={PWRedImg} width={200} height={150} className="PWSRedImg"/>
        <Box className="abt360CriticalCare-right">
          <Typography className="youtubeHead">
            About <span className="AquaColor">360 Critical Care</span>
          </Typography>
          <Typography className="abt360CriticalCare-typography">
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
          <Typography className="abt360CriticalCare-typography">
            The idea of this endeavor originated with Our Founders
          </Typography>

          <Typography sx={{fontSize: "0.8rem"}}
          //  className="mobileViewText"
           >
            360CC Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. 
          </Typography>
          <Typography sx={{fontSize: "0.8rem"}} 
          // className="mobileViewText"
          >
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book.
          </Typography>
        </Box>
      </Box>

      <Typography className="ourFounderHead">
        Our <span className="AquaColor">Founders</span>
      </Typography>
      <div className="OurfoundersCard">
        <Box
          sx={{ flexGrow: 1 }}
          className="OurFoundersLeftCard"
        >
          <img src={tapas} width={70} height={70} />
          <Typography sx={{ fontSize: "1.3rem", mt: 2 }}>
            <b>Dr. Tapas Kumar Sahoo</b>
          </Typography>
          <Typography sx={{ fontSize: "0.8rem", mt: 1, mb: 3 }}>
            Director
          </Typography>
          <Typography
            // sx={{ fontSize: "0.7rem", padding: "0px 0px", color:"#002C4F" }}
            className="ourFounderAbout"
          >
            MD (Anesthesiology)| FNB (CCM)| EDIC | FCCP | IFCCM | Canadian
            Critical care Fellowship (University of Toronto) | MBA (Healthcare
            Management) | Associate Director and HOD | Department of Critical
            Care | Medanta Hospital, Ranch
          </Typography>
          <Box className="ourFoundersHorizontalLine"></Box>
        </Box>

        <Box
          // sx={{ flexGrow: 1 }}
          className="OurFoundersLeftCard"
        >
          <img src={Sananta} width={70} height={70} />
          <Typography sx={{ fontSize: "1.3rem", mt: 2 }}>
            <b>Dr. Sananta Kumar Dash</b>
          </Typography>
          <Typography sx={{ fontSize: "0.8rem", mt: 1, mb: 3 }}>
            Director
          </Typography>
          <Typography
            // sx={{ fontSize: "0.7rem", color:"#002C4F" }}
            className="ourFounderAbout"
          >
            “My aim is to democratize and transform the education landscape in
            Bharat.”
          </Typography>
          <Box className="ourFoundersHorizontalLine"></Box>
        </Box>
      </div>

      <Typography className="whyChooseUsHead">
        Why <span className="AquaColor">Choose Us?</span>
      </Typography>
      <Box className="whyChooseUsSection">
        <Box className="countryWiseStuBox">
          <ul type="disc">
            <Typography sx={{ fontSize: "1rem", margin: "20px 2px" }}>
              <b>Country Wise Student</b>
            </Typography>
            <li>India - 2,000</li>
            <li>UAE - 1,300</li>
            <li>USA - 6,060</li>
            <li>Australia - 2,700</li>
          </ul>
        </Box>
        <Box className="whyChooseUsVerticalLine"></Box>
        <img src={globalMap} className="globally" />
      </Box>

      {/* <Box className="percentageOfSuccess">
        <Box
          sx={{
            backgroundColor: "#FFF3E3",
            borderRadius: "9px",
            width: "135px",
            height: "114px",
          }}
        >
          <h1 style={{ marginTop: 4 }}>800+</h1>
          <p style={{ fontSize: "0.8rem" }}>Students</p>
        </Box>
        <Box
          sx={{
            backgroundColor: "#FFEEEE",
            borderRadius: "9px",
            width: "135px",
            height: "114px",
          }}
        >
          <h1>3+</h1>
          <p style={{ fontSize: "0.8rem" }}>Glorious Years</p>
        </Box>
        <Box
          sx={{
            backgroundColor: "#E4FAFF",
            borderRadius: "9px",
            width: "135px",
            height: "114px",
          }}
        >
          <h1>90%</h1>
          <p style={{ fontSize: "0.8rem" }}>Success Rate</p>
        </Box>
        <Box
          sx={{
            backgroundColor: "#ECE7FF",
            borderRadius: "9px",
            width: "135px",
            height: "114px",
          }}
        >
          <h1>100+</h1>
          <p style={{ fontSize: "0.8rem" }}>Teaching Videos</p>
        </Box>
      </Box> */}

      <img src={NewsLetter} width="100%" />
      {/* <Footer/> */}
    </>
  );
};

export default Aboutus;
