import React, { Component } from "react";
import "../Styles/ProjectsPage.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OdemelaImage1 from "../Components/Assets/Odemela/OC1.jpg";
import OdemelaImage2 from "../Components/Assets/Odemela/OC2.jpg";
import OdemelaImage3 from "../Components/Assets/Odemela/OC3.jpg";
import OdemelaImage4 from "../Components/Assets/Odemela/OC4.jpg";
import OdemelaImage5 from "../Components/Assets/Odemela/OC5.jpg";
import OdemelaImage6 from "../Components/Assets/Odemela/OC6.jpg";

export class ProjPicOdemela extends Component {
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
            <h2>Odemela Court</h2>
            <span>PROJECT LOCATION:</span> Lekki, Lagos
            <br />
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
                  alt="Odemela Images"
                  src={OdemelaImage1}
                />
              </div>
              <div className="projectImages" key={2}>
                <img
                  className="projectImages-1"
                  alt="Odemela Images"
                  src={OdemelaImage2}
                />
              </div>
              <div className="projectImages" key={3}>
                <img
                  className="projectImages-1"
                  alt="Odemela Images"
                  src={OdemelaImage3}
                />
              </div>
              <div className="projectImages" key={4}>
                <img
                  className="projectImages-1"
                  alt="Odemela Images"
                  src={OdemelaImage4}
                />
              </div>
              <div className="projectImages" key={5}>
                <img
                  className="projectImages-1"
                  alt="Odemela Images"
                  src={OdemelaImage5}
                />
              </div>
              <div className="projectImages" key={6}>
                <img
                  className="projectImages-1"
                  alt="Odemela Images"
                  src={OdemelaImage6}
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

export default ProjPicOdemela;
