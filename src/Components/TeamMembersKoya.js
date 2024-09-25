import React from "react";
import okunola from "../Components/Assets/Beach-House/BH1.jpg";

const TeamMembersKoya = () => {
  return (
    <>
      <div className="teamMembers">
        <div className="teamMembers-1">
          {/* <div className="divTeamMembersImage">
            <img
              className="teamMembersImage"
              alt="Olabode Saheed"
              src={okunola}
            />
          </div> */}
          <div className="teamMembersName">
            <h1>
              Koya Oluwasegun <br /> Samuel
            </h1>
            <p>Partner</p>
          </div>
        </div>
        <div className="teamMembersText">
          <p>
            <b>Oluwasegun</b> completed his Bachelor Degree in Mechanical
            Engineering from Obafemi Awolowo University, and has recently been
            inducted into the Nigerian Society of Engineers. He his a registered
            engineer. He has worked in a building services firm as an mechanical
            design engineer, and he has supervised and managed vast number of
            high end projects in key areas such as hospitality, educational
            facilities, residential and office buildings.. He has worked on
            various projects, from small to large scale private and commercial.
            He has a knack of constantly delivering exceptional quality
          </p>
        </div>
      </div>
    </>
  );
};

export default TeamMembersKoya;
