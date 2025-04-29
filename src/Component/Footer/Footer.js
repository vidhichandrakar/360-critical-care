import React from "react";
import "./footer.css";
import Logo from "../../Media/Images/Logo.png";
import GoogleLogo from "../../Media/Media_Image/play-store.png";
import AppLogo from "../../Media/Media_Image/app-store.png";
import FB from "../../Media/Media_Image/FacebookLogo.svg";
import IG from "../../Media/Media_Image/Instagram.svg";
import YT from "../../Media/Media_Image/youtube.svg";
import {Link} from 'react-router-dom';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Typography } from "@mui/material";

function Footer() {
  return (
    <div>
      <footer class="footer">
        <div class="container">
          <div class="row">
            <div class="footer-col  center footer-logo-para">
              <Link to="/"><img
                src={Logo}
                className="LogoFooter"
              /></Link>
              <p className="text-color-white">
                We understand that every student has different needs and
                capabilities, which is why we create such a wonderful and unique
                curriculum that is the best fit for every student.
              </p>
            </div>
            <div class="footer-col center ">
              <div className="colFooterUpper LogoBOx">
               <a href='#'>
                <img
                  src={GoogleLogo}
                  width={140}
                  height="auto"
                  className="AppLogo"
                />
                </a> 
                <a href='#'>
                <img
                  src={AppLogo}
                  width={140}
                  height= "auto"
                  className="margin AppLogo mrlogo"
                />
                </a>
              </div>
              <div className="SocialBoxcol FollowBox">
                <h4 className="text-color-white"><b>Follow us :</b></h4>
                <div className="SocialMediaApp">
                  <a href="#" className="sp">
                    <img src={FB} className="BR" />
                  </a>
                  <a href="#">
                    {/* <img
                      src="https://ik.imagekit.io/y8s2vhk66ef/image_2_Bi5cqcyBFNT.png?updatedAt=1628624823915"className="BR" 
                      alt="instagram"
                    /> */}
                    {/* <InstagramIcon className="BR In-bg"/> */}
                    <img src={IG} className="BR" />
                  </a>
                  <a href="#">
                    <img src={YT} className="BR" />
                  </a>
                  <a href="#">
                    <TwitterIcon className="BR tw-bg"/>
                  </a>
                </div>
              </div>
              <div className="col EnquiryBox">
                <h4><b>For Enquiry :</b>&nbsp;</h4>
                <h4><b>care@360criticalcare.com</b></h4>
              </div>
            </div>
          </div>
          <div className="pad-line">
            <hr className="footerline" />
          </div>
          <div className="BottomRow">
           
            <div className="flexcol fontWidth text-color-white CompanyServices">
             <Link  style={{ color: 'inherit', textDecoration: 'none'}} className="CompanyBox"> <p>Company</p></Link>
             <Link to="/Terms-&-Condition" style={{ color: 'inherit', textDecoration: 'none'}}> <p  className="rIGHTlINE">Terms and Condition </p></Link>
             <Link to="/Privacy-policy" style={{ color: 'inherit', textDecoration: 'none'}}><p className="margin-left rIGHTlINE">Privacy Policy  </p></Link> 
             <Link to="/About-us" style={{ color: 'inherit', textDecoration: 'none'}}><p className="margin-left rIGHTlINE">About Us </p></Link> 
             <Link to="/Contact-us" style={{ color: 'inherit', textDecoration: 'none'}}><p className="margin-left rIGHTlINE">Contact Us</p></Link> 
             <Link to="/Blog/" style={{ color: 'inherit', textDecoration: 'none'}}><p className="margin-left ">Blog </p></Link> 
            </div>

            <p className="text-color-white CopyRight">
             <b> Copyright @{new Date().getFullYear()} 360 Critical Care. All
              Rights Reserved.</b>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
