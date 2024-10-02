import React, { Component } from "react";
import "../Styles/ProjectsPage.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MarieImage1 from "../Components/Assets/MarieStopesAsaba/MS.png";
import MarieImage2 from "../Components/Assets/MarieStopesAsaba/MS1.png";
import MarieImage3 from "../Components/Assets/MarieStopesAsaba/MS2.png";
import MarieImage4 from "../Components/Assets/MarieStopesAsaba/MS3.png";
import MarieImage5 from "../Components/Assets/MarieStopesAsaba/MS4.png";

export class ProjPicMarieStopesAsaba extends Component {
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
            <h2>Marie Stopes Clinic</h2>
            <span>PROJECT LOCATION: Asaba</span>
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
                  alt="Marie Stopes Images"
                  src={MarieImage1}
                />
              </div>
              <div className="projectImages" key={2}>
                <img
                  className="projectImages-1"
                  alt="Marie Stopes Images"
                  src={MarieImage2}
                />
              </div>
              <div className="projectImages" key={3}>
                <img
                  className="projectImages-1"
                  alt="Marie Stopes Images"
                  src={MarieImage3}
                />
              </div>
              <div className="projectImages" key={4}>
                <img
                  className="projectImages-1"
                  alt="Marie Stopes Images"
                  src={MarieImage4}
                />
              </div>
              <div className="projectImages" key={5}>
                <img
                  className="projectImages-1"
                  alt="Marie Stopes Images"
                  src={MarieImage5}
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

export default ProjPicMarieStopesAsaba;
