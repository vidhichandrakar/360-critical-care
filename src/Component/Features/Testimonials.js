import React, { Fragment } from "react";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import arrowright from '../../Media/Images/arrow-right.png'
import arrowleft from '../../Media/Images/arrow-left.png'

import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import EastIcon from '@mui/icons-material/East';

const steps = [
  { id : "1",
    label: 'Rajeev Kandal',
    description: `360CC is a place where you can find an amalgamation of learning. I
    feel great because I only studied through 360 Critical Care, and
    because I am from a remote location of Uttarakhand, I had no other
    source for JEE preparation other than the 360CC course.`,
  },
  {
    id : "2",
    label: 'Create an ad group',
    description:
      'An ad group contains one or more ads which target a shared set of keywords.',
  },
  {
    id : "3",
    label: 'Create an ad',
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
  {
    id : "4",
    label: 'Createewgtrbhbfvd an ad',
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
  {
    id : "5",
    label: 'Creatsagtfre an ad',
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
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };


  return (
    <Fragment>
      <div className="TestimonialsMain">
        <h3 className="TestimonialsHeading">Testimonials</h3>
        <Container fixed>
        <Box className='boxUnderHeading' sx={{ bgcolor: '#cfe8fc', height: '0.5vh' }} />
        </Container>

        <h1 className="secondHeading">
         <span className="hereItFrom">Hear It From </span>
         <span className="theMasters"> The Masters</span>
        </h1>

        <div className="TestimonialsCard">
          {/* <div className="TestimonialsLeftCard">
            <p className="testimonialPara wrap1-text-50-archiver">
              360 Critical Care has been a great contributor to the development
              of my personality. I’ve been following Sanat sir for the past two
              years. I also took local tuition, but I want to give full credit
              to PW because my chemistry was very weak when I joined 360CC, and
              it’s only because of 360CC that I got excellent chemistry marks
              this year in JEE Advance. I am a big fan of the 360CC Star
              faculty.
            </p>
            <h3 className="names">Harshil Paresh Kumar Khatri</h3>
          </div> */}
          {/* <div className="TestimonialsLeftCard"> */}
           
             <Box sx={{ maxWidth: 400, flexGrow: 1 }} className="TestimonialsLeftCard">
     
      <p className="testimonialPara wrap1-text-50-archiver">
      <b>  {steps[activeStep].description}</b>
      </p>
      <h3 className="names">{steps[activeStep].label}</h3>
   
    </Box>
             <Box sx={{ maxWidth: 400, flexGrow: 1 }} className="TestimonialsLeftCard cardRight">
     
      <p className="testimonialPara wrap1-text-50-archiver"
       >
       <b> {steps[activeStep].description}</b>
      </p>
      <h3 className="names">{steps[activeStep].label}</h3>
   
    </Box>
          {/* </div> */}
        </div>

       
        <div className="TestimonialsArrow">
            <Button className="Arrow1" onClick={handleBack} disabled={activeStep === 0}><KeyboardBackspaceIcon className="ArrowIcon" /></Button>
            <Button className="Arrow2" onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          ><EastIcon className="ArrowIcon" /></Button>
          </div>
      </div>

     
    
    </Fragment>
  );
}

export default Testimonials;
