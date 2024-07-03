import React, { Fragment } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Box } from "@mui/material";

const EDIC2 = () => {
    return(
        <Fragment>
            <Header />
            <Box className="TopCrashBox">
                <h5><b>Trics-2  for EDIC-2 Course</b></h5>
                <Box className="ContentBox">
                    <p>TRICS - (Targeted Review of Intensive Care Syllabus)- EDIC 2 preparatory course</p>
                    <ul className="List">
                        <li>Once enrolled it will provide a detail overview of syllabus and study material aiming to cover the syllabus.</li>
                        <li>The candidate will have access to the “TRICS cloud”. TRICS- cloud is a unique resource material meant for preparation of “EDIC 2”.</li>
                        <li>The whole course consists of 11 modules 11  Modules + 11 Section wise tests.</li>
                        <li>The modules are classified as per the EDIC-2 syllabus. Each module consists of pre-reading for a week followed by a mock test as per the EDIC-2 standard comprising of Type-A and Type-K questions. This test is followed by a debrief and sharing of tips and tricks for preparation.</li>
                    </ul>
                </Box>
            </Box>
            <Footer />
        </Fragment>
    )
}

export default EDIC2;