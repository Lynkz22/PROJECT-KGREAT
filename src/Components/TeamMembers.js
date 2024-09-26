import React from "react";
import "../Styles/TeamMembers.css";
import TeamMembersOkunola from "./TeamMembersOkunola";
import TeamMembersKoya from "./TeamMembersKoya";
import TeamMembersFemi from "./TeamMembersFemi";
import TeamMembersAkanni from "./TeamMembersAkanni";

const TeamMembers = () => {
  return (
    <>
      <section className="sectionTeamMembers">
        <div className="divTeamMembers">
          <h1 className="divTeamMembersHeading">OUR TEAM MEMBERS</h1>
        </div>
        <TeamMembersOkunola />
        <TeamMembersKoya />
        <TeamMembersFemi />
        <TeamMembersAkanni />
      </section>
    </>
  );
};

export default TeamMembers;
