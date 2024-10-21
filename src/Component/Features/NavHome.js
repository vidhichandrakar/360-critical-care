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
  };

  // Get the last banner entry
  const lastBanner = bannerAPI.length > 0 ? bannerAPI[bannerAPI.length - 1] : null;


  console.log("Last Banner ", lastBanner);

  return (
    <Fragment>
      <div>
        {isLoading && <p>Loading banners...</p>} {/* Display loading message */}
        {error && <p>{error}</p>} {/* Display error if occurs */}

        {!isLoading && !error && lastBanner && (
          <Fragment>
            {/*Check if the web_banner_type_text is "Banner"*/}
            {lastBanner.web_banner_type_text === "Banner" && (
              <div className="homeImage">
                {/* <img
                    src={Image1}
                    className="WebViewImg"
                    alt="First Image"
                  />
                  <img
                    src={MobileViewHeadimg}
                    className="MobileViewImg"
                    alt="Mobile View Header"
                  /> */}
                {lastBanner.web_banner_links.map((link) => (
                  <Fragment key={link._id}>
                    {/* Display web banner images */}
                    <img
                      src={link.banner_url}
                      className="WebViewImg"
                      alt="Web View Banner"
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
            {/* Slider Rendering */}
            {lastBanner.web_banner_type_text === "Slider" && lastBanner.web_banner_links && (
              <div className="slider-container" style={{ marginTop: "20px", width: "100%" }}>
                <Slider {...settings}>
                  {lastBanner.web_banner_links.map((link) => (
                    <div key={link._id}>
                      {/* You can verify banner_url by placing it directly into an <img> */}
                      <img
                        src={link.banner_url}
                        alt="Slider Banner"
                        style={{ width: "100%", height: "auto" }} // Ensure images fit within the slider
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
