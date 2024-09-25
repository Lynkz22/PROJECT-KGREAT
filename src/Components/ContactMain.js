import React from "react";
import "../Styles/Contact.css";
// import GoogleMaps from "./GoogleMaps";

const ContactMain = () => {
  return (
    <>
      <section className="sectionContactForm">
        <div className="divContactForm">
          <form
            action="https://formsubmit.co/kgreatengineering1.com"
            method="POST"
          >
            <input type="hidden" name="_subject" value="New Email!" />
            <h2 className="divContactFormHeading">Send Us A Message</h2>
            <div className="inputBox">
              <input
                type="text"
                name="name"
                required
                className="font"
                placeholder="Full Name"
              />
            </div>
            <div class="inputBox">
              <input
                type="email"
                name="email"
                required
                placeholder="Email Address"
              />
            </div>
            <div className="inputBox">
              <textarea required placeholder="Type Your Message"></textarea>
            </div>
            <div className="inputBox">
              {/* <button type="submit" className="sendit">
                  <a className="sendit-1">Send</a>
                </button> */}
            </div>
          </form>
        </div>
        <div className="divMaps">
          {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.203927562031!2d3.358317174435594!3d6.495846023485243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c6c9cf62fa5%3A0xd4ca1c850c068e34!2s34%20Razak%20Balogun%20St%2C%20Surulere%20101241%2C%20Lagos!5e0!3m2!1sen!2sng!4v1694415189941!5m2!1sen!2sng"
              width="600"
              height="450"
              style="border: 0"
              allowfullscreen=""  
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              ContactMain="divMaps"
            ></iframe> */}
          {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.2039275620295!2d3.3583171743592386!3d6.495846023485394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c6c9cf62fa5%3A0xd4ca1c850c068e34!2s34%20Rasaq%20Balogun%20St%2C%20Surulere%2C%20Lagos%20101241%2C%20Lagos!5e0!3m2!1sen!2sng!4v1702771514986!5m2!1sen!2sng"
              width="400"
              height="300"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe> */}
          {/* <GoogleMaps /> */}
        </div>
      </section>
    </>
  );
};

export default ContactMain;
