import React, { Component } from "react";
import "../Styles/ProjectsPage.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DejImage1 from "../Components/Assets/Dej-Deluxe/DEJ1.jpg";
import DejImage2 from "../Components/Assets/Dej-Deluxe/DEJ2.jpg";
import DejImage3 from "../Components/Assets/Dej-Deluxe/DEJ3.jpg";
import DejImage4 from "../Components/Assets/Dej-Deluxe/DEJ4.jpg";
import DejImage5 from "../Components/Assets/Dej-Deluxe/DEJ5.jpg";
import DejImage6 from "../Components/Assets/Dej-Deluxe/DEJ6.jpg";
import DejImage7 from "../Components/Assets/Dej-Deluxe/DEJ7.jpg";

export class ProjPicDejDeluxe extends Component {
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
            <h2>DEJ Deluxe</h2>
            <span>PROJECT LOCATION: Victoria Island</span>
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
                  alt="DEJ Images"
                  src={DejImage1}
                />
              </div>
              <div className="projectImages" key={2}>
                <img
                  className="projectImages-1"
                  alt="DEJ Images"
                  src={DejImage2}
                />
              </div>
              <div className="projectImages" key={3}>
                <img
                  className="projectImages-1"
                  alt="DEJ Images"
                  src={DejImage3}
                />
              </div>
              <div className="projectImages" key={4}>
                <img
                  className="projectImages-1"
                  alt="DEJ Images"
                  src={DejImage4}
                />
              </div>
              <div className="projectImages" key={5}>
                <img
                  className="projectImages-1"
                  alt="DEJ Images"
                  src={DejImage5}
                />
              </div>
              <div className="projectImages" key={6}>
                <img
                  className="projectImages-1"
                  alt="DEJ Images"
                  src={DejImage6}
                />
              </div>
              <div className="projectImages" key={7}>
                <img
                  className="projectImages-1"
                  alt="DEJ Images"
                  src={DejImage7}
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

export default ProjPicDejDeluxe;
