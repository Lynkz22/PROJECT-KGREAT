import React from "react";
import Akanni from "../Components/Assets/TeamMembers/Akanni.jpg";

const TeamMembersAkanni = () => {
  return (
    <>
      <div className="teamMembers">
        <div className="teamMembers-1">
          <div className="divTeamMembersImage">
            <img
              className="teamMembersImage"
              alt="Akanni Akeem Rasheed"
              src={Akanni}
            />
          </div>
          <div className="teamMembersName">
            <h1>
              Akanni Akeem
              <br /> Rasheed
            </h1>
            <p>Partner</p>
          </div>
        </div>
        <div className="teamMembersText">
          <p>
            <b>Akanni</b> completed his Bachelor Degree in Electrical and
            Electronic Engineering from Osun state University, Osogbo. He is a
            member of Council for the Regulation of Engineering in Nigeria
            (COREN). He is an accomplished Electronic Engineer with extensive
            experience in supervising and managing a wide range of high-end
            projects.From small-scale private ventures to large-scale commercial
            developments, he has consistently delivered exceptional quality. His
            dedication to excellence is evident in every project he undertakes.
          </p>
        </div>
      </div>
    </>
  );
};

export default TeamMembersAkanni;
