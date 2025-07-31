import { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";

const courseData = [
  {
    id: 1,
    imgSrc: "/images/media/logo-1.png",
    instructor: "Desain logo",
    title: "SW Company",
    rating: 4,
    ratingsCount: 310,
    price: 17.99,
    discountedPrice: 29.99,
    tags: ["logo", "UI/UX", "feed", "poster"],
  },
  {
    id: 2,
    imgSrc: "/images/media/logo-2.png",
    instructor: "Desain logo",
    title: "SW Company",
    rating: 5,
    ratingsCount: 180,
    price: 13.99,
    discountedPrice: 19.99,
    tags: ["ppt", "company", "UI/UX", "poster"],
  },
  {
    id: 3,
    imgSrc: "/images/media/logo-3.png",
    instructor: "Desain logo",
    title: "SW Company",
    rating: 5,
    ratingsCount: 310,
    price: 17.99,
    discountedPrice: 29.99,
    tags: ["poster", "UI/UX", "feed", "logo", "ppt"],
  },
  {
    id: 4,
    imgSrc: "/images/media/logo-4.png",
    instructor: "Desain logo",
    title: "SW Company",
    rating: 5,
    ratingsCount: 180,
    price: 13.99,
    discountedPrice: 19.99,
    tags: ["logo", "ppt", "company", "feed"],
  },
  {
    id: 5,
    imgSrc: "/images/media/logo5.png",
    instructor: "Desain logo",
    title: "SW Company",
    rating: 4,
    ratingsCount: 180,
    price: 13.99,
    discountedPrice: 19.99,
    tags: ["feed", "company", "logo"],
  },
  {
    id: 6,
    imgSrc: "/images/media/logo-1.png",
    instructor: "Zubayer Al Hasan",
    duration: "8h",
    title: "Master in Bootstrap only within 30 days.",
    rating: 4,
    ratingsCount: 180,
    price: 13.99,
    discountedPrice: 19.99,
    tags: ["ppt", "company", "poster", "UI/UX"],
  },
];

const CourseFilter = () => {
  const [filter, setFilter] = useState("*");

  const filteredItems =
    filter === "*"
      ? courseData
      : courseData.filter((item) => item.tags.includes(filter));

  var settings = {
    infinite: false,
    autoplay: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <ul
        className="nav nav-tabs border-0 mb-130 lg-mb-80 md-mb-30"
        role="tablist"
        data-aos="fade-up"
      >
        <ul className="style-none text-center isotop-menu-wrapper d-flex flex-wrap">
          <li className="nav-item">
            <button
              className={filter === "*" ? "active nav-link" : "nav-link"}
              onClick={() => setFilter("*")}
            >
              All
            </button>
          </li>
          <li className="nav-item">
            <button
              className={filter === "logo" ? "active nav-link" : "nav-link"}
              onClick={() => setFilter("logo")}
            >
              logo Design
            </button>
          </li>
          <li className="nav-item">
            <button
              className={filter === "UI/UX" ? "active nav-link" : "nav-link"}
              onClick={() => setFilter("UI/UX")}
            >
              UI/UX Design
            </button>
          </li>
          <li className="nav-item">
            <button
              className={filter === "feed" ? "active nav-link" : "nav-link"}
              onClick={() => setFilter("feed")}
            >
              Feed Instagram
            </button>
          </li>
          <li className="nav-item">
            <button
              className={filter === "poster" ? "active nav-link" : "nav-link"}
              onClick={() => setFilter("poster")}
            >
              Poster Design
            </button>
          </li>
          <li className="nav-item">
            <button
              className={filter === "ppt" ? "active nav-link" : "nav-link"}
              onClick={() => setFilter("ppt")}
            >
              Power Point
            </button>
          </li>
          <li className="nav-item">
            <button
              className={
                filter === "company" ? "active nav-link" : "nav-link"
              }
              onClick={() => setFilter("company")}
            >
              Company Design
            </button>
          </li>
        </ul>
      </ul>
      {/* End ul */}

      <div className="slider-wrapper">
        <div
          className="tab-content position-relative zn2 course_slider_one"
          data-aos="fade-up"
        >
          <Slider {...settings} arrows={false}>
            {filteredItems.map((course) => (
              <div className="item" key={course.id}>
                <div className="card-style-twenty tran3s">
                  <div className="img-meta">
                    <Image
                      width={315}
                      height={222}
                      src={course.imgSrc}
                      alt="media"
                      className="w-100"
                    />
                  </div>
                  {/* /.img-meta */}
                  <div className="course-data">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="course-by fs-17 tx-dark opacity-75">
                        {course.instructor}
                      </div>
                      <div className="d-flex align-items-center justify-content-between mt-10 mb-10">
                      
                      <a href="#" className="bookmark" title="Bookmark">
                        <i className="fa-solid fa-heart" />
                      </a>
                    </div>
                    </div>
                    <a href="#" className="course-title fw-500">
                      {course.title}
                    </a>
                    <div className="course-review d-flex align-items-center">
                      <ul className="style-none d-flex rating">
                        {Array.from({ length: course.rating }, (_, i) => (
                          <li className="active" key={i}>
                            <i className="bi bi-heart-fill" />
                          </li>
                        ))}
                        {Array.from({ length: 5 - course.rating }, (_, i) => (
                          <li key={i}>
                            <i className="bi bi-heart-fill" />
                          </li>
                        ))}
                      </ul>
                      <span className="fs-15 tx-dark ms-1">
                        ({course.ratingsCount})
                      </span>
                    </div>
                    
                  </div>
                  {/* /.course-data */}
                </div>
                {/* /.card-style-twenty */}
              </div>
            ))}
          </Slider>
        </div>
        {/* /.tab-content */}
      </div>
    </>
  );
};

export default CourseFilter;
