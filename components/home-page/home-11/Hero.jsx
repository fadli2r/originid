import Link from "next/link";
import { useState } from "react";

const Hero = () => {
  const [inputValue, setInputValue] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Code for handling form submission
  };

  const content = {
    heading: "Gak perlu lagi Hire Team Digital Marketing Sendiri",
    subheading:
      "Naikan Branding bisnis menggunakan digital Marketing di Origin Famous",
    btnText: "Start Now",
  };

  return (
    <>
      <h1 className="hero-heading fw-light tx-dark">
        <span className="position-relative">{content.heading}</span>
      </h1>
      <p className="text-lg mb-75 pt-60 lg-mb-40 lg-pt-40">
        {content.subheading}
      </p>
      <div className="d-sm-flex justify-content-center align-items-center">
                <Link
                  href="/contact"
                  className="tran3s fs-17 fw-500 btn-three mb-25 ms-2 me-3"
                >
                  Konsultasi Gratis
                </Link>
               
              </div>
    </>
  );
};

export default Hero;
