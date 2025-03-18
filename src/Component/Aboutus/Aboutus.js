import React, { Fragment, useState, useEffect } from "react";
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
import NewsLatter from "../MainComponent/LandingpageSubComponent/NewsLatter";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { banner, StudentData, Whyus } from "../ApiFactory/ApiAction";

const Aboutus = () => {

  const [bannerAPI, setBannerAPI] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const [whyusData, setWhyusData] = useState();
  const [studentDatas, seStudentDatas] = useState();

  useEffect(() => {
    banner({
      callBack: (response) => {
        setBannerAPI(response.data);
        setIsLoading(false);
      },
      error: (err) => {
        setError("Failed to fetch banners");
        setIsLoading(false);
        setBannerAPI([]); // Reset banner API to avoid stale data
      }
    });
  }, []);

  const bgColor = ["#FFF3E3", "#ffeeee", "#e4faff", "#ece7ff"];
  useEffect(() => {
    StudentData({
      callBack: (response) => {
        seStudentDatas(response?.data)
      },
      error: error => {
        console.error(error)
      }
    })
  }, [])
  useEffect(() => {
    Whyus({
      callBack: (response) => {
        setWhyusData(response?.data)
      },
      error: error => {
        console.error(error)
      }
    })
  }, [])


  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false
  };

  // Filter banners based on webpage_text and position
  const getBannersByPosition = (banners, position) => {
    return banners.filter(
      (banner) =>
        banner.webpage_text === "About Us" &&
        banner.web_banner_position === position
    );
  };

  // Get the last banner from a filtered list
  const getLastBannerByPosition = (banners, position) => {
    const positionBanners = getBannersByPosition(banners, position);
    return positionBanners.length > 0 ? positionBanners[positionBanners.length - 1] : null;
  };

  // Get banners for each position
  const topBanner = getLastBannerByPosition(bannerAPI, 1);
  const middleBanner = getLastBannerByPosition(bannerAPI, 2);
  const bottomBanner = getLastBannerByPosition(bannerAPI, 3)
  return (
    <>
      <Header />
      <Fragment>
        <div>
          {isLoading && <p>Loading banners...</p>} {/* Display loading message */}
          {error && <p>{error}</p>} {/* Display error if it occurs */}

          {!isLoading && !error && topBanner && (
            <Fragment>
              {/*Check if the web_banner_type_text is "Banner"*/}
              {topBanner.web_banner_type_text === "Banner" && (
                <div className="homeImage">
                  {topBanner.web_banner_links_desktop?.map((link) => (
                    <Fragment key={link._id}>
                      {/* Display web banner images */}
                      <img
                        src={link.banner_url}
                        className="WebViewImg"
                        alt="Web View Banner"
                        style={{ width: "100%", height: "auto" }}
                      />
                      <img
                        src={link.banner_url}
                        className="MobileViewImg"
                        alt="Mobile View Banner"
                      />
                    </Fragment>
                  ))}
                </div>
              )}

              {/*Check if the web_banner_type_text is "Slider"*/}
              {topBanner.web_banner_type_text === "Slider" && topBanner.web_banner_links_desktop && (
                <div className="slider-container" style={{ marginTop: "60px", width: "100%" }}>
                  <Slider {...settings}>
                    {topBanner.web_banner_links_desktop.map((link) => (
                      <div key={link._id}>
                        <img
                          className="WebViewImg"
                          src={link.banner_url}
                          alt="Slider Banner"
                          style={{ width: "100%", height: "auto" }}
                        />
                      </div>
                    ))}
                  </Slider>
                </div>
              )}
            </Fragment>
          )}
        </div>
      </Fragment>

      {/* <img
        src={PrepatoryImg}
        width={1697}
        height={360}
        className="aboutUsFirstImg"
        //   style={Margin="23px"}
      /> */}

      <Box className="abt360CriticalCare">
        <img
          src={Stethoscope}
          width={530}
          height={350}
          className="stethoscopeImg"
        />

        <img src={PWRedImg} width={200} height={150} className="PWSRedImg" />
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
          <Typography className="abt360CriticalCare-typography" sx={{ mt: 2 }}>
            The idea of this endeavor originated with Our Founders
          </Typography>

          <Typography sx={{ fontSize: "1rem" }}
            className="mobileViewText"
          >
            360CC Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged.
          </Typography>
          <Typography sx={{ fontSize: "1rem" }}
            className="mobileViewText"
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
          <Box>
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
          </Box>
          <Box>
            <Box className="ourFoundersHorizontalLine"></Box>
            <Box className="ReadmoreBox"><Typography>Read more</Typography><KeyboardArrowUpIcon /></Box>
          </Box>
        </Box>

        <Box
          // sx={{ flexGrow: 1 }}
          className="OurFoundersLeftCard"
        >
          <Box>
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
          </Box>
          <Box>
            <Box className="ourFoundersHorizontalLine"></Box>
            <Box className="ReadmoreBox"><Typography>Read more</Typography><KeyboardArrowUpIcon /></Box>
          </Box>
        </Box>
      </div>

      <Typography className="whyChooseUsHead">
        Why <span className="AquaColor">Choose Us?</span>
      </Typography>
      <Box className="whyChooseUsSection">
        <Box className="countryWiseStuBox">
          <Typography className="countryWiseStudent">
            <b>Country Wise Students:</b>
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center"}}>
            <ul>
              <li>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                  className="country-name-count"
                >
                  <p className="countryNames">{whyusData?.Country_name}</p>
                  <span style={{ marginLeft: "5px" }}> {whyusData?.student_count}</span>
                </div>
              </li>
            </ul>
          </Box>
        </Box>
        <Box className="whyChooseUsVerticalLine"></Box>
        <img src={globalMap} className="globally" />
      </Box>

      <Box className="percentageOfSuccess">
        {/* <Box
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
        </Box> */}
        <Box className="ImgBoxData">
          {studentDatas?.map((item, index) => (
            <Box
              key={index}
              sx={{
                backgroundColor: bgColor[index],
              }}
              className="DataCardBox"
            >
              <h1 className="aboutExploreClasses-head">
                <b>{item.count_value}+</b>
              </h1>
              <p className="aboutExploreClasses-para">
                <b>{item.count_name}</b>
              </p>
            </Box>
          ))}
        </Box>
      </Box>
      <NewsLatter />
      <Footer />
    </>
  );
};

export default Aboutus;
