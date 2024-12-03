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

  // Filter banners based on webpage_text and position
  const getBannersByPosition = (banners, position) => {
    return banners.filter(
      (banner) =>
        banner.webpage_text === "Landing Page" &&
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

  console.log("Top Banner:", topBanner);
  console.log("Middle Banner:", middleBanner);
  console.log("Bottom Banner:", bottomBanner);

  return (
    <div>
      {isLoading && <p>Loading banners...</p>}
      {error && <p>{error}</p>}

      {/* <div className="homeImage">
        <img src={Image1} className="WebViewImg" alt="Main Banner" />
        <img src={Image1} className="MobileViewImg" alt="Mobile Main Banner" />
      </div> */}

      {!isLoading && !error && topBanner && (
        <Fragment>
          {topBanner.web_banner_type_text === "Banner" && (
            <div className="homeImage">
              {topBanner.web_banner_links_desktop?.map((link) => (
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
