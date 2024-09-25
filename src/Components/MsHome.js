import React from "react";
import "../Styles/MsHome.css";

const MsHome = () => {
  return (
    <>
      <section className="sectionMsHome">
        <div className="divMsHome">
          <h3 className="msHeading">OUR VISION</h3>
          <p className="msText">
            <ul className="msTextList">
              <li>
                <span className="msSpan">
                  <i class="fa-solid fa-circle"></i>
                  To be the leading name in integrated business, corporate &
                  financial management and construction services in Nigeria
                </span>
              </li>
              <li>
                <span className="msSpan">
                  <i class="fa-solid fa-circle"></i> To consistently add value
                  by providing quality & personalised solutions using the right
                  people, processes & technology
                </span>
              </li>
              <li>
                <span className="msSpan">
                  <i class="fa-solid fa-circle"></i>We are committed to
                  providing and continually deploying innovative services to
                  consistently meet your business needs
                </span>
              </li>
            </ul>
          </p>
        </div>

        <div className="divMsHome">
          <h3 className="msHeading">OUR STRATEGY</h3>
          <p className="msText">
            <ul className="msTextList">
              <li>
                <span className="msSpan">
                  <i class="fa-solid fa-circle"></i>
                  We identify our client's needs and develop their brief
                </span>
              </li>
              <li>
                <span className="msSpan">
                  <i class="fa-solid fa-circle"></i> We consult associate
                  specialists when required
                </span>
              </li>
              <li>
                <span className="msSpan">
                  <i class="fa-solid fa-circle"></i> We research each project
                  and current innovative practices
                </span>
              </li>
              <li>
                <span className="msSpan">
                  <i class="fa-solid fa-circle"></i> We communicate each step of
                  our project
                </span>
              </li>
              <li>
                <span className="msSpan">
                  <i class="fa-solid fa-circle"></i> We challenge ourselves to
                  ensure the best delivery
                </span>
              </li>
            </ul>
          </p>
        </div>
      </section>
    </>
  );
};

export default MsHome;
