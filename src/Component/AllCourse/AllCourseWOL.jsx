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
import { getAllCourses } from "../ApiFactory/ApiAction";
import { useState } from "react";
import { useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { banner } from "../ApiFactory/ApiAction";

const AllCourseWOL = () => {

    const [allCourseData, setAllCourseData] = useState([])

    const [bannerAPI, setBannerAPI] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // Loading state
    const [error, setError] = useState(null); // Error state

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
    const blogBanners = bannerAPI.filter(banner => banner.webpage_text === "All Course (Login)");

    // Get the last banner from the filtered banners
    const lastBanner = blogBanners.length > 0 ? blogBanners[blogBanners.length - 1] : null;

    useEffect(() => {
        getAllCourses({
            callBack: (response) => {
                setAllCourseData(response.data)
            }
        })
    }, [])

    console.log("allCourseData : ", allCourseData)
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
                <img src={homeimg} width="100%" className="WebViewImg" />
                <img src={MobileViewHeadimg} className="MobileViewImg" />
            </Box> */}
            {console.log(allCourseData, "allCourseData")}

            <Box className="CoursesCardMainBox">
                {allCourseData?.length && allCourseData?.map((item) => {
                  return   <Box className="CradBox">
                    <Box className="CardBoxImg">
                    <img src={item.thumbnail_path} className="CoursesCardImg"/>
                    </Box>
                    <Box className="CardTextBox"    >
                        <Typography className="CardHeading .wrap-text-50 ">
                           {item?.course_name}
                        </Typography>
                        <Box className="Price_ButtonBox">
                            <Box>
                                <Typography sx={{fontWeight: 600}}>
                                Special Discounted Price
                                </Typography>
                                <Box className="PriceBox">
                                <Box sx={{display: "flex", flexDirection: "row"}}>
                                <Typography sx={{fontWeight: 600}}>
                                    {item.durations?.length ? item.durations[0]?.offer_price : ""}
                                </Typography>
                                <Typography sx={{ml:"100px", color: "grey",textDecoration: "line-through"}}>
                                {item.durations[0]?.price}
                                </Typography>
                                </Box>
                                <Typography sx={{ml:6}} className="offBox">
                                    40% OFF
                                </Typography>

                                    </Box>
                                </Box>
                                <Button variant="contained" className="ExploreButton">
                                    Explore Now
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                })}
            </Box>
            <Box className="JoinContainer">
                <Typography className="JoinHeading">Join Our Free Webinar</Typography>
                <Button className="Joincentered" variant="contained"><span className="JoinNow">Join Now</span><span className="Subscribe">Subscribe</span></Button>
            </Box>
            
            <Box className="PopularCourseMainBox">
                <Typography sx={{fontSize: "2rem", fontWeight: 700}}>Our <span className="HeadingColor">Popular Course</span></Typography>
               
                <Box className="PopularCourseBox">
                     {PopularCard.map((item) => {
                    return  <Box className="PopularCardBox">
                        <img src={cardimg} className="Cardimgs"/>
                        <Box>
                            <Typography className="Para1" sx={{mt: 1}}>
                            {item?.Para1}
                            </Typography>
                            <Typography className="Para2">
                            {item?.Para2}
                            </Typography>
                        </Box>
                    </Box>

          

                    })}
                </Box>

            </Box>
            <NewsLatter />
            <Footer /> </Fragment>
    )
}

export default AllCourseWOL;