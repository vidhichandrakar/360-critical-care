import React, { Fragment } from "react";
import "./ContactUs.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Box, Button, Typography } from "@mui/material";
import { FAQData } from "../../JsonData/AboutData/AboutData";

import Divider from "@mui/material/Divider";
import contacUsFirstImg from "../../Media/Images/contactUsFirstImg.png";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

function ContactUs() {
  return (
    <Fragment>
      <Header />
      {
      /* <Box className="ContactBox">
        <Box className="ContactTaxt ContactFont">
          <h4 className="Heading Headcenter">
            Contact <span className="AquaColor">Us</span>
          </h4>
          <p className="textHead">
            This is the official page of Physics Wallah, where you can share all
            your queries, feedback, complaints, or any concern you may have
            about our centers, courses, and programs.
          </p>
          <p className="textHead">
            Physics Wallah, India's leading student-oriented Edtech
            organization, is here to help all the students to solve their
            grievances. We're here to help you. We aim to solve all the queries
            within 7 days. You can call on Physics Wallah's official Contact No.
            07019243492, 24 x 7. If the phone is busy, we're resolving someone
            else's queries. We request you to contact us again after 15 minutes
            so that we can address your query or concern you may have regarding
            lectures or course material. You may notify us in the "contact us"
            section only. Your suggestions will help us improve and give you and
            all the children a bright future.
          </p>
          <p className="textHead divider">
            In Case of any grievance, don't hesitate to get in touch with us on
            Physics Wallah's official contact number 07019243492. Or you can
            write to us at support@pw.live.
          </p>
          <Box className="MapBox">
            <Box className="AddressBox">
              <h3>360 Critical Care</h3>
              <p className="textHead">Phone: +917070993343,7608052321</p>
              <p className="textHead">Email: 360criticalcare@gmail.com</p>
              <p className="textHead">
                Address: Plot/Flat no-502, Adhikary Arcade, Bariatu Road.
              </p>
              <p className="textHead">
                State-Jharkhand, Dist-Ranchi, Bariantu, Landmark: In front of
                Premsons motor.
              </p>
              <a href="https://maps.app.goo.gl/PWcie7SS9LYt8uht8" target="_blank"><Button  variant="outlined" className="GEtDirection">get Direction</Button></a>
            </Box>
            <Box>
             
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29293.035269702268!2d85.33562851618916!3d23.40162025020351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e15783b9c0b5%3A0x5c22411ea37e8259!2sBariatu%2C%20Ranchi%2C%20Jharkhand%20834009!5e0!3m2!1sen!2sin!4v1710535703912!5m2!1sen!2sin"
                width="600"
                height="450"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </Box>
          </Box>
        </Box>
        <p className="divider"></p>
        <div className="ContactTaxt">
          <p className="headSize">About the Team:</p>
          <p className="textHead">
            Our team is composed of dedicated professionals with a passion for
            education. Each member brings a unique set of skills and expertise
            to ensure the highest quality of learning for our students.
          </p>
        </div>
        <Box className="ContactTaxt">
          <p className="headSize">FAQ</p>
          <Box>
            <h5>
              <b>1. What is 360 Critical Care Academy all about?</b>
            </h5>
            <p className="textHead divider">
              Critical Care Medicine has progressed to the extent that it has
              become the backbone of modern medicine and surgical practice. The
              scope and resulting practice of Critical Care are emerging
              rapidly. This initiative aims at providing an up-to-date resource
              of intensive care practice. It aims to narrow the gap between the
              pioneers of the subject and the Critical Care practitioners
              world-wide.
            </p>
          </Box>
          <Box>
            <h5>
              <b>
                2. What educational services does 360 Critical Care Academy
                offer?
              </b>
            </h5>
            <ul className="FAQList ContactFont">
              <li>
                a) TRICS 1(Targeted Review of Intensive Care Syllabus 1)-
                Preparatory Course for
                <b> EDIC 1 (European Diploma in Intensive Care 1) Exam </b>
              </li>
              <li>
                b) TRICS 2(Targeted Review of Intensive Care Syllabus 2)-
                Preparatory Course for
                <b> EDIC 2 (European Diploma in Intensive Care 2) Exam</b>
              </li>
              <li>
                c) IDCCM(Indian Diploma in Critical Care Medicine) - Preparatory
                Course for <b>IDCCM Exam</b>
              </li>
              <li>
                d) TOP Crash Course- Preparatory Course for{" "}
                <b> DrNB/DM Theory & Practical Exam </b>
              </li>
            </ul>
            <p className="divider"></p>
          </Box>
          <Box>
            <h5>
              <b>3. How do I sign up for 360 Critical Care Academy?</b>
            </h5>
            <ul className="ContactFont">
              <li>
                Download the 360 Critical Care App from Google play store or
                Apple store
              </li>
              <li>Android Link: </li>
              <li>iOS Link:</li>
            </ul>
            <p>
              Choose the course of your choice, pay for the course, and have
              access to the study materials, debrief videos and exam modules.
            </p>
            <p className="divider"></p>
          </Box>
          <Box>
            <h5>
              <b>4. What does the TRICS 1 Cover?</b>
            </h5>
            <ul className="FAQList ContactFont">
              <li>• 10 Modules + 10 section wise MOCK tes</li>
              <li>• 2 Final MOCKS covering whole syllabus</li>
              <li>• Access to "TRICS- Cloud"</li>
              <li>• Interactive debriefing for each MOCK</li>
              <li>• Convenient timing for Exam</li>
              <li>• Access to debrief videos</li>
              <li>• Access to "High Probability Question Bank"</li>
            </ul>
            <p className="divider"></p>
          </Box>
          <Box>
            <h5>
              <b>5. What does the TRICS 2 Cover?</b>
            </h5>
            <ul className="FAQList ContactFont">
              <li>
                • TRICS - (Targeted Review of Intensive Care Syllabus)- EDIC 2
                preparatory course Once enrolled it will provide a detail
                overview of syllabus and study material aiming to cover the
                syllabus.
              </li>
              <li>
                • The candidate will have access to the “TRICS cloud”. TRICS-
                cloud is a unique resource material meant for preparation of
                “EDIC 2”.
              </li>
              <li>
                • The whole course consists of 11 modules 11 Modules + 11
                Section wise tests. This is followed by 3 Whole Syllabus MOCK
                Test
              </li>
            </ul>
            <p className="divider"></p>
          </Box>
          <Box>
            <h5>
              <b>6. What does the IDCCM Cover?</b>
            </h5>
            <p>
              TRICS -IDCCM (Targeted Review of Intensive Care Syllabus)- IDCCM
            </p>
            <ul className="FAQList ContactFont">
              <li>
                • Once enrolled it will provide a detailed overview of syllabus
                and study material aiming to cover the syllabus.
              </li>
              <li>
                • The candidate will have access to the “TRICS-IDCCM cloud”.
                TRICS- cloud is a unique resource material meant for preparation
                of “IDCCM”.
              </li>
              <li>
                • The modules are classified as per the IDCCM syllabus. Each
                module consists of pre-reading for a week followed by a mock
                test as per the IDCCM standard comprising of Type-A and Type-K
                questions. This test is followed by a debrief and sharing of
                tips and tricks for preparation.{" "}
              </li>
            </ul>
            <p className="divider"></p>
          </Box>

          <Box>
            <h5>
              <b>7. What does the TOP Crash Course Cover?</b>
            </h5>
            <p>
              Provide an all-encompassing exam preparation course that
              seamlessly integrates both domains of the examination, namely,
              Theory, OSCE (Objective Structured Clinical Examination), and
              Practical VIVA (Viva Voce). This holistic approach ensures a
              well-rounded and in-depth understanding of the subject matter-
              i.e. THEORY OSCE & Practical VIVA.{" "}
            </p>
            <ul className="FAQList ContactFont">
              <li>“TOP” course happens in TWO phases. </li>
              <li>
                The First part is “TOP Crash Course- Theory”exclusively provides
                review of whole theory syllabus with discussion of previous
                years’ theory questions in “Structured Template “STEM” pattern
              </li>
              <li>
                The Second part is “TOP Crash Course- Practical & OSCE”
                exclusively provides review of all aspects of the practical exam
                including “Long Cases” Short Cases” and table Vivas.{" "}
              </li>
              <li>
                This course is tailored to align with the unique requirements of
                the "DM/DNB-SS" exams. This specialized focus ensures that
                students are exposed to the precise examination format,
                fostering familiarity and confidence in tackling the theoretical
                aspects of the critical care examination.
              </li>
              <li>
                By aligning these objectives, the course aims to not only impart
                knowledge but also to empower students with the strategic skills
                and confidence necessary to excel in the demanding field of
                Critical Care Medicine examinations.
              </li>
            </ul>
            <p className="divider"></p>
          </Box>
          {FAQData.map((value) => (
            <Box>
              <h5>
                <b>{value.heading}</b>
              </h5>
              <p>{value.para}</p>
              <p className="divider"></p>
            </Box>
          ))}
        </Box>
      </Box> */}
      <Box className="ContactBox">
        <img
          src={contacUsFirstImg}
          className="contacUsFirstImg"
        />
        <Box className="getInTouchCompleteBox">
          <Box className="getInTouch">
            <Typography className="getInTouch-head">
              <b>
                Get in <span className="AquaColor">Touch</span>
              </b>
            </Typography>
            <Typography sx={{ mt: 2, mb: 5, fontSize: "0.9rem" }}>
              Our team is composed of dedicated professionals with a passion for
              education. Each member brings a unique set of skills and expertise
              to ensure the highest quality of learning for our students.
            </Typography>

            <Box className="getInTouch-about">
              <Box className="getInTouchAbtSection">
                <Box className="getInTouchVerticalLine"></Box>
                <Typography sx={{ fontSize: "0.9rem" }}>
                  Plot/Flat No-502, Adhikary Arcade, Bariatu Road, Bariantu
                  Ranchi, Jharkhand
                </Typography>
              </Box>

              <Box className="getInTouchAbtSection">
                <Box className="getInTouchVerticalLine"></Box>
                <Box>
                  <Typography sx={{ fontSize: "0.9rem" }}>
                    +91-7070993343
                  </Typography>
                  <Typography sx={{ fontSize: "0.9rem" }}>
                    +91-9348938039
                  </Typography>
                </Box>
              </Box>

              <Box className="getInTouchAbtSection">
                <Box className="getInTouchVerticalLine"></Box>
                <Typography sx={{ fontSize: "0.9rem" }}>
                  www.360criticalcare.com
                </Typography>
              </Box>

              <Box className="getInTouchAbtSection">
                <Box className="getInTouchVerticalLine"></Box>
                <Typography sx={{ fontSize: "0.9rem" }}>
                  360criticalcare@gmail.com
                </Typography>
              </Box>
            </Box>
            {/* </Box> */}
          </Box>

          <Box className="getInTouch-right">
            <Box className="getInTouch-right-nameAndMob">
              <Box>
                <Typography>
                  <b>NAME</b>
                </Typography>
                <Stack
                  component="form"
                  sx={{
                    width: "58ch",
                    height: "8ch",
                  }}
                  spacing={2}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    hiddenLabel
                    id="filled-hidden-label-small"
                    size="small"
                  />
                </Stack>
              </Box>

              <Box sx={{ ml: 3 }}>
                <Typography>
                  <b>MOBILE</b>
                </Typography>
                <Stack
                  component="form"
                  sx={{
                    width: "47ch",
                  }}
                  spacing={2}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    hiddenLabel
                    id="filled-hidden-label-small"
                    size="small"
                  />
                </Stack>
              </Box>
            </Box>

            <Box>
              <Typography>
                <b>EMAIL</b>
              </Typography>
              <Stack
                component="form"
                sx={{
                  width: "108ch",
                  height: "8ch",
                }}
                spacing={2}
                noValidate
                autoComplete="off"
              >
                <TextField
                  hiddenLabel
                  id="filled-hidden-label-small"
                  size="small"
                />
              </Stack>
            </Box>

            <Box>
              <Typography>
                <b>SEND MESSAGE</b>
              </Typography>
              <Stack
                component="form"
                sx={{
                  width: "108ch",
                }}
                spacing={2}
                noValidate
                autoComplete="off"
              >
                <TextField hiddenLabel id="filled-hidden-label-normal" />
              </Stack>
            </Box>
            <Button variant="contained" className="sendMsgButton">
              Send message
            </Button>
          </Box>
        </Box>

        <Box>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29293.035269702268!2d85.33562851618916!3d23.40162025020351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e15783b9c0b5%3A0x5c22411ea37e8259!2sBariatu%2C%20Ranchi%2C%20Jharkhand%20834009!5e0!3m2!1sen!2sin!4v1710535703912!5m2!1sen!2sin"
            className="contactUsMap"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </Box>
      </Box>
      <Footer />
    </Fragment>
  );
}

export default ContactUs;
