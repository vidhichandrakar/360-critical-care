import * as React from "react";
import Button from "@mui/material/Button";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  Dropdown,
  DropdownMenuItem,
  DropdownNestedMenuItem,
} from "./NestedDropdown";
import { Link } from "react-router-dom";

const DropDown = ({variant, icon}) => {
  const handleCreate = () => {
    console.log("create something");
  };
  const theme = createTheme({
    palette: {
      ochre: {
        main: "#000",
        light: "#E9DB5D",
        dark: "#A29415",
        contrastText: "#242105",
      },
      fonts: {
        fontSize:"1.8rem",
        fontWeight: 600,
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Dropdown
        trigger={
          <Button
            variant={variant}
            color="ochre"
            style={{ fontWeight: 600, fontFamily: "Inter" }}
            endIcon={icon}
            className="paddingDropdown"

          >
            All Courses
          </Button>
        }
        menu={[
          <DropdownNestedMenuItem
            label="DrNB/DM/IFCCM Critical Care"
            rightIcon={<KeyboardArrowRightIcon />}
            menu={[
              <DropdownMenuItem onClick={() => {}}>
                Top Long Course
              </DropdownMenuItem>,
              <DropdownMenuItem onClick={() => {}}>
                Top Short Course
              </DropdownMenuItem>,
              <DropdownMenuItem onClick={() => {}}>
               <Link
                to="/TopCourse"
                style={{ color: "inherit", textDecoration: "none" }}
              >Top Crash Course</Link>
              </DropdownMenuItem>,
              <DropdownMenuItem onClick={() => {}}>
               <Link
                to="/Demo"
                style={{ color: "inherit", textDecoration: "none" }}
              >DemoApi</Link>
              </DropdownMenuItem>,
            ]}
          >
            Delete <DeleteForeverIcon />
          </DropdownNestedMenuItem>,
          <DropdownNestedMenuItem
            label="EDIC"
            rightIcon={<KeyboardArrowRightIcon />}
            menu={[
              <DropdownMenuItem onClick={() => {}}> 
              <Link
              to="/EDIC"
              style={{ color: "inherit", textDecoration: "none" }}
            >EDIC 1</Link></DropdownMenuItem>,
              <DropdownMenuItem onClick={() => {}}>
                <Link
              to="/EDIC2"
              style={{ color: "inherit", textDecoration: "none" }}
            >EDIC 2</Link>
            </DropdownMenuItem>,
              <DropdownMenuItem onClick={() => {}}>TRICS-I</DropdownMenuItem>,
            ]}
          >
            Delete <DeleteForeverIcon />
          </DropdownNestedMenuItem>,
          <DropdownNestedMenuItem
            label="IDCCM"
            rightIcon={<KeyboardArrowRightIcon />}
            menu={[
              <DropdownMenuItem onClick={() => {}}>
                <Link
              to="/IDCCM"
              style={{ color: "inherit", textDecoration: "none" }}
            >TRICS-IDCCM</Link>
              </DropdownMenuItem>,
            ]}
          >
            Delete <DeleteForeverIcon />
          </DropdownNestedMenuItem>,

          <DropdownNestedMenuItem
            label="Other"
            rightIcon={<KeyboardArrowRightIcon />}
            menu={[
              <DropdownMenuItem onClick={() => {}}>
                Nephro Critical Care Review Course
              </DropdownMenuItem>,
              <DropdownMenuItem onClick={() => {}}>
                Sepsis BASIC
              </DropdownMenuItem>,
              <DropdownMenuItem onClick={() => {}}>
                Sepsis ADVANCED
              </DropdownMenuItem>,
              <DropdownMenuItem onClick={() => {}}>
                Critical Care Nutrition
              </DropdownMenuItem>,
            ]}
          />,
        ]}
      />
    </ThemeProvider>
  );
};

export default DropDown;
