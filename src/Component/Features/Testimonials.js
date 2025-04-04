import React, { Fragment } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import arrowright from "../../Media/Images/arrow-right.png";
import arrowleft from "../../Media/Images/arrow-left.png";

import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import EastIcon from "@mui/icons-material/East";
import NewsLetter from "../../Media/ProjectImage/AllCourseImg3.jpg";

const steps = [
  {
    id: "1",
    label: "Rajeev Kandal",
    description: `360CC is a place where you can find an amalgamation of learning. I
    feel great because I only studied through 360 Critical Care, and
    because I am from a remote location of Uttarakhand, I had no other
    source for JEE preparation other than the 360CC course.`,
  },
  {
    id: "2",
    label: "Ajay Singh",
    description:
      "An ad group contains one or more ads which target a shared set of keywords.",
  },
  {
    id: "3",
    label: "Dipti Jain",
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
  {
    id: "4",
    label: "Abhinav jain",
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
  {
    id: "5",
    label: "Surendra kumar",
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
];

function Testimonials() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    if (activeStep < maxSteps - 1) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    if (activeStep > maxSteps) {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }
  };

  return (
    <Fragment>
      {/* <div className="TestimonialsMain">
        <h4 className="TestimonialsHeading">Testimonials</h4>
        <Container fixed>
          <Box
            className="boxUnderHeading"
            sx={{
              bgcolor:
                "linear-gradient(90deg, #18568f 0%, #18568f 35%, #199884 100%)",
              height: "0.5vh",
            }}
          />
        </Container>

        <h1 className="secondHeading">
          <span className="hereItFrom">Hear It From </span>
          <span className="theMasters"> The Masters</span>
        </h1>

        <div className="TestimonialsCard">

          <Box
            sx={{ maxWidth: 400, flexGrow: 1 }}
            className="TestimonialsLeftCard"
          >
            <p className="testimonialPara wrap1-text-50-archiver">
              <b> {steps[activeStep]?.description}</b>
            </p>
            <h3 className="names">{steps[activeStep]?.label}</h3>
          </Box>
          <Box
            sx={{ maxWidth: 400, flexGrow: 1 }}
            className="TestimonialsLeftCard cardRight"
          >
            <p className="testimonialPara wrap1-text-50-archiver">
              <b> {steps[activeStep]?.description}</b>
            </p>
            <h3 className="names">{steps[activeStep]?.label}</h3>
          </Box>
        </div>

        <div className="TestimonialsArrow">
          <KeyboardBackspaceIcon
            className="Arrow1"
            onClick={handleBack}
            disabled={activeStep === 0}
          />

          <EastIcon
            className=" Arrow2"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          />
        </div>
      </div> */}

      <Box>
        <img src={NewsLetter} width="100%" />
      </Box>
    </Fragment>
  );
}

export default Testimonials;
