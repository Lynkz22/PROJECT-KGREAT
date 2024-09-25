import React from "react";
import okunola from "../Components/Assets/Beach-House/BH1.jpg";

const TeamMembersOkunola = () => {
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
              Okunola <br />
              Adekunle
            </h1>
            <p> Managing Partner</p>
          </div>
        </div>
        <div className="teamMembersText">
          <p>
            <b>Adekunle</b> holds a Polytechnic Degree in Electrical Engineering
            from Yaba College of Technology, Lagos. He has extensive experience
            as an electrical design engineer in a building services firm, where
            he has supervised and managed numerous high-end projects across
            various sectors, including hospitality, educational facilities,
            residential, and office buildings. At K Great Engineering, Adekunle
            is responsible for overseeing staff activities, providing training,
            and supervising project supervisors.
          </p>
        </div>
      </div>
    </>
  );
};

export default TeamMembersOkunola;
