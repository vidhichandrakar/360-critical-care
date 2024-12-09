import { Typography, Box } from "@mui/material";
import React from "react";
import GoogleLogo from "../../Media/Media_Image/play-store.png";
import AppLogo from "../../Media/Media_Image/app-store.png";
import Container from "@mui/material/Container";
import arrowright from "../../Media/Images/arrow-right.png";
import arrowleft from "../../Media/Images/arrow-left.png";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import EastIcon from "@mui/icons-material/East";
import NewsLetter from "../../Media/ProjectImage/AllCourseImg3.jpg";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import mobileImg from "../../Media/Images/mobileImg.jpg";
// import TransparentMobileImg from '../../Media/Images/MobileMockup.png';


const steps = [
  {
    id: "1",
    label: "Rajeev Kandal",
    description: `Thank you to all the teachers for the help provided during our theory, practical & revision sessions. We owe our success to all of you. `,
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
];

const Analytics = ({}) => {
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
    <>
      <Box className="appAdvertisement">
        <Box className="appAdvertisement-firstSection">
          <Typography className="appAdvertisementHead">
            Join 15 Million students on the app today!
          </Typography>
          <Box sx={{mt: 3}}>
          <Typography className="paraFontSize-forMobileView-common " sx={{lineHeight: "2.5rem"}}>Live & recorded classes available at ease</Typography>
          <Typography className="paraFontSize-forMobileView-common">dashboard for progress tracking</Typography>
          <Typography className="paraFontSize-forMobileView-common">
            Millions of practice questions at your fingertips
          </Typography>
          </Box>
          <div className="googlePlay-n-appStore" style={{marginTop: "8%"}}>
            <img
              src={GoogleLogo}
              width={100}
              height={40}
              className="appLogo-mobAd"
            />
            <img
              src={AppLogo}
              width={100}
              height={40}
              className="mrlogo-mobAd"
            />
          </div>
        </Box>

        <Box>
          <img
            // src={TransparentMobileImg}
            width={450}
            height={350}
            className="transparentMobile"
            style={{marginBottom: "-22px"}}
          />
        </Box>
      </Box>

      <div className="TestimonialsMain">
        <Typography className="secondHeading">
          Students of 360 Critical Care
        </Typography>
        <Typography sx={{ color: "#ffffff", fontSize: "0.9rem" }} className="paraFontSize-forMobileView-common">
          Hear from our students
        </Typography>

        <div className="TestimonialsCard">
          <ArrowBackIosNewIcon
            className="Arrow1"
            onClick={handleBack}
            disabled={activeStep === 0}
          />

          <Box className="studentsSliderBoxes">
          <Box
            sx={{ maxWidth: 400, flexGrow: 1 }}
            className="TestimonialsLeftCard"
          >
            <p className="testimonialPara wrap1-text-50-archiver">
              <b> {steps[activeStep]?.description}</b>
            </p>
            {/* <h3 className="names">{steps[activeStep]?.label}</h3> */}
          </Box>

          <Box
            sx={{ maxWidth: 400, flexGrow: 1 }}
            className="TestimonialsLeftCard cardRight"
          >
            <p className="testimonialPara wrap1-text-50-archiver">
              <b> {steps[activeStep]?.description}</b>
            </p>
          </Box>

          <Box
            sx={{ maxWidth: 400, flexGrow: 1 }}
            className="TestimonialsLeftCard cardRight"
          >
            <p className="testimonialPara wrap1-text-50-archiver">
              <b> {steps[activeStep]?.description}</b>
            </p>
          </Box>
          </Box>


          <ArrowForwardIosIcon
            className=" Arrow2"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          />
        </div>
      </div>
    </>
  );
};
export default Analytics;
