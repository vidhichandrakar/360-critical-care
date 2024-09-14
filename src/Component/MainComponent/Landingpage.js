import React, { Fragment } from "react";
import NavHome from "../Features/NavHome";
import CategoryBox from "../Features/CategoryBox";
import ExploreTech from "./LandingpageSubComponent/ExploreTech";
import "../../CSS/LandingPage.css"

const Landingpage = () => {
    return(
        <Fragment>
           <NavHome />
           <CategoryBox />
           <ExploreTech />
        </Fragment>
    )
}

export default Landingpage;