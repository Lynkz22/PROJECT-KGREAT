import React, { Component } from "react";
import "../Styles/ProjectsPage.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MiamiImage1 from "../Components/Assets/Miami-Apartments/MA1.webp";
import MiamiImage2 from "../Components/Assets/Miami-Apartments/MA2.webp";
import MiamiImage3 from "../Components/Assets/Miami-Apartments/MA3.webp";
import MiamiImage4 from "../Components/Assets/Miami-Apartments/MA4.webp";
import MiamiImage5 from "../Components/Assets/Miami-Apartments/MA5.jpg";
import MiamiImage6 from "../Components/Assets/Miami-Apartments/MA6.jpg";
import MiamiImage7 from "../Components/Assets/Miami-Apartments/MA7.jpg";

export class ProjPicMiami extends Component {
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
            <h2>Miami Apartments</h2>
            <span>PROJECT LOCATION:</span> Teslim Elias, Victoria Island, Lagos
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
                  alt="Miami Images"
                  src={MiamiImage1}
                />
              </div>
              <div className="projectImages" key={2}>
                <img
                  className="projectImages-1"
                  alt="Miami Images"
                  src={MiamiImage2}
                />
              </div>
              <div className="projectImages" key={3}>
                <img
                  className="projectImages-1"
                  alt="Miami Images"
                  src={MiamiImage3}
                />
              </div>
              <div className="projectImages" key={4}>
                <img
                  className="projectImages-1"
                  alt="Miami Images"
                  src={MiamiImage4}
                />
              </div>
              <div className="projectImages" key={5}>
                <img
                  className="projectImages-1"
                  alt="Miami Images"
                  src={MiamiImage5}
                />
              </div>
              <div className="projectImages" key={6}>
                <img
                  className="projectImages-1"
                  alt="Miami Images"
                  src={MiamiImage6}
                />
              </div>
              <div className="projectImages" key={7}>
                <img
                  className="projectImages-1"
                  alt="Miami Images"
                  src={MiamiImage7}
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

export default ProjPicMiami;
