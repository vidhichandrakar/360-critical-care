import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
// import img1 from "../../../Images/image1.jpeg"
// import img2 from "../../../Images/image2.jpeg"
// import img3 from "../../../Images/image3.jpeg"
// import img4 from "../../../Images/image4.jpeg"
// import img5 from "../../../Images/image5.jpeg"
// import img6 from "../../../Images/image6.jpeg"
// import img7 from "../../../Images/image7.jpeg"
// import img8 from "../../../Images/image8.jpeg"
// import img9 from "../../../Images/image9.jpeg"
import img1 from "./../../Media/Images/img1.jpg"
import img2 from "./../../Media/Images/img2.jpg"



const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
{
  label: 'Goč, Serbia',
  imgPath:img1
},
{
  label: 'Goč, Serbia',
  imgPath:img2
},


];


function HomeImage() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    
    <Box sx={{ width: "50%", flexGrow: 1, marginLeft: 5  }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
     </Paper>
      
      <AutoPlaySwipeableViews
        axis= {theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          // return 
          <div>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 255,
                  display: 'block',
                  maxWidth: 870,
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      
    </Box>
  );
}

export default HomeImage;