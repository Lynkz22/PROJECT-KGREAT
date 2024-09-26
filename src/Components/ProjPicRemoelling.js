import React, { Component } from "react";
import "../Styles/ProjectsPage.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ClinicRenImage1 from "../Components/Assets/ClinicRen/CR1.png";
import ClinicRenImage2 from "../Components/Assets/ClinicRen/CR2.png";
import ClinicRenImage3 from "../Components/Assets/ClinicRen/CR3.png";
import ClinicRenImage4 from "../Components/Assets/ClinicRen/CR4.png";
import ClinicRenImage5 from "../Components/Assets/ClinicRen/CR5.png";

export class ProjPicRemoelling extends Component {
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
      slidesToShow: 2,
      slidesToScroll: 2,
      disabled: true,
    };

    return (
      <>
        <section className="projectsPictures">
          <div className="divProjectsPicturesInfo">
            <h2>Clinic Remodelling</h2>
            <span>PROJECT LOCATION:</span> Lagos
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
                  alt="Clinic Remodelling Images"
                  src={ClinicRenImage1}
                />
              </div>
              <div className="projectImages" key={2}>
                <img
                  className="projectImages-1"
                  alt="Clinic Remodelling Images"
                  src={ClinicRenImage2}
                />
              </div>
              <div className="projectImages" key={3}>
                <img
                  className="projectImages-1"
                  alt="Clinic Remodelling Images"
                  src={ClinicRenImage3}
                />
              </div>
              <div className="projectImages" key={4}>
                <img
                  className="projectImages-1"
                  alt="Clinic Remodelling Images"
                  src={ClinicRenImage4}
                />
              </div>
              <div className="projectImages" key={5}>
                <img
                  className="projectImages-1"
                  alt="Clinic Remodelling Images"
                  src={ClinicRenImage5}
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

export default ProjPicRemoelling;
