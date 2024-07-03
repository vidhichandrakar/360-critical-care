import React, { Fragment } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Box } from "@mui/material";

const IDCCM = () => {
    return(
        <Fragment>
            <Header />
            <Box className="TopCrashBox">
                <h5><b>Trics-IDCCM Course</b></h5>
                <Box className="ContentBox">
                    <p>TRICS -IDCCM (Targeted Review of Intensive Care Syllabus)- IDCCM</p>
                    <ul className="List">
                        <li>Once enrolled it will provide a detail overview of syllabus and study material aiming to cover the syllabus.</li>
                        <li>The candidate will have access to the “TRICS-IDCCM cloud”. TRICS- cloud is a unique resource material meant for preparation of “IDCCM”.</li>
                        <li>The modules are classified as per the IDCCM syllabus. Each module consists of pre-reading for a week followed by a mock test as per the IDCCM standard comprising of Type-A and Type-K questions. This test is followed by a debrief and sharing of tips and tricks for preparation.</li>
                    </ul>
                </Box>
            </Box>
            <Footer />
        </Fragment>
    )
}

export default IDCCM;