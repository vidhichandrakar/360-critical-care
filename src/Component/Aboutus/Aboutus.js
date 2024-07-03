import React, { Fragment } from "react";
import "./Aboutus.css";
import Logo from "../../Media/Images/Logo.png";
import { AboutData, Aims, Objectives } from "../../JsonData/AboutData/AboutData";
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
        <div className="Aboutbox box-col">
          <div className="width_margin textLeft">
            <h1>About Us</h1>
            <p className="textHead">
              Critical Care Medicine has progressed to the extent that it has
              become the backbone of modern medicine and surgical practice. The
              scope and resulting practice of Critical Care are emerging
              rapidly. This initiative aims at providing an up-to-date resource
              of intensive care practice. It aims to narrow the gap between the
              pioneers of the subject and the Critical Care practitioners
              world-wide. 
            </p>
            <p className="textHead">The idea of this endeavor originated with....</p>
          </div>
        </div>

        <div className="Aboutbox box-col">
        <div className="Testmain">
        <h3>Aims</h3>
         {Aims.map((value) => ( <div className="testBox">
            <p className="textHead"><b>{value.heading} : </b>{value.para}</p>
          </div>))}
          </div>
       </div>

        <div className="Aboutbox box-col">
        <div className="Testmain">
        <h3>Objectives</h3>
         {Objectives.map((value) => ( <div className="testBox">
            <p className="textHead"><b>{value.heading} : </b>{value.para}</p>
          </div>))}
          </div>
       </div>
      </Box>
      <Footer />
    </Fragment>
  );
}

export default Aboutus;
