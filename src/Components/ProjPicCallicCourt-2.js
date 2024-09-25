import React, { Component } from "react";
import "../Styles/ProjectsPage.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CallisCourtImage1 from "../Components/Assets/Callis-Court-1/CAC1.jpg";
import CallisCourtImage2 from "../Components/Assets/Callis-Court-1/CAC2.jpg";
import CallisCourtImage3 from "../Components/Assets/Callis-Court-1/CAC3.jpg";
import CallisCourtImage4 from "../Components/Assets/Callis-Court-1/CAC4.jpg";
import CallisCourtImage5 from "../Components/Assets/Callis-Court-1/CAC5.jpg";
import CallisCourtImage6 from "../Components/Assets/Callis-Court-1/CAC6.jpg";
import CallisCourtImage7 from "../Components/Assets/Callis-Court-1/CAC7.jpg";
import CallisCourtImage8 from "../Components/Assets/Callis-Court-1/CAC8.jpg";
import CallisCourtImage9 from "../Components/Assets/Callis-Court-1/CAC9.jpg";

export class ProjPicCallisCourt1 extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 2,
      disabled: true,
    };

    return (
      <>
        <section className="projectsPictures">
          <div className="divProjectsPicturesInfo">
            <h2>Callis Court</h2>
            <span>PROJECT LOCATION:</span> Amuwo Odofin, Lagos
          </div>
          <section className="sectionIndividualProjects">
            <Slider
              ref={(c) => (this.slider = c)}
              {...settings}
              className="sliderProjectImages"
            >
              <div className="projectImages" key={1}>
                <img
                  className="projectImages-1"
                  alt="Callis Court Images"
                  src={CallisCourtImage1}
                />
              </div>
              <div className="projectImages" key={2}>
                <img
                  className="projectImages-1"
                  alt="Callis Court Images"
                  src={CallisCourtImage2}
                />
              </div>
              <div className="projectImages" key={3}>
                <img
                  className="projectImages-1"
                  alt="Callis Court Images"
                  src={CallisCourtImage3}
                />
              </div>
              <div className="projectImages" key={4}>
                <img
                  className="projectImages-1"
                  alt="Callis Court Images"
                  src={CallisCourtImage4}
                />
              </div>
              <div className="projectImages" key={5}>
                <img
                  className="projectImages-1"
                  alt="Callis Court Images"
                  src={CallisCourtImage5}
                />
              </div>
              <div className="projectImages" key={6}>
                <img
                  className="projectImages-1"
                  alt="Callis Court Images"
                  src={CallisCourtImage6}
                />
              </div>
              <div className="projectImages" key={7}>
                <img
                  className="projectImages-1"
                  alt="Callis Court Images"
                  src={CallisCourtImage7}
                />
              </div>
              <div className="projectImages" key={8}>
                <img
                  className="projectImages-1"
                  alt="Callis Court Images"
                  src={CallisCourtImage8}
                />
              </div>
              <div className="projectImages" key={9}>
                <img
                  className="projectImages-1"
                  alt="Callis Court Images"
                  src={CallisCourtImage9}
                />
              </div>
            </Slider>
            <div className="divProjectsButtons">
              <button className="projectsButtonLeft" onClick={this.previous}>
                <span class="material-symbols-outlined">arrow_circle_left</span>
              </button>
              <button className="projectsButtonRight" onClick={this.next}>
                <span class="material-symbols-outlined">
                  arrow_circle_right
                </span>
              </button>
            </div>
          </section>
        </section>
      </>
    );
  }
}

export default ProjPicCallisCourt1;
