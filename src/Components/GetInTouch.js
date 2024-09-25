import React from "react";
import { Link } from "react-router-dom";
import "../Styles/GetInTouch.css";

const GetInTouch = () => {
  return (
    <>
      <section className="sectionGetInTouch">
        <div className="divGetInTouch">
          <div className="divGitPhrase">
            <p className="gitPhrase">Looking To Contract Your Project To A Competent Engineer?</p>
          </div>
          <div>
            <Link to="/Contact">
              <button className="divGITContactButton-1">
                <p className="gitContactButton-1">Contact Us</p>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default GetInTouch;
