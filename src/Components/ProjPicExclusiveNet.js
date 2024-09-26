import React, { Component } from "react";
import "../Styles/ProjectsPage.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ExclusiveImage1 from "../Components/Assets/ExclusiveNet/EN1.png";
import ExclusiveImage2 from "../Components/Assets/ExclusiveNet/EN2.png";
import ExclusiveImage3 from "../Components/Assets/ExclusiveNet/EN3.png";
import ExclusiveImage4 from "../Components/Assets/ExclusiveNet/EN4.png";
import ExclusiveImage5 from "../Components/Assets/ExclusiveNet/EN5.png";

export class ProjPicExclusiveNet extends Component {
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
            <h2>Exclusive Network</h2>
            <span>PROJECT LOCATION: Victoria Island, Lagos</span>
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
                  alt="Exclusive Net Images"
                  src={ExclusiveImage1}
                />
              </div>
              <div className="projectImages" key={2}>
                <img
                  className="projectImages-1"
                  alt="Exclusive Net Images"
                  src={ExclusiveImage2}
                />
              </div>
              <div className="projectImages" key={3}>
                <img
                  className="projectImages-1"
                  alt="Exclusive Net Images"
                  src={ExclusiveImage3}
                />
              </div>
              <div className="projectImages" key={4}>
                <img
                  className="projectImages-1"
                  alt="Exclusive Net Images"
                  src={ExclusiveImage4}
                />
              </div>
              <div className="projectImages" key={5}>
                <img
                  className="projectImages-1"
                  alt="Exclusive Net Images"
                  src={ExclusiveImage5}
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

export default ProjPicExclusiveNet;
