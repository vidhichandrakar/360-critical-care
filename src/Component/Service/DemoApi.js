import { Box } from "@mui/system";
import React, { Fragment, useEffect, useState } from "react";
import { json } from "react-router";

// const API = "https://teamnodejs-98fd0b00ec80.herokuapp.com/users";
const DemoApi = () => {
  const [apidata, setApidata] = useState([]);

  const handleApi = () => {
    fetch("https://teamnodejs-98fd0b00ec80.herokuapp.com/users", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((json) => {
        setApidata(json);
      });
  };
  const { UserName, Email_id, Phone_no } = apidata;

  return (
    <Fragment>
      <Box className="DemoBox">
        <button onClick={handleApi}>Data From Api</button>
        <Box>
          {/* {apidata.map((item)=>(
                            <>
                             <p>{item.UserName}</p>
                        <p>{item.Email_id}</p>
                        </>
                        ))} */}

          {/* Ye abhi check nhi kiya hu UI me */}
          {apidata.map((item) => {
            const { UserName, Email_id, Phone_no } = item;
            return;
            <>
              <p>{UserName}</p>
              <p>{Email_id}</p>
            </>;
          })}
        </Box>
      </Box>
    </Fragment>
  );
};

export default DemoApi;
