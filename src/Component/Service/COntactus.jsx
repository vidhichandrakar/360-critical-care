import React, { Fragment, useState } from "react";
import "./ContactUs.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Box, Button, Typography } from "@mui/material";
import { FAQData } from "../../JsonData/AboutData/AboutData";
import Divider from "@mui/material/Divider";
import contacUsFirstImg from "../../Media/Images/contactUsFirstImg.png";
import MobileViewHeadimg from "../../Media/Images/AllcourseHeadImg.png";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import NewsLatter from "../MainComponent/LandingpageSubComponent/NewsLatter";
import { contactUsDetails } from "../ApiFactory/ApiAction";

const COntactus = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    mobile: "",
    email: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({
    mobile: "",
    email: "",
  });
  const handleInputChange = (e, type) => {
    console.log("e->", e, "type--------->", type);
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const validateMobile = (mobile) => {
    const mobilePattern = /^\d{10}$/;
    return mobilePattern.test(mobile);
  };

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleSubmit = (e) => {
    const mobileError = validateMobile(formValues.mobile)
      ? ""
      : "Mobile number must be exactly 10 digits.";
    const emailError = validateEmail(formValues.email)
      ? ""
      : 'Email must contain "@" and "." in the correct format.';

    setFormErrors({
      mobile: mobileError,
      email: emailError,
    });

    if (!mobileError && !emailError) {
      console.log("Validation passed:", formValues);
      let payload = {
        Name: formValues.name,
        email: formValues.email,
        mobile_no: formValues.mobile,
        message: formValues.message,
      };
      contactUsDetails({
        payload: payload,
        callBack: (response) => {
          console.log("----->", response);
        },
      });
      // Add logic to handle successful validation
    }
  };
  return (
    <Fragment>
      <Header />
      {/* <img
            src={contacUsFirstImg}
            className="contacUsFirstImg"
          /> */}
      <div className="homeImage">
        <img src={contacUsFirstImg} className="WebViewImg" />
        <img src={MobileViewHeadimg} className="MobileViewImg" />
      </div>
      <Box className="ContactMainBox">
        <Box className="FormBox">
          <Box className="getInTouch">
            <Typography className="getInTouch-head">
              <b>
                Get in <span className="AquaColor">Touch</span>
              </b>
            </Typography>
            <Typography sx={{ mt: 2, mb: 5, fontSize: "0.9rem" }}>
              Our team is composed of dedicated professionals with a passion for
              education. Each member brings a unique set of skills and expertise
              to ensure the highest quality of learning for our students.
            </Typography>

            <Box className="getInTouch-about">
              <Box className="getInTouchAbtSection">
                <Box className="getInTouchVerticalLine"></Box>
                <Typography sx={{ fontSize: "0.9rem" }}>
                  Plot/Flat No-502, Adhikary Arcade, Bariatu Road, Bariantu
                  Ranchi, Jharkhand
                </Typography>
              </Box>

              <Box className="getInTouchAbtSection">
                <Box className="getInTouchVerticalLine"></Box>
                <Box>
                  <Typography sx={{ fontSize: "0.9rem" }}>
                    +91-7070993343
                  </Typography>
                  <Typography sx={{ fontSize: "0.9rem" }}>
                    +91-9348938039
                  </Typography>
                </Box>
              </Box>

              <Box className="getInTouchAbtSection">
                <Box className="getInTouchVerticalLine"></Box>
                <Typography sx={{ fontSize: "0.9rem" }}>
                  www.360criticalcare.com
                </Typography>
              </Box>

              <Box className="getInTouchAbtSection">
                <Box className="getInTouchVerticalLine"></Box>
                <Typography sx={{ fontSize: "0.9rem" }}>
                  360criticalcare@gmail.com
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box className="DetailsFormBox">
            {/* <form onSubmit={handleSubmit}> */}
            <Box
              sx={{ display: "flex", flexDirection: "row", textAlign: "left" }}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography>Name</Typography>
                <TextField
                  hiddenLabel
                  id="filled-hidden-label-small"
                  size="small"
                  className="textfieldName"
                  name="name"
                  onChange={handleInputChange}
                  value={formValues.name}
                />
              </Box>
              <Box sx={{ ml: 2 }}>
                <Typography>Mobile</Typography>
                <TextField
                  hiddenLabel
                  id="filled-hidden-label-small"
                  size="small"
                  className="textfieldName"
                  name="mobile"
                  value={formValues.mobile}
                  onChange={handleInputChange}
                  error={!!formErrors.mobile}
                  helperText={formErrors.mobile}
                  type="number"
                  onInput={(e) => {
                    // Prevents more than 10 digits from being entered
                    if (e.target.value.length > 10) {
                      e.target.value = e.target.value.slice(0, 10);
                    }
                  }}
                  sx={{
                    "& input[type=number]": {
                      "-moz-appearance": "textfield", // Firefox
                    },
                    "& input[type=number]::-webkit-outer-spin-button": {
                      "-webkit-appearance": "none",
                      margin: 0,
                    },
                    "& input[type=number]::-webkit-inner-spin-button": {
                      "-webkit-appearance": "none",
                      margin: 0,
                    },
                  }}
                />
              </Box>
            </Box>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "left",
                  mt: 2,
                }}
              >
                <Typography>Email</Typography>
                <TextField
                  hiddenLabel
                  id="filled-hidden-label-small"
                  size="small"
                  sx={{ backgroundColor: "rgba(232, 232, 232, 0.549)" }}
                  name="email"
                  value={formValues.email}
                  onChange={handleInputChange}
                  error={!!formErrors.email}
                  helperText={formErrors.email}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "left",
                  mt: 2,
                }}
              >
                <Typography>Send Message</Typography>
                <TextField
                  id="outlined-multiline-flexible"
                  multiline
                  sx={{ backgroundColor: "rgba(232, 232, 232, 0.549)" }}
                  rows={5}
                  name="message"
                  value={formValues.message}
                  onChange={handleInputChange}
                />
              </Box>
            </Box>
            <Button
              variant="contained"
              onClick={handleSubmit}
              className="sendMsgButton"
            >
              Send message
            </Button>
            {/* </form> */}
          </Box>
        </Box>
       
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29293.035269702268!2d85.33562851618916!3d23.40162025020351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e15783b9c0b5%3A0x5c22411ea37e8259!2sBariatu%2C%20Ranchi%2C%20Jharkhand%20834009!5e0!3m2!1sen!2sin!4v1710535703912!5m2!1sen!2sin"
          className="contactUsMap"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </Box>
      <NewsLatter />
      <Footer />
    </Fragment>
  );
};

export default COntactus;
