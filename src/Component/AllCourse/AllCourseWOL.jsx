import { Box, Button, Typography } from "@mui/material";
import react, { Fragment } from "react";
import "../../CSS/Courses.css";
import NewsLatter from "../MainComponent/LandingpageSubComponent/NewsLatter";
import { getAllCourses, getAllCoursesFilter, getPopularColurses } from "../ApiFactory/ApiAction";
import { useState } from "react";
import { useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { banner } from "../ApiFactory/ApiAction";
import { useNavigate } from "react-router-dom";
import { tripmHtmlTagsToNormalFormat } from "../util/CommonUtil";
import { useLocation } from "react-router-dom";
import RestartAltIcon from '@mui/icons-material/RestartAlt';

const AllCourseWOL = () => {

    const [allCourseData, setAllCourseData] = useState([])

    const [bannerAPI, setBannerAPI] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // Loading state
    const [error, setError] = useState(null); // Error state
    const [popularColurses, setPopularColurses] = useState([]);

    const navigate = useNavigate();

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
                banner.webpage_text === "All Course (Login)" &&
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

    let location = useLocation();
    const category_id = location?.state?.category_id;
    const sub_category_id = location?.state?.subcategories;

    useEffect(() => {
        if (category_id || sub_category_id) {
            getAllCoursesFilter({
                category_id: category_id,
                subcategories: sub_category_id,
                callBack: (response) => {
                    setAllCourseData(response.data)
                }
            })
        }
        else {
            getAllCourses({
                callBack: (response) => {
                    setAllCourseData(response.data)
                }
            })
        }
    }, [])



    useEffect(() => {
        getPopularColurses({
            callBack: (response) => {
                setPopularColurses(response.data);
            },
        });
    }, []);

    const handleDiscountPercent = (price, offer_price) => {
        return Math.floor(((price - offer_price) / price) * 100) + " %";
    };

    const handleExplore = (courseId) => {
        navigate("/ExploreCourses", { state: { courseId: courseId } });
    };

    const handleReset = () => {
        navigate("/Allcourse");
        window.location.reload()
    }

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
            <Box sx={{ marginTop: "5%", display: "flex", flexDirection: "row", justifyContent: "right", padding: "10px 60px" }}>
                <Button sx={{ cursor: "pointer" }} onClick={handleReset} className="reset-btn"><RestartAltIcon />Reset</Button>
            </Box>
            {allCourseData?.length != null ? <Box className="CoursesCardMainBox">
                {allCourseData?.length && allCourseData?.map((item) => {
                    return <Box className="CradBox">
                        <Box className="CardBoxImg">
                            <img src={item.thumbnail_path_desktop} className="CoursesCardImg" />
                        </Box>
                        <Box className="CardTextBox"    >
                            <Typography className="CardHeading .wrap-text-50 ">
                                {item?.course_name}
                            </Typography>
                            <Box className="Price_ButtonBox">
                                <Box>
                                    <Typography sx={{ fontWeight: 600 }}>
                                        Special Discounted Price
                                    </Typography>
                                    <Box className="PriceBox">
                                        <Box sx={{ display: "flex", flexDirection: "row", width: "60%" }}>
                                            <Typography sx={{ fontWeight: 600 }}>
                                                ₹{item.durations?.length ? item.durations[0]?.offer_price : ""}
                                            </Typography>
                                            <Typography sx={{ ml: "100px", color: "grey", textDecoration: "line-through" }}>
                                                ₹{item.durations[0]?.price}
                                            </Typography>
                                        </Box>
                                        <Typography sx={{ ml: 6 }} className="offBox">
                                            {item.durations[item?.durations?.length - 1]
                                                ?.offer_price &&
                                                item.durations[item?.durations?.length - 1]?.price
                                                ? handleDiscountPercent(
                                                    item.durations[item?.durations?.length - 1]
                                                        .price,
                                                    item.durations[item?.durations?.length - 1]
                                                        .offer_price
                                                )
                                                : null}
                                        </Typography>

                                    </Box>
                                </Box>
                                <Button variant="contained" className="ExploreButton"
                                    onClick={() => handleExplore(item?.course_id)}>
                                    Explore Now
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                })}
            </Box> : <Box>No course available</Box>}

            <Box className="JoinContainer">
                <Typography className="JoinHeading">Join Our Free Webinar</Typography>
                <Button className="Joincentered" variant="contained"><span className="JoinNow">Join Now</span><span className="Subscribe">Subscribe</span></Button>
            </Box>

            <Box className="PopularCourseMainBox">
                <Typography sx={{ fontSize: "2rem", fontWeight: 700 }}>Our <span className="HeadingColor">Popular Course</span></Typography>

                <Box className="PopularCourseBox">
                    {popularColurses?.length === "" && popularColurses?.map((data) => {
                        return (<Box className="PopularCardBox">
                            <img src={data?.thumbnail_path_desktop} className="Cardimgs" />
                            <Box>
                                <Typography className="Para1 .wrap-text-50" sx={{ mt: 1 }}>
                                    {data?.course_name}
                                </Typography>
                                <Typography className="Para2">
                                    {tripmHtmlTagsToNormalFormat(data?.description)}
                                </Typography>
                            </Box>
                        </Box>);
                    })}

                </Box>

            </Box>
            <NewsLatter />
            <Footer /> </Fragment>
    )
}

export default AllCourseWOL;