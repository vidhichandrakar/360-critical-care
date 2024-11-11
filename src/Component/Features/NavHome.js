import React, { Fragment, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image1 from "../../Media/Images/CorrectFirstImg.jpg";
import Image2 from "../../Media/Images/HomePageSndImg.jpg";
import { banner } from "../ApiFactory/ApiAction";

const NavHome = () => {
  const [bannerAPI, setBannerAPI] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    banner({
      callBack: (response) => {
        console.log("API response:", response.data);
        setBannerAPI(response.data);
        setIsLoading(false);
      },
      error: (err) => {
        setError("Failed to fetch banners");
        setIsLoading(false);
        setBannerAPI([]);
      }
    });
  }, []);

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

  const landingPageBanners = bannerAPI.filter(banner =>
    banner.webpage_text === "Landing Page" && banner.web_banner_position_text === "Top"
  );

  const lastBanner = landingPageBanners.length > 0 ? landingPageBanners[landingPageBanners.length - 1] : null;

  console.log("Last Banner ", lastBanner);

  return (
    <div>
      {isLoading && <p>Loading banners...</p>}
      {error && <p>{error}</p>}

      {/* <div className="homeImage">
        <img src={Image1} className="WebViewImg" alt="Main Banner" />
        <img src={Image1} className="MobileViewImg" alt="Mobile Main Banner" />
      </div> */}

      {!isLoading && !error && lastBanner && (
        <Fragment>
          {lastBanner.web_banner_type_text === "Banner" && (
            <div className="homeImage">
              {lastBanner.web_banner_links?.map((link) => (
                <Fragment key={link._id}>
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

      <img
        src={Image2}
        alt="Second Image"
        height={600}
        className="scndImgOfHomePage"
      />
    </div>
  );
};

export default NavHome;
