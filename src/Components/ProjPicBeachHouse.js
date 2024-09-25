import React, { Component } from "react";
import "../Styles/ProjectsPage.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BeachHouseImage1 from "../Components/Assets/Beach-House/BH1.jpg";
import BeachHouseImage2 from "../Components/Assets/Beach-House/BH2.jpg";
import BeachHouseImage3 from "../Components/Assets/Beach-House/BH3.jpg";
import BeachHouseImage4 from "../Components/Assets/Beach-House/BH4.jpg";
import BeachHouseImage5 from "../Components/Assets/Beach-House/BH5.jpg";
import BeachHouseImage6 from "../Components/Assets/Beach-House/BH6.jpg";

export class ProjPicBeachHouse extends Component {
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
            <h2>Beach House</h2>
            <span>LOCATION:</span> Ibeshe, Lagos
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
                  alt="Beach House Images"
                  src={BeachHouseImage1}
                />
              </div>
              <div className="projectImages" key={2}>
                <img
                  className="projectImages-1"
                  alt="Beach House Images"
                  src={BeachHouseImage2}
                />
              </div>
              <div className="projectImages" key={3}>
                <img
                  className="projectImages-1"
                  alt="Beach House Images"
                  src={BeachHouseImage3}
                />
              </div>
              <div className="projectImages" key={4}>
                <img
                  className="projectImages-1"
                  alt="Beach House Images"
                  src={BeachHouseImage4}
                />
              </div>
              <div className="projectImages" key={5}>
                <img
                  className="projectImages-1"
                  alt="Beach House Images"
                  src={BeachHouseImage5}
                />
              </div>
              <div className="projectImages" key={6}>
                <img
                  className="projectImages-1"
                  alt="Beach House Images"
                  src={BeachHouseImage6}
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

export default ProjPicBeachHouse;
