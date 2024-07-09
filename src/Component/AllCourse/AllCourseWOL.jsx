import { Box, Button, Typography } from "@mui/material";
import react, { Fragment } from "react";
import homeimg from "../../Media/ProjectImage/AllCourseHome.jpg";
import cardimg from "../../Media/ProjectImage/AllCourseCard.jpg";
import NewsLetter from "../../Media/ProjectImage/AllCourseImg3.jpg";
import JoinImg from "../../Media/ProjectImage/AllCourseImg4.jpg";
import "../../CSS/Courses.css";
import { AllCourseWOLCard, PopularCard } from "../../JsonData/JsonData";

const AllCourseWOL = () => {
  return (
    <Fragment>
      <Box className="HeadimgBox">
        <img src={homeimg} width="100%" />
      </Box>
      <Box className="CoursesCardMainBox">
        {AllCourseWOLCard?.length &&
          AllCourseWOLCard?.map((item) => {
            return (
              <Box className="CradBox">
                <img src={cardimg} width={300} height={150} />
                <Box className="CardTextBox">
                  <Typography className="CardHeading">
                    {item.heading}
                  </Typography>
                  <Box className="Price_ButtonBox">
                    <Box>
                      <Typography sx={{ fontWeight: 600 }}>
                        {item.Special}
                      </Typography>
                      <Box className="PriceBox">
                        <Typography sx={{ fontWeight: 600 }}>
                          {item.price}
                        </Typography>
                        <Typography sx={{ ml: "100px", color: "grey" }}>
                          $30000
                        </Typography>
                        <Typography sx={{ ml: 6 }}>40% OFFs</Typography>
                      </Box>
                    </Box>
                    <Button variant="contained">Explore Now</Button>
                  </Box>
                </Box>
              </Box>
            );
          })}
      </Box>
      <Box>
        <img src={JoinImg} width="100%" />
      </Box>
      <Box className="PopularCourseMainBox">
        <Typography>
          Our <span>Popular Course</span>
        </Typography>

        <Box className="PopularCourseBox">
          {PopularCard.map((item) => {
            return (
              <Box className="PopularCardBox">
                <img src={cardimg} width={380} height={150} />
                <Box>
                  <Typography>{item.Para1}</Typography>
                  <Typography>{item.Para2}</Typography>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
      <Box>
        <img src={NewsLetter} width="100%" />
      </Box>
    </Fragment>
  );
};

export default AllCourseWOL;
