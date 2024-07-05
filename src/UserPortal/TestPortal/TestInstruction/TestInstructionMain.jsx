import { Box, Typography } from "@mui/material";
import React, { Fragment } from "react";
import TestInstructionBox from "./TestInstructionBox";
const TestInstructionMain =({})=>{
return(
  <Fragment>
    <Box className="instructionMainBox">
    <Typography className="headingMain">Practice Test 01 : PCME</Typography>
    <Typography className="headingMain headingMainSub">90 Questions | 360 Marks | 180 Mins</Typography>
    <TestInstructionBox/>
    </Box>
  </Fragment>
)
}
export default TestInstructionMain;