import Image from "next/image";
import React from "react";

const contactBlocks = [
  {
    id: 1,
    iconSrc: "/images/icon/icon_173.svg",
    title: "Whatsapp Kami",
    text: "Tim kami 24 Jam selalu hadir.",
    buttonLabel: "Chat disini",
  },
  {
    id: 2,
    iconSrc: "/images/icon/icon_174.svg",
    title: "Butuh Bantuan?",
    text: "Kami selalu sedia untuk membantu Anda.",
    buttonLabel: "Chat with us",
  },
];

const BlockContact3 = () => {
  return (
    <>
      {contactBlocks.map((block) => (
        <div className="col-lg-5 col-md-6" key={block.id}>
          <div
            className="address-block-four text-center me-xxl-4 ms-xxl-4 mt-30"
            data-aos="fade-up"
          >
            <div className="icon d-flex align-items-end justify-content-center">
              <Image
                width={40}
                height={40}
                src={block.iconSrc}
                alt="shape"
                className="mh-100"
              />
            </div>
            <div className="text">
              <h5 className="title tx-dark mt-25 mb-10">{block.title}</h5>
              <p className="fs-18 mb-35">{block.text}</p>
              <a
                href="https://wa.me/628113651127"
                className="btn-twentySix fs-18 fw-500 tran3s position-relative"
              >
                {block.buttonLabel}
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlockContact3;
