import React from "react";
import "./Terms.css";
import { TermsData } from "../../JsonData/Terms&Cond/Terms&Cond";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Box } from "@mui/material";

function Terms() {
  return (
    <div>
      <Header />
      <Box className="TermsBox">
        <div className="text">
          <h4>
            <b>{TermsData.one.topic}</b>
          </h4>
          <p>{TermsData.one.detail}</p>
        </div>
        <div className="text">
          <p>
            <b>{TermsData.two.topic}:</b> {TermsData.two.detail}
          </p>
        </div>
        <div className="text">
          <p>
            <b>{TermsData.three.topic}:</b> {TermsData.three.detail}
          </p>
        </div>
        <div className="text">
          <p>
            <b>DoubleClick DART Cookie:</b>
          </p>
          <ul className="List">
            <li>
              {" "}
              Google, as a third-party vendor, uses cookies to serve ads on
              www.360criticalcare.com{" "}
            </li>
            <li>
              {" "}
              Google’s use of the DART cookie enables it to serve ads to our
              site’s visitors based upon their visit to www.360criticalcare.com
              and other sites on the Internet.{" "}
            </li>
            <li>
              Users may opt out of the use of the DART cookie by visiting the
              Google ad and content network privacy policy at the following URL
              – http://www.google.com/privacy_ads.html{" "}
            </li>
          </ul>
        </div>
        <div className="text">
          <p>{TermsData.four.detail}</p>
        </div>
        <div className="text">
          <p>
            <b>{TermsData.five.topic}</b> {TermsData.five.detail}
          </p>
        </div>
        <div className="text">
          <p>
            <b>{TermsData.six.topic}</b> {TermsData.six.detail}
          </p>
        </div>
        <div className="text">
          <p>
            <b>{TermsData.seven.topic}</b> {TermsData.seven.detail}
          </p>
        </div>
        <div className="text">
          <p>
            <b>{TermsData.eight.topic}</b> {TermsData.eight.detail}
          </p>
        </div>
        <div className="text">
          <p>
            <b>{TermsData.nine.topic}</b> {TermsData.nine.detail}
          </p>
        </div>
        <div className="text">
          <p>{TermsData.ten.detail}</p>
          <ol className="TermsList">
            <li>
              We do not offer any refunds for cancellations made after customer
              has availed the service and discontinued after initial attendance
              of online classes and access to reading materials registration and
              payment have been made. However, in special cases such as factual
              errors, duplicate payments, mistaken denominations, and other
              inaccurate payment deductions where the payee faces unreasonable
              loss, we offer refunds.
            </li>
            <li>
              We offer refunds only by facts regarding a specific case (within
              5-10 days of the transaction). We reserve the right to refuse
              refunds for any reason whatsoever, as we deem fit.
            </li>
            <li>
              All refunds will only be made to the same account or card from
              which payments were made initially. Refunds will only be processed
              after a thorough verification process related to the credentials
              of the account holder.
            </li>
            <li>
              Any extra charges borne by the customer such as bank transaction
              fees, service fees or processing fees will not be refunded.
            </li>
            <li>
              We do not entertain multiple return requests for the same order.
              Customers requesting for multiple refunds will be blocked from
              accessing our website. We do not pay any interest on refunds.
            </li>
            <li>
              We will not be held responsible if the customer fails to receive
              our communication due to incomplete or incorrect contact details.
            </li>
            <li>
              We do not entertain refunds for any registrations made during
              discounted or promotional campaigns. However, we refund 80% of the
              paid amount if paid directly without any discount or the
              promotional campaigns provided the refund request is made within
              48 hours of the purchase.
            </li>
            <li>
              While we have taken utmost care to ensure that our payment gateway
              is secure, we do not guarantee or represent that using our
              services will not result in unauthorized data use or theft of data
              online .No liability in the event of unauthorized data theft on
              the Company. We use the services of a third-party payment service
              provider for our online payment gateway.{" "}
            </li>
            <li>
              We and our payment service provider do not assume any liability
              for any type of damage, monetary or otherwise that a customer may
              suffer due to any delay, interruption, corruption or failure of
              information transmission during payment.{" "}
            </li>
            <li>
              Any dispute, difference or question arising out of any monetary
              transaction by the customer shall be settled amicably between the
              Parties, failing which the same shall be referred to arbitration
              under the Arbitration and Conciliation Act, 1999 and the place of
              arbitration shall be Ranchi. The number of arbitrators will be one
              (1) who shall be appointed by the Company. The arbitration award
              will be final and binding on both the Parties. The award will be
              enforceable by decree of any competent court in Ranchi. Either
              Party may initiate arbitration on an issue by tendering thirty
              (30) days’ notice to the other Party. This Agreement shall be
              governed by laws in India and subject to the above- mentioned
              arbitration clause, the City Civil Court, Ranchi shall have sole
              and exclusive jurisdictions for settling the disputes arising
              under this Agreement. We reserve the right to update the contents
              of this Refunds and Cancellation policy from time to time without
              prior notice. Make sure to keep updated before you register for
              any of our services. If you have any questions or doubts related
              to our Refunds & Cancellations, please feel free to contact us.
            </li>
          </ol>
        </div>
      </Box>
      <Footer />
    </div>
  );
}

export default Terms;
