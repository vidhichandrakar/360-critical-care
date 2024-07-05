import { Box, Typography } from "@mui/material";
import React, { Fragment } from "react";
const TestInstructionBox =({})=>{
return(
  <Fragment>
    <Box className="instructionBox">
      <Typography className="instructionHead">Instruction</Typography>
      <p>
        <ol className="olList">
          <li>
          Type of Test : Objective
          </li>
        </ol>
      </p>
    </Box>
  </Fragment>
)
}
export default TestInstructionBox;