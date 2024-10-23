import React, { Fragment } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./PrivacyPolicy.css";
import { Box } from "@mui/material";
import { PrivacyPolicyData } from "../../JsonData/AboutData/AboutData";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import NewsLetter from "../../Media/ProjectImage/AllCourseImg3.jpg";
import NewsLatter from "../MainComponent/LandingpageSubComponent/NewsLatter";


function PrivacyPolicy() {
  return (
    <Fragment>
      <Header />
      <Box className="PrivacyPolicyBox">
        <Box className="PPBox PPFontSize">
          <h5 className="PPHeadFontSize">
            <b>
              Privacy <span className="AquaColor">Policy</span>
            </b>
          </h5>
          <p>
            360 Critical Care is committed to protecting the privacy of our
            users. This Privacy Policy outlines how we collect, use, disclose,
            and safeguard your personal information. By using our
            [website/services/products], you agree to the terms outlined in this
            policy.
          </p>
        </Box>
        <Box></Box>

        <Box>
          <div className="PrivacyTextBox PPFontSize">
            <p className="privacyPolicyHead">
              1. Information We Collect
            </p>
            <p >We may collect the following types of information:</p>
            <ul className="List">
              <li>
                <b>Personal Information: </b> This may include your name, email
                address, phone number, and other identifiers provided by you.
              </li>
              <li>
                <b>Non-Personal Information: </b> We may automatically collect
                certain non-personal information, such as browser type, device
                information, and usage data, to improve our services.
              </li>
            </ul>
          </div>

          <div className="PrivacyTextBox PPFontSize">
            <p className="privacyPolicyHead">
              2. How We Use Your Information
            </p>
            <p>
              We may use the collected information for the following purposes:
            </p>
            <ul className="List">
              <li>
                To provide, maintain, and improve our
                [website/services/products].
              </li>
              <li>
                To personalize your experience and deliver relevant content.
              </li>
              <li>To respond to your inquiries, comments, or questions.</li>
              <li>To send periodic emails or updates.</li>
            </ul>
          </div>

          <Box>
            {PrivacyPolicyData.map((value) => (
              <div className="PrivacyTextBox PPFontSize">
                <p className="privacyPolicyHead">
                  {value.heading}
                </p>
                <p>{value.para}</p>
              </div>
            ))}
          </Box>
        </Box>
      </Box>
      <NewsLatter />
      <Footer />
    </Fragment>
  );
}

export default PrivacyPolicy;
