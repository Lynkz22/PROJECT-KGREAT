import React from "react";
import "../Styles/Introduction.css";

const ContactIntro = () => {
  return (
    <>
      <section className="sectionContactInfo">
        <div className="divIntroduction">
          {/* <h1 className="introHeading"> WELCOME TO UNIK-TOSA</h1> */}
          <div className="divIntroText">
            <p className="introText">
              K-Great Engineering Limited is a construction and consultancy firm that
              provides a single source point for services that include detailed
              designs, construction, project management, and development
              engineering. We also provide advisory services to other consulting
              engineering firms, developers, and contractors on new development
              as well as refurbished and upgrading existing facilities.
              <br />
              <br />
              For more information about our projects and services, if you have
              any questions or would like to learn more about our services and
              projects, please do not hesitate to reach out to us. You can send
              us an email at kgreatengineering1@gmail.com, visit our office at No. 34
              Razak Balogun Street, Surulere, Lagos, Nigeria. You can also check
              out our social media accounts on Instagram.
              <br />
              <br />
              We look forward to hearing from you!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactIntro;
