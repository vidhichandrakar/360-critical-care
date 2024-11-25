import React, { Fragment, useEffect, useState } from "react";
import { Typography, Box, Button, colors } from "@mui/material";
import building from "../../../Media/Images/hospnew.png";
import transparentOverBuilding from "../../../Media/Images/Rectangle 6.png";
import ExcelInCC from "../../../Media/Images/ExcelInCriticalCareImg.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { banner, getOnlineCourseCount } from "../../ApiFactory/ApiAction";

const ExploreTech = () => {
  const [bannerAPI, setBannerAPI] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const [onlineCourseCount, SetOnlineCourseCount] = useState([]);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null); // Error state

  const bgColor = ["#FFF3E3","#ffeeee","#e4faff","#ece7ff"];

  useEffect(() => {
    banner({
      callBack: (response) => {
        setBannerAPI(response.data);
        setIsLoading(false);
      },
      onError: (err) => {
        setError("Failed to fetch banners");
        setIsLoading(false);
        setBannerAPI([]); // Reset banner API to avoid stale data
      },
    });
  }, []);

  useEffect(() => {
    getOnlineCourseCount({
      callBack: (response) => {
        SetOnlineCourseCount(response.data);
      },
      error: (err) => {
        setError("Online course Error");
      },
    });
  }, []);

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  // Filter banners where webpage_text is "About Us" and web_banner_position_text is "Middle"
  const landingPageMiddleBanners = bannerAPI.filter(
    (banner) =>
      banner.webpage_text === "Landing Page" &&
      banner.web_banner_position_text === "Middle"
  );

  // Get the last banner from the filtered banners
  const lastBanner =
    landingPageMiddleBanners.length > 0
      ? landingPageMiddleBanners[landingPageMiddleBanners.length - 1]
      : null;

  return (
    <Fragment>
      <div class="Imgcontainer">
        <Box className="demo"></Box>
        <div class="centered">
          <Box className="CenteredHeading">
            <Typography className="ExploreHead">
              Explore Tech-Enabled Online Classes
            </Typography>
            <Typography className="ExplorePara">
              Creating new Benchmarks in Learning experiences
            </Typography>
          </Box>

          <div class="centeredBox">
            <Box className="ImgBoxData">
              {onlineCourseCount?.map((item, index) => (
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
              
              {/* <Box
                sx={{
                  backgroundColor: "#FFF3E3",
                }}
                className="DataCardBox"
              >
                <h1 className="aboutExploreClasses-head">
                  <b>{onlineCourseCount[0]?.count_value}+</b>
                </h1>
                <p className="aboutExploreClasses-para">
                  <b>{onlineCourseCount[0]?.count_name}</b>
                </p>
              </Box>
              <Box
                sx={{
                  backgroundColor: "#ffeeee",
                }}
                className="DataCardBox"
              >
                <h1 className="aboutExploreClasses-head">
                  <b>{onlineCourseCount[1]?.count_value}+</b>
                </h1>
                <p className="aboutExploreClasses-para">
                  <b>{onlineCourseCount[1]?.count_name}</b>
                </p>
              </Box>
              <Box
                className="DataCardBox"
                sx={{
                  backgroundColor: "#e4faff",
                }}
              >
                <h1 className="aboutExploreClasses-head">
                  <b>{onlineCourseCount[2]?.count_value}%</b>
                </h1>
                <p className="aboutExploreClasses-para">
                  <b>{onlineCourseCount[2]?.count_name}</b>
                </p>
              </Box>
              <Box
                sx={{
                  backgroundColor: "#ece7ff",
                }}
                className="DataCardBox"
              >
                <h1 className="aboutExploreClasses-head">
                  <b>{onlineCourseCount[3]?.count_value}+</b>
                </h1>
                <p className="aboutExploreClasses-para">
                  <b>{onlineCourseCount[3]?.count_name}</b>
                </p>
              </Box> */}
            </Box>
          </div>
        </div>
      </div>

      <Fragment>
        <div>
          {isLoading && <p>Loading banners...</p>}{" "}
          {/* Display loading message */}
          {error && <p>{error}</p>} {/* Display error if it occurs */}
          {!isLoading && !error && lastBanner && (
            <Fragment>
              {/*Check if the web_banner_type_text is "Banner"*/}
              {lastBanner.web_banner_type_text === "Banner" && (
                <div style={{ marginTop: "0px", width: "100%" }}>
                  {lastBanner.web_banner_links?.map((link) => (
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
              {lastBanner.web_banner_type_text === "Slider" &&
                lastBanner.web_banner_links && (
                  <div className="slider-container">
                    <Slider {...settings}>
                      {lastBanner.web_banner_links.map((link) => (
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

      {/* <img src={ExcelInCC} height={240} className="excelInCriticalcareImg" /> */}
    </Fragment>
  );
};
export default ExploreTech;
