import { Box, Button, Typography } from "@mui/material";
import react, { Fragment } from "react";
import homeimg from "../../Media/ProjectImage/AllCourseHome.jpg"
import cardimg from "../../Media/ProjectImage/AllCourseCard.jpg"
import "../../CSS/Courses.css"

const AllCourseWOL = () => {
    return (
        <Fragment>
            <Box className="HeadimgBox">
                <img src={homeimg} />
            </Box>
            <Box className="CoursesCardMainBox">
                <Box className="CradBox">
                    <img src={cardimg} width={300} height={150}/>
                    <Box className="CardTextBox">
                        <Typography>
                            TRICS-1: PreParatory course for EDIC-1 2nd session 2024
                        </Typography>
                        <Box className="Price_ButtonBox">
                            <Box >
                                <Typography>
                                    Special Discounted Price
                                </Typography>
                                <Box className="PriceBox">
                                <Typography>
                                    $17999
                                </Typography>
                                <Typography sx={{ml:4}}>
                                    $30000
                                </Typography>
                                <Typography sx={{ml:4}}>
                                    40% OFF
                                </Typography>

                                </Box>
                            </Box>
                            <Button>
                                Explore Now
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Fragment>
    )
}

export default AllCourseWOL;