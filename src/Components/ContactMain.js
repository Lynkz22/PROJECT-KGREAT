import "../Styles/Contact.css";
import React, { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";

const ContactMain = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_8wgpfre", "template_73v3n58", form.current, {
        publicKey: "CmiHQQvpRgzYRkxsD",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <section className="sectionContactForm">
        <div className="divContactForm">
          <form
            ref={form}
            onSubmit={sendEmail}
            // action="https://formsubmit.co/kgreatengineering1.com"
            // method="POST"
          >
            <input type="hidden" name="_subject" value="New Email!" />
            <h2 className="divContactFormHeading">Send Us A Message</h2>
            <div className="inputBox">
              <input
                type="text"
                name="user_name"
                required
                className="font"
                placeholder="Full Name"
              />
            </div>
            <div class="inputBox">
              <input
                type="email"
                name="user_email"
                required
                placeholder="Email Address"
              />
            </div>
            <div className="inputBox">
              <textarea
                name="message"
                required
                placeholder="Type Your Message"
              ></textarea>
            </div>
            <button type="submit" className="sendit">
              <p className="senditnow">Send </p>
              {/* <input type="submit" value="Send" className="senditnow" /> */}
            </button>
          </form>
          <div className="message">
            <p className="success" id="successid">
              Your Message Successfully Sent
            </p>
          </div>
        </div>
        <div className="divMaps">
          <iframe
          className="maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1152.385924367062!2d3.360757787231091!3d6.495756508243469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c6c9cf62fa5%3A0xd4ca1c850c068e34!2s34%20Rasaq%20Balogun%20St%2C%20Surulere%2C%20Lagos%20101241%2C%20Lagos!5e0!3m2!1sen!2sng!4v1728472999209!5m2!1sen!2sng"
            // width="600"
            // height="450"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
};

// const ContactMain = () => {
//   return (
//     <form>
//       <label>Name</label>
//       <input type="text" name="user_name" />
//       <label>Email</label>
//       <input type="email" name="user_email" />
//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form>
//   );
// };

export default ContactMain;
