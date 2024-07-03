import React, { Fragment } from "react";
import "./ContactUs.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Box } from "@mui/material";
import { FAQData } from "../../JsonData/AboutData/AboutData";

function ContactUs() {
  return (
    <Fragment>
      <Header />
      <Box className="ContactBox">
        <div className="ContactTaxt">
          <h3>
            <b>About the Team:</b>
          </h3>
          <p>
            Our team is composed of dedicated professionals with a passion for
            education. Each member brings a unique set of skills and expertise
            to ensure the highest quality of learning for our students.
          </p>
        </div>
        <Box className="ContactTaxt ContactFont">
          <h3>
            <b>Contact Us:</b>
          </h3>
          <p>Phone: +917070993343,7608052321</p>
          <p>Email: 360criticalcare@gmail.com</p>
          <p>Address: Plot/Flat no-502, Adhikary Arcade, Bariatu Road.</p>
          <p>
            State-Jharkhand, Dist-Ranchi, Bariantu, Landmark: In front of
            Premsons motor.
          </p>
        </Box>
        <Box className="ContactTaxt">
          <h3>
            <b>FAQ</b>
          </h3>
          <Box>
            <h5>
              <b>1. What is 360 Critical Care Academy all about?</b>
            </h5>
            <p>
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
              <li>The First part is “TOP Crash Course- Theory”exclusively provides review of whole theory syllabus with discussion of previous years’ theory questions in “Structured Template “STEM” pattern</li>
              <li>The Second part is “TOP Crash Course- Practical & OSCE” exclusively provides review of all aspects of the practical exam including “Long Cases” Short Cases” and table Vivas. </li>
              <li>This course is tailored to align with the unique requirements of the "DM/DNB-SS" exams. This specialized focus ensures that students are exposed to the precise examination format, fostering familiarity and confidence in tackling the theoretical aspects of the critical care examination.</li>
              <li>By aligning these objectives, the course aims to not only impart knowledge but also to empower students with the strategic skills and confidence necessary to excel in the demanding field of Critical Care Medicine examinations.</li>
            </ul>
          </Box>
          {FAQData.map((value) => (
            <Box>
              <h5>
                <b>{value.heading}</b>
              </h5>
              <p>{value.para}</p>
            </Box>
          ))}
        </Box>
      </Box>
      <Footer />
    </Fragment>
  );
}

export default ContactUs;
