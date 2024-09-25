import React, { Fragment } from "react";
import NavHome from "../Features/NavHome";
import CategoryBox from "../Features/CategoryBox";
import ExploreTech from "./LandingpageSubComponent/ExploreTech";
import "../../CSS/LandingPage.css"
import Neet2023 from "./LandingpageSubComponent/Neet2023";
import Jion15 from "./LandingpageSubComponent/Jion15";
import Studysource from "./LandingpageSubComponent/Studysource";
import NeetGroupImg from "../Features/NeetGroupImg";
import NewsLatter from "./LandingpageSubComponent/NewsLatter";
import AllCourseWOL from "../AllCourse/AllCourseWOL";

const Landingpage = () => {
    return(
        <Fragment>
            {/* <AllCourseWOL /> */}
           <NavHome />
           <CategoryBox />
           <ExploreTech />
           <Neet2023 />
           <Jion15 />
           <Studysource />
           <NeetGroupImg />
           <NewsLatter />
        </Fragment>
    )
}

export default Landingpage;