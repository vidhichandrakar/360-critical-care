import React, { Fragment } from "react";
import Header from "../Header/Header";
import NavHome  from "../Features/NavHome";
import Footer from "../Footer/Footer";
import Testimonials from "../Features/Testimonials";
import Aboutus from '../Aboutus/Aboutus';
import Terms from '../Terms&Condition/Terms'
import CategoryBox from "../Features/CategoryBox";
import Analytics from "../Features/AnalyticsInfo";
import PlanDescription from "../Features/PlanDescription";
import NeetGroupImg from "../Features/NeetGroupImg";
import Testimonial from "../Features/Testimonial";


const MainComponent = ()=>{
  return(
    <Fragment>
      <Header/>
      <NavHome />
      <CategoryBox/>
      <Analytics/>
      <PlanDescription/>
      <NeetGroupImg />
      <Testimonials/>
      {/* <Testimonial /> */}
      <Footer />
    </Fragment>
  )
}
export default MainComponent