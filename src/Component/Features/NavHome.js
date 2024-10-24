import React, { Fragment, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image1 from "../../Media/Images/CorrectFirstImg.jpg";
import Image2 from "../../Media/Images/HomePageSndImg.jpg";
import MobileViewHeadimg from "../../Media/Images/AllcourseHeadImg.png";
import { banner } from "../ApiFactory/ApiAction";

const NavHome = () => {
  const [bannerAPI, setBannerAPI] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    banner({
      callBack: (response) => {
        console.log("API response:", response.data);
        setBannerAPI(response.data);
        setIsLoading(false);
      },
      onError: (err) => {
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
  const landingPageBanners = bannerAPI.filter(banner => banner.webpage_text === "About Us" && banner.web_banner_position_text === "Top");

  // Get the last banner from the filtered banners
  const lastBanner = landingPageBanners.length > 0 ? landingPageBanners[landingPageBanners.length - 1] : null;

  // Get the last banner entry
  //const lastBanner = bannerAPI.length > 0 ? bannerAPI[bannerAPI.length - 1] : null;

  console.log("Last Banner ", lastBanner);

  return (
    <Fragment>
      <div>
        {isLoading && <p>Loading banners...</p>} {/* Display loading message */}
        {error && <p>{error}</p>} {/* Display error if it occurs */}
        <div className="homeImage">
          <img src={Image1} className="WebViewImg"/>
          <img src={Image1} className="MobileViewImg" />
        </div>

        {!isLoading && !error && lastBanner && lastBanner.webpage_text === "Landing Page" && (
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

            {/* Static second image */}
            <img
              src={Image2}
              alt="Second Image"
              height={600}
              className="scndImgOfHomePage"
            />
          </Fragment>
        )}
      </div>
    </Fragment>
  );
};

export default NavHome;
