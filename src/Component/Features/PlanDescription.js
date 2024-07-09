import { Box, Typography } from "@mui/material";
import React from "react";
import Desicription from "../../Media/Media_Image/frontpage17.png";
import Live from "../../Media/Images/Live Scheduled Lectures.svg";
import dotOne from "../../Media/Images/dotted-line-1.svg";
import dotTwo from "../../Media/Images/dotted-line-2.svg";
import Logo from "../../Media/Images/Logo.png";

const PlanDescription = ({}) => {
  return (
    // <Box className="planMainBox">
    //   <Box className="planBox">
    //     <img src={Desicription} className="planImg" />

    //   </Box>
    //   <Box className="bottomLogoBox">
    //     <img src={Logo} className="planImgBottom" />
    //     </Box>

    //   <Box className="planText">
    //     <Typography className="planTextTypo">Why 360 Critical Care?</Typography>
    //     <Typography className="planSubTextTypo">
    //       {" "}
    //       Your One Stop Destination For Success
    //     </Typography>
    //   </Box>

    //   <Box className="planMainBox">
    //     <Box class="liveBox">
    //       <Box className="liveFirst">
    //         <img src={Live} className="liveImg" />
    //       </Box>
    //       <Box className="liveScnd">
    //         <Typography className="liveText">
    //           Enhance your learning journey experience with live and scheduled
    //           lectures.
    //         </Typography>
    //         <Typography className="liveTextScnd">
    //           Optimize your learning journey by engaging in live sessions or
    //           scheduled lectures, tailored to enrich your educational
    //           experience.
    //         </Typography>
    //       </Box>
    //     </Box>
    //     <Box className="dotLine">
    //       <img src={dotOne} className="dotLineImg" />
    //     </Box>
    //   </Box>

    //   <Box>
    //     <Box class="liveBox liveBoxrev">
    //       <Box className="liveScnd">
    //         <Typography className="liveText">
    //           Live doubt discussion sessions
    //         </Typography>
    //         <Typography className="liveTextScnd">
    //           Interactive online sessions where students ask questions and
    //           discuss study uncertainties with instructors for immediate
    //           clarification and understanding.
    //         </Typography>
    //       </Box>
    //       <Box className="liveFirst">
    //         <img src={Live} className="liveImg" />
    //       </Box>
    //     </Box>
    //     <Box className="dotLine">
    //       <img src={dotTwo} className="dotLineImg" />
    //     </Box>
    //   </Box>

    //   <Box>
    //     <Box class="liveBox">
    //       <Box className="liveFirst">
    //         <img src={Live} className="liveImg" />
    //       </Box>
    //       <Box className="liveScnd">
    //         <Typography className="liveText">
    //           Access structured and focused study materials
    //         </Typography>
    //         <Typography className="liveTextScnd">
    //           comprehensive study materials meticulously designed to provide a
    //           structured and targeted approach, empowering you to achieve
    //           academic success with confidence and clarity.
    //         </Typography>
    //       </Box>
    //     </Box>
    //     <Box className="dotLine">
    //       <img src={dotOne} className="dotLineImg" />
    //     </Box>
    //   </Box>

    //   <Box>
    //     <Box class="liveBox liveBoxrev">
    //       <Box className="liveScnd">
    //         <Typography className="liveText">
    //           Track your progress through regular evaluation
    //         </Typography>
    //         <Typography className="liveTextScnd">
    //           Continuously gauge your advancement through consistent exam
    //           simulation, ensuring ongoing enhancement and growth in your
    //           learning journey.
    //         </Typography>
    //       </Box>
    //       <Box className="liveFirst">
    //         <img src={Live} className="liveImg" />
    //       </Box>
    //     </Box>
    //   </Box>
    // </Box>

    // <Typography className="catHeading">Explore <span style={{ color: "#199884" }}>Category</span></Typography>
    // <b>360CC is preparing students for 4 exam categories.</b>

    <Box className="studyResourceCompleteSection">
      <Typography className="studyResource">
        Study <span style={{ color: "#199884" }}>Resources</span>
      </Typography>
      <Typography>
        A diverse array of laerning materials to enhance ypur educational journey.
      </Typography>

      <Box className="studyResourceImages">
         <Box className="studyMaterials">
           <h5>Study Materials</h5>
           {/* <img src={} width={} height={} /> */}
         </Box>
         <Box className="debriefVideos">
         <h5>Debrief Videos</h5>
         {/* <img src={} width={} height={} /> */}
         </Box>
         <Box className="freeeMockTests">
         <h5>Free Mock Tests</h5>
         {/* <img src={} width={} height={} /> */}
         </Box>
      </Box>
    </Box>
  );
};
export default PlanDescription;
