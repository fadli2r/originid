import Image from "next/image";
import React from "react";

const CourseCategory = () => {
  const categories = [
    {
      icon: "/images/icon/icon_127.svg",
      title: "UI/UX Website",
      courses: "mulai dari 100rb",
    },
    {
      icon: "/images/icon/icon_128.svg",
      title: "Feed Social Media",
      courses: "mulai dari 10rb",
    },
    {
      icon: "/images/icon/icon_129.svg",
      title: "Portofolio",
      courses: "mulai dari 20rb",
    },
    {
      icon: "/images/icon/icon_130.svg",
      title: "Logo",
      courses: "mulai dari 50rb",
    },
    {
      icon: "/images/icon/icon_131.svg",
      title: "Poster",
      courses: "mulai dari 100rb",
    },
    {
      icon: "/images/icon/icon_132.svg",
      title: "Kalender",
      courses: "mulai dari 150rb",
    },
    {
      icon: "/images/icon/icon_133.svg",
      title: "Profile Video",
      courses: "mulai dari 200rb",
    },
  ];

  return (
    <>
      {categories.map((category, index) => (
        <div key={index} className="col-lg-3 col-md-4 col-sm-6 d-flex">
          <a
            href="#"
            className="card-style-eighteen text-center tran3s mb-40 xs-mb-20"
          >
            <div className="icon d-flex align-items-end justify-content-center">
              <Image
                width={42}
                height={42}
                src={category.icon}
                alt=""
                className="lazy-img"
              />
            </div>
            <h4 className="tx-dark mt-45 lg-mt-30">{category.title}</h4>
            <p>{category.courses}</p>
          </a>
          {/* /.card-style-eighteen */}
        </div>
      ))}
      <div className="col-lg-3 col-md-4 col-sm-6 d-flex">
        <a
          href="#"
          className="card-style-eighteen more-item position-relative text-center tran3s mb-40"
        >
          <h3>20</h3>
          <p className="pb-20">More Category</p>
          <img src="/images/icon/icon_134.svg" alt="" className="m-auto" />
        </a>
        {/* /.card-style-eighteen */}
      </div>
    </>
  );
};

export default CourseCategory;
