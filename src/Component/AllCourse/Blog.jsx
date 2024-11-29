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
  

  console.log("Blogdata :", blogData)

  useEffect(() => {
    banner({
      callBack: (response) => {
        console.log("Banner API response:", response.data);
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

  // Filter banners where webpage_text is "Landing Page"
  const blogBanners = bannerAPI.filter(banner => banner.webpage_text === "Blog");

  // Get the last banner from the filtered banners
  const lastBanner = blogBanners.length > 0 ? blogBanners[blogBanners.length - 1] : null;



  return (
    <Fragment>
      <Header />

      <Fragment>
        <div>
          {isLoading && <p>Loading banners...</p>} {/* Display loading message */}
          {error && <p>{error}</p>} {/* Display error if it occurs */}

          {!isLoading && !error && lastBanner && (
            <Fragment>
              {/*Check if the web_banner_type_text is "Banner"*/}
              {lastBanner.web_banner_type_text === "Banner" && (
                <div className="homeImage">
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
              {lastBanner.web_banner_type_text === "Slider" && lastBanner.web_banner_links && (
                <div className="slider-container" style={{ marginTop: "60px", width: "100%" }}>
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

      {/* <Box className="HeadimgBox">
        {console.log(blogData, "blogData")}
        <img src={homeimg} width="100%" className="WebViewImg" />
        <img src={MobileViewHeadimg} className="MobileViewImg" />
      </Box> */}


      {/* <Box className="FeaturesBLog">
        <Typography>
          Featured story
        </Typography>
        <Box className="FeaturesDataBox">
          <img src={cardimg} className="Cardimgs" />
          <Box sx={{ ml: 2 }}>
            <Typography>
              Sbi clark first waitng list nvkdnvkdjvh cdbncjkds ndhbv vbfhdkn bdjrlfng vjfheje vkdj
            </Typography>
            <Typography>
              Sbi clark first waitng list nvkdnvkdjvh cdbncjkds ndhbv vbfhdkn bdjrlfng vjfheje vkdj
            </Typography>
          </Box>
        </Box>

      </Box> */}
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
        <Typography className="JoinHeading" style={{fontFamily: "CustomFont"}}>Join Our Free Webinar</Typography>
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
