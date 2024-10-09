import React, { Component } from "react";
import "../Styles/ProjectsPage.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MarieImage1 from "../Components/Assets/MarieStopesNew/NW1.png";
import MarieImage2 from "../Components/Assets/MarieStopesNew/NW2.png";
import MarieImage3 from "../Components/Assets/MarieStopesNew/NW3.png";
import MarieImage4 from "../Components/Assets/MarieStopesNew/NW4.png";
import MarieImage5 from "../Components/Assets/MarieStopesNew/NW5.png";
import MarieImage6 from "../Components/Assets/MarieStopesNew/NW6.png";
import MarieImage7 from "../Components/Assets/MarieStopesNew/NW7.png";
import MarieImage8 from "../Components/Assets/MarieStopesNew/NW8.png";
import MarieImage9 from "../Components/Assets/MarieStopesNew/NW9.png";

export class ProjPicMarieStopesNew extends Component {
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
            <h2>Marie Stopes Clinic Renovation</h2>
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
              <div className="projectImages" key={6}>
                <img
                  className="projectImages-1"
                  alt="Marie Stopes Images"
                  src={MarieImage6}
                />
              </div>
              <div className="projectImages" key={7}>
                <img
                  className="projectImages-1"
                  alt="Marie Stopes Images"
                  src={MarieImage7}
                />
              </div>
              <div className="projectImages" key={8}>
                <img
                  className="projectImages-1"
                  alt="Marie Stopes Images"
                  src={MarieImage8}
                />
              </div>
              <div className="projectImages" key={9}>
                <img
                  className="projectImages-1"
                  alt="Marie Stopes Images"
                  src={MarieImage9}
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

export default ProjPicMarieStopesNew;
