import React from "react";
import wife from "../Components/Assets/Beach-House/BH1.jpg";

const TeamMembersWife = () => {
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
            <p> Accountant</p>
          </div>
        </div>
        <div className="teamMembersText">
          <p>
            <b>Adekunle</b> holds a Bachelor Degree in Accountant from the
            University of Lagos. She has her Masters in Accounting and has an
            extensive experience as an accountant. She had years of experience
            in financial management and reporting, excels in maintaining
            accurate financial records and ensuring compliance with regulatory
            standards. She is known for their meticulous attention to detail,
            they have a proven track record of identifying cost-saving
            opportunities and streamlining financial processes.
          </p>
        </div>
      </div>
    </>
  );
};

export default TeamMembersWife;
