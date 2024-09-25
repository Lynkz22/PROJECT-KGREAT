import React, { Component } from "react";
import "../Styles/ProjectsPage.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TCNImage1 from "../Components/Assets/TCN-Maryland/TCN1.jpg";
import TCNImage2 from "../Components/Assets/TCN-Maryland/TCN2.jpg";
import TCNImage3 from "../Components/Assets/TCN-Maryland/TCN3.jpg";
import TCNImage4 from "../Components/Assets/TCN-Maryland/TCN4.jpg";
import TCNImage5 from "../Components/Assets/TCN-Maryland/TCN5.jpg";
import TCNImage6 from "../Components/Assets/TCN-Maryland/TCN6.jpg";
import TCNImage7 from "../Components/Assets/TCN-Maryland/TCN7.jpg";

export class ProjPicTCNMaryland extends Component {
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
            <h2>TCN, Maryland</h2>
            <span>PROJECT LOCATION:</span> Maryland, Lagos
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
                  alt="TCN Images"
                  src={TCNImage1}
                />
              </div>
              <div className="projectImages" key={2}>
                <img
                  className="projectImages-1"
                  alt="TCN Images"
                  src={TCNImage2}
                />
              </div>
              <div className="projectImages" key={3}>
                <img
                  className="projectImages-1"
                  alt="TCN Images"
                  src={TCNImage3}
                />
              </div>
              <div className="projectImages" key={4}>
                <img
                  className="projectImages-1"
                  alt="TCN Images"
                  src={TCNImage4}
                />
              </div>
              <div className="projectImages" key={5}>
                <img
                  className="projectImages-1"
                  alt="TCN Images"
                  src={TCNImage5}
                />
              </div>
              <div className="projectImages" key={6}>
                <img
                  className="projectImages-1"
                  alt="TCN Images"
                  src={TCNImage6}
                />
              </div>
              <div className="projectImages" key={7}>
                <img
                  className="projectImages-1"
                  alt="TCN Images"
                  src={TCNImage7}
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

export default ProjPicTCNMaryland;
