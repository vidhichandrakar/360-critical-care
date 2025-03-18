import { Box, Button, Typography } from "@mui/material";
import react, { Fragment } from "react";
import homeimg from "../../Media/ProjectImage/AllCourseHome.jpg";
import cardimg from "../../Media/ProjectImage/AllCourseCard.jpg";
import NewsLetter from "../../Media/ProjectImage/AllCourseImg3.jpg";
import JoinImg from "../../Media/ProjectImage/AllCourseImg4.jpg";
import MobileViewHeadimg from "../../Media/Images/AllcourseHeadImg.png"
import "../../CSS/Courses.css";
import { AllCourseWOLCard, PopularCard } from "../../JsonData/JsonData"
import NewsLatter from "../MainComponent/LandingpageSubComponent/NewsLatter";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useState } from "react";
import { getBlog, getBlogCards } from "../ApiFactory/ApiAction";
import { useEffect } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { banner } from "../ApiFactory/ApiAction";

const Blog = () => {

  const [blogData, setBlogData] = useState([])

  const [bannerAPI, setBannerAPI] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const [blogCards, setBlogCards] = useState([]);


  useEffect(() => {
    getBlog({
      callBack: (response) => {
        setBlogData(response.data)
      }
    })
  }, [])
  useEffect(() => {
    getBlogCards({
      callBack: (response) => {
        setBlogCards(response.data)
      },
      error: (err) => {
        setError("Blog Error");
      }
    })
  }, [])


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
        banner.webpage_text === "Blog" &&
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
  const bottomBanner = getLastBannerByPosition(bannerAPI, 3);
  return (
    <Fragment>
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
                    {topBanner.web_banner_links.map((link) => (
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


      <Box className="PopularCourseMainBox">
        <Box className="PopularCourseBox">
          {blogData.map((item) => {

            return ( // Added return statement
              <Box key={item.id} className="PopularCardBox">
                {item.image_url != null ? (
                  <img src={item.image_url} className="Cardimgs" />
                ) : (
                  <img src={cardimg} className="Cardimgs" />
                )}
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
        <Typography className="JoinHeading" style={{ fontFamily: "CustomFont" }}>Join Our Free Webinar</Typography>
        <Button className="Joincentered" variant="contained">
          <span className="JoinNow" >Join Now</span>
          <span className="Subscribe">Subscribe</span>
        </Button>
      </Box>

      <Box className="PopularCourseMainBox">
        <Typography sx={{ fontSize: "2rem", fontWeight: 700 }}>
          Our <span className="HeadingColor">Blogs</span>
        </Typography>

        <Box className="PopularCourseBox">
          {blogCards.map((item) => {
            return (
              <Box key={item.id} className="PopularCardBox">
                {item.image_url != null ? (
                  <img src={item.image_url} className="Cardimgs" />
                ) : (
                  <img src={cardimg} className="Cardimgs" />
                )}
                <Box>
                  <Typography className="Para1" sx={{ mt: 1 }}>
                    {item.title}
                  </Typography>
                  <Typography className="Para2">
                    {item.description}
                  </Typography>
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
