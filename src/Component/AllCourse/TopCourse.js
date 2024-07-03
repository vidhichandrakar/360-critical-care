import React, { Fragment } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Box } from "@mui/material";
import { TopCrashCourse } from "../../JsonData/AboutData/AboutData";

const TopCourse = () => {
  return (
    <Fragment>
      <Header />
      <Box className="TopCrashBox">
        <h5>
          <b>Top Crash Course</b>
        </h5>
        <Box className="ContentBox">
          <p>
            This course is meticulously designed with the following
            sophisticated objectives:
          </p>
          {TopCrashCourse.map((value) => (
            <Box>
              <p>
                <b>{value.heading}</b>
              </p>
              <p>{value.para}</p>
            </Box>
          ))}
        <p>
          By aligning these objectives, the course aims to not only impart
          knowledge but also to empower students with the strategic skills and
          confidence necessary to excel in the demanding field of Critical Care
          Medicine examinations.
        </p>
        </Box>
      
      </Box>
      <Footer />
    </Fragment>
  );
};

export default TopCourse;
