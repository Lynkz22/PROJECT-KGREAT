import React, { Component } from "react";
import "../Styles/ProjectsPage.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DestinyImage1 from "../Components/Assets/Destiny-Apartments/DA1.jpg";
import DestinyImage2 from "../Components/Assets/Destiny-Apartments/DA2.jpg";
import DestinyImage3 from "../Components/Assets/Destiny-Apartments/DA3.jpg";
import DestinyImage4 from "../Components/Assets/Destiny-Apartments/DA4.jpg";
import DestinyImage5 from "../Components/Assets/Destiny-Apartments/DA5.jpg";
import DestinyImage6 from "../Components/Assets/Destiny-Apartments/DA6.jpg";
import DestinyImage7 from "../Components/Assets/Destiny-Apartments/DA7.jpg";
import DestinyImage8 from "../Components/Assets/Destiny-Apartments/DA8.jpg";
import DestinyImage9 from "../Components/Assets/Destiny-Apartments/DA9.jpg";
import DestinyImage10 from "../Components/Assets/Destiny-Apartments/DA10.jpg";
import DestinyImage11 from "../Components/Assets/Destiny-Apartments/DA11.jpg";

export class ProjPicDestinyApartments extends Component {
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
            <h2>Destiny Apartments</h2>
            <span>PROJECT LOCATION: Oniru, Lagos</span>
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
                  alt="Destiny Apartment Images"
                  src={DestinyImage1}
                />
              </div>
              <div className="projectImages" key={2}>
                <img
                  className="projectImages-1"
                  alt="Destiny Apartment Images"
                  src={DestinyImage2}
                />
              </div>
              <div className="projectImages" key={3}>
                <img
                  className="projectImages-1"
                  alt="Destiny Apartment Images"
                  src={DestinyImage3}
                />
              </div>
              <div className="projectImages" key={4}>
                <img
                  className="projectImages-1"
                  alt="Destiny Apartment Images"
                  src={DestinyImage4}
                />
              </div>
              <div className="projectImages" key={5}>
                <img
                  className="projectImages-1"
                  alt="Destiny Apartment Images"
                  src={DestinyImage5}
                />
              </div>
              <div className="projectImages" key={6}>
                <img
                  className="projectImages-1"
                  alt="Destiny Apartment Images"
                  src={DestinyImage6}
                />
              </div>
              <div className="projectImages" key={7}>
                <img
                  className="projectImages-1"
                  alt="Destiny Apartment Images"
                  src={DestinyImage7}
                />
              </div>
              <div className="projectImages" key={8}>
                <img
                  className="projectImages-1"
                  alt="Destiny Apartment Images"
                  src={DestinyImage8}
                />
              </div>
              <div className="projectImages" key={9}>
                <img
                  className="projectImages-1"
                  alt="Destiny Apartment Images"
                  src={DestinyImage9}
                />
              </div>
              <div className="projectImages" key={10}>
                <img
                  className="projectImages-1"
                  alt="Destiny Apartment Images"
                  src={DestinyImage10}
                />
              </div>
              <div className="projectImages" key={11}>
                <img
                  className="projectImages-1"
                  alt="Destiny Apartment Images"
                  src={DestinyImage11}
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

export default ProjPicDestinyApartments;
