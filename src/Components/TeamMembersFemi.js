import React from "react";
import Femi from "../Components/Assets/TeamMembers/Femi.jpg";

const TeamMembersFemi = () => {
  return (
    <>
      <div className="teamMembers">
        <div className="teamMembers-1">
          <div className="divTeamMembersImage">
            <img
              className="teamMembersImage"
              alt="Odubiyi Oluwafemi"
              src={Femi}
            />
          </div>
          <div className="teamMembersName">
            <h1>
              Odubiyi <br />
              Oluwafemi Emmanuel
            </h1>
            <p>Partner</p>
          </div>
        </div>
        <div className="teamMembersText">
          <p>
            <b>Emmanuel</b> holds a Bachelor Degree in Mechanical Engineering
            from the University of Lagos. He is a member of Council for the
            Regulation of Engineering in Nigeria (COREN) and Member Nigerian
            Society of Engineers(MNSE). He works as a Mechanical Engineer and
            Building Services Engineer, and he has supervised and managed vast
            number of high end projects in key areas such as hospitality,
            educational facilities, residential and office buildings. He has
            worked on various projects, from small to large scale private and
            commercial. He has a knack of constantly delivering exceptional
            quality.
          </p>
        </div>
      </div>
    </>
  );
};

export default TeamMembersFemi;
