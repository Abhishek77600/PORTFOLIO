import { MdArrowOutward } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:acharyaabhishek801@gmail.com" data-cursor="disable">
                acharyaabhishek801@gmail.com
              </a>
            </p>
            
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/Abhishek77600"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/Abhishek77600"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com/_it.s_me_abhi/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Contact;
