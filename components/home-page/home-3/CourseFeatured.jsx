const coursesData = [
  {
    id: 1,
    tag: "Design",
    title: "Power Point",
    level: "50 ribuan",
    numClasses: 4.5,
    tag2: "POPULER",
  },
  {
    id: 2,
    tag: "Design",
    title: "Feed Instagram",
    level: "20 ribuan",
    numClasses: 4.9,
    tag2: "POPULER",
  },
  {
    id: 3,
    tag: "Design",
    title: "CV",
    level: "50 ribuan",
    numClasses: 4.8,
    tag2: "TRENDING",
  },
  {
    id: 4,
    tag: "Design",
    title: "Company Profile",
    level: "100 ribuan",
    numClasses: 4.9,
    tag2: "TRENDING",
  },
];

const CourseFeatured = () => {
  return (
    <>
      {coursesData.map((course) => (
        <div className="col-sm-6 d-flex flex-column space-fix" key={course.id}>
          <a
            href="#"
            className="card-style-nineteen position-relative d-flex flex-column tran3s mb-40 xs-mb-20"
          >
            <span className="tag fw-500 text-white text-uppercase">
            <i class="fa-solid fa-star"> {course.numClasses}</i>
            </span>
            <h4 className="mb-0 mt-25">{course.title}</h4>
            <ul className="style-none pb-40 lg-pb-20 d-flex justify-content-between">
              <li>{course.level}</li>
            </ul>
            <span className="tag2 fw-bold tx-dark text-uppercase mt-auto">
              {course.tag2}
            </span>
          </a>
          {/* /.card-style-nineteen */}
        </div>
      ))}
    </>
  );
};

export default CourseFeatured;
