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
import AllCourseWOL from "../AllCourse/AllCourseWOL";
import TRICKS1 from "../CourseDescription/TRICKS1";
import TRICKS2 from "../CourseDescription/TRICKS2";
import TRICKSIDDCM from "../CourseDescription/TRICKSIDDCM";
import TOP from "../CourseDescription/TOP";
import TOPCrashCourseTheory from "../CourseDescription/TOPCrashCourseTheory";
import CourseDescriptionMobileHeader from "../Header/CourseDescriptionMobileHeader";
import TOPOSCEPractical from "../CourseDescription/TOPOSCEPractical";
import TRICKDIDDCMPracticalCourseLast from "../CourseDescription/TRICKDIDDCMPracticalCourseLast";
import PurchesedCourse from "../CourseDescription/PurchesedCourse";
import TestportalMain from "../../UserPortal/TestPortal/TestportalMain.component";
import Landingpage from "./Landingpage";

const MainComponent = ()=>{
  return(
    <Fragment>
      <Header/>
      <Landingpage />
      {/* <CourseDescriptionMobileHeader/> */}
      {/* <AllCourseWOL /> */}
      {/* <NavHome />
      <CategoryBox/>
      <Analytics/>
      <PlanDescription/>
      <NeetGroupImg />
      <Testimonials/> */}
      {/* <Testimonial /> */}
      {/* <Aboutus /> */}
      {/* <TRICKS1/> */}
      {/* <TRICKS2/> */}
      {/* <TRICKSIDDCM/> */}
      {/* <TOP/> */}
      {/* <TOPCrashCourseTheory/> */}
      {/* <TOPOSCEPractical/> */}
      {/* <TRICKDIDDCMPracticalCourseLast /> */}
      {/* <PurchesedCourse/> */}
      {/* <TestportalMain/> */}
      <Footer />
       
    </Fragment>
  )
}
export default MainComponent