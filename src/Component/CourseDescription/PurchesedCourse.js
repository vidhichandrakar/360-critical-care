import React from 'react'
import Header from '../Header/Header';
import TRICKSIDDCMImg from "../../Media/Images/TRICKSIDDCMImg.png";
import MyCourseImgOne from "../../Media/Images/MyCourseImgOne.png"
import { Button, Typography, Box } from '@mui/material';


const PurchesedCourse = () => {
  return (
    <div className='tricksCompletePage'>
      <Header />
      <img src={TRICKSIDDCMImg} width={1695} height={355} className="TRICKMainImg"/>
      <Typography sx={{fontSize:"1.7rem", mt:"47px"}}><b>My <span className='AquaColor'>Course</span></b></Typography>
      <Box className="purchasedCourseMyCourse">
        <Box className="TRICKSMyCourse">
           <img src={MyCourseImgOne} width={350} height={200} />
           <Box className="myCourseRightSection">
           <Typography className='myCourse-text'>TRICKS-1: Preparatory for EDIC-1 2nd session 2024</Typography>
           <Button className='myCourseExploreNowBtn'>Explore Now</Button>
           </Box>
        </Box>

        <Box className="TRICKSMyCourse">
           {/* <img src={} width={} height={} /> */}
           <Box className="myCourseRightSection">
           <Typography>TRICKS-2: Preparatory for EDIC-2 2nd session 2024</Typography>
           <Button className='myCourseExploreNowBtn'>Explore Now</Button>
           </Box>
        </Box>

        <Box className="TRICKSMyCourse">
           {/* <img src={} width={} height={} /> */}
           <Box className="myCourseRightSection">
           <Typography>TRICKS-IDCCM-Theory: Preparatory course for TRICKS-IDCCM Prep Theory course 2nd session 2024</Typography>
           <Button className='myCourseExploreNowBtn'>Explore Now</Button>
           </Box>
        </Box>

        <Box className="TRICKSMyCourse">
           {/* <img src={} width={} height={} /> */}
           <Box className="myCourseRightSection">
           <Typography>TRICKS-IDCCM-Practical: Preparatory course for TRICKS-IDCCM Prep Practical course 2nd session 2024</Typography>
           <Button className='myCourseExploreNowBtn'>Explore Now</Button>
           </Box>
        </Box>
      </Box>
    </div>
  )
}

export default PurchesedCourse



