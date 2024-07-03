import React from "react";
import "./footer.css";
import Logo from "../../Media/Images/Logo.png";
import GoogleLogo from "../../Media/Images/Google_logo.png";
import fb from "../../Media/Images/fblogo.PNG";
import AppLogo from "../../Media/Images/App_Logo.jpg";
import YouTubeIcon from "@mui/icons-material/YouTube";
import {Link} from 'react-router-dom';

function Footer() {
  return (
    <div>
      <footer class="footer">
        <div class="container">
          <div class="row">
            <div class="footer-col  center">
              <Link to="/Critical-Care"><img
                src={Logo}
                // sx={{ display: { xs: "none", md: "flex" }, mr: 0 }}
                width={250}
                height={50}
                className="LogoFooter"
              /></Link>
              <p className="text-color-white">
                We understand that every student has different needs and
                capabilities, which is why we create such a wonderful and unique
                curriculum that is the best fit for every student.
              </p>
            </div>
            <div class="footer-col center ">
              <div className="colFooterUpper pad-line LogoBOx">
               <a href='#'>
                <img
                  src={GoogleLogo}
                  // sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                  width={100}
                  height={40}
                  className="margin AppLogo"
                />
                </a> 
                <a href='#'>
                <img
                  src={AppLogo}
                  // sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                  width={100}
                  height={40}
                  className="margin AppLogo mrlogo"
                />
                </a>
              </div>
              <div className="col FollowBox">
                <h4 className="text-color-white">Follow us :</h4>
                <div>
                  <a href="#" className="sp">
                    <img src={fb} className="BR" />
                  </a>
                  <a href="#">
                    <img
                      src="https://ik.imagekit.io/y8s2vhk66ef/image_2_Bi5cqcyBFNT.png?updatedAt=1628624823915"className="BR" 
                      alt="instagram"
                    />
                  </a>
                  <a href="#">
                    <YouTubeIcon className="BR br-bg"  />
                  </a>
                  <a href="#">
                    <img src=" https://ik.imagekit.io/y8s2vhk66ef/image_3_yByOZld4XFh.png?updatedAt=1628624824789" className="BR"  />
                  </a>
                </div>
              </div>
              <div className="col EnquiryBox">
                <h4>For Enquiry :</h4>
                <h4>care@360criticalcare.com</h4>
              </div>
            </div>
          </div>
          <div className="pad-line">
            <hr className="footerline" />
          </div>
          <div className="BottomRow">
            <div className="flexcol fontWidth text-color-white ">
             <Link to="/Terms-&-Condition" style={{ color: 'inherit', textDecoration: 'none'}}> <p >Terms and Condition |</p></Link>
             <Link to="/Privacy-policy" style={{ color: 'inherit', textDecoration: 'none'}}><p className="margin-left">Privacy Policy |</p></Link> 
             <Link to="/About-us" style={{ color: 'inherit', textDecoration: 'none'}}><p className="margin-left">About Us |</p></Link> 
             <Link to="/Contact-us" style={{ color: 'inherit', textDecoration: 'none'}}><p className="margin-left">Contact Us </p></Link> 
            </div>

            <p className="text-color-white">
              Copyright @{new Date().getFullYear()} 360 Critical Care. All
              Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
