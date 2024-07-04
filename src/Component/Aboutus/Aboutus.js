import React, { Fragment } from "react";
import "./Aboutus.css";
import Logo from "../../Media/Images/Logo.png";
import {
  AboutData,
  Aims,
  Objectives,
} from "../../JsonData/AboutData/AboutData";
import AppLogo from "../../Media/Images/App_Logo.jpg";
import GoogleLogo from "../../Media/Images/Google_logo.png";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Typography, Box, Card } from "@mui/material";

function Aboutus() {
  return (
    <Fragment>
      <Header />
      <Box className="aboutSection">
        <div className="Aboutbox">
          <div className="width_margin textLeft">
            <div className="AboutBox">
              <div className="AboutContent" >
                <p className="Heading">
                  About <span className="AquaColor">Us</span>
                </p>
                <p className="textHead">
                  Critical Care Medicine has progressed to the extent that it
                  has become the backbone of modern medicine and surgical
                  practice. The scope and resulting practice of Critical Care
                  are emerging rapidly. This initiative aims at providing an
                  up-to-date resource of intensive care practice. It aims to
                  narrow the gap between the pioneers of the subject and the
                  Critical Care practitioners world-wide. 
                </p>
                <p className="textHead">
                  The idea of this endeavor originated with....
                </p>
              </div>
              <div className="LogoBox">
              <img src={Logo} sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} className='AboutLogo'  />
              </div>
            </div>

            <p  className="headSize">Aims</p>
            {Aims.map((value) => (
              <div>
                <p className="textHead">
                <b>{value.heading} : </b></p>
                <p className="textHead">{value.para}</p>
              
              </div>
            ))}
            <p className="headSize">Objectives</p>
            {Objectives.map((value) => (
              <div><p className="textHead">
                <b>{value.heading} : </b>
              </p>
              <p className="textHead">{value.para}</p>
              </div>
            ))}
          </div>
        </div>
      </Box>
      <Footer />
    </Fragment>
  );
}

export default Aboutus;
