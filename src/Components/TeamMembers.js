import React from "react";
import "../Styles/TeamMembers.css";
import TeamMembersOkunola from "./TeamMembersOkunola";
import TeamMembersKoya from "./TeamMembersKoya";

const TeamMembers = () => {
  return (
    <>
      <section className="sectionTeamMembers">
        <div className="divTeamMembers">
          <h1 className="divTeamMembersHeading">OUR TEAM MEMBERS</h1>
        </div>
        <TeamMembersOkunola />
        <TeamMembersKoya />
      </section>
    </>
  );
};

export default TeamMembers;
