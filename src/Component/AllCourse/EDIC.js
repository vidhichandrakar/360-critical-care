import React, { Fragment } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Box } from "@mui/material";

const EDIC = () => {
    return(
        <Fragment>
            <Header />
            <Box className="TopCrashBox">
                <h5><b>Trics-1  for EDIC-1 Course</b></h5>
                <Box className="ContentBox">
                    <p>TRICS - (Targeted Review of Intensive Care Syllabus)- EDIC 1 preparatory course</p>
                    <ul className="List">
                        <li>This course is meant for preparation of EDIC-1.</li>
                        <li>Once enrolled it will provide a detail overview of syllabus and study material aiming to cover the syllabus</li>
                        <li>The candidate will have access to the “TRICS cloud”. TRICS- cloud is a unique resource material meant for preparation of “EDIC 1”.</li>
                        <li>The whole course consists of 8 modules (Covering 8 domains of EDIC-1 Syllabus). The modules are classified as per the EDIC-1 syllabus. Each module consists of pre-reading for a week followed by a mock test as per the EDIC-1 standard comprising of Type-A and Type-K questions.</li>
                        <li>Participants can access the module MOCK exam through the “360criticalcare app” from any where and anytime.</li>
                        <li>They can self evaluate the answer with the detailed answer key provided.</li>
                    </ul>
                </Box>
            </Box>
            <Footer />
        </Fragment>
    )
}

export default EDIC;