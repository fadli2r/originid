const tabData = [
  {
    id: "sp1",
    title: "Create task",
    subtitle: "for any team person",
    image: "/images/media/img_06.jpg",
  },
  {
    id: "sp2",
    title: "Make timeframe",
    subtitle: "for do the task",
    image: "/images/media/img_05.jpg",
  },
  {
    id: "sp3",
    title: "Get task complated",
    subtitle: "by your member",
    image: "/images/media/img_06.1.jpg",
  },
];

const ProductTabs = () => {
  return (
    <>
      <ul
        className="nav nav-tabs d-block d-md-flex justify-content-between"
        data-aos="fade-up"
        role="tablist"
      >
        {tabData.map((tab) => (
          <li className="nav-item" role="presentation" key={tab.id}>
            <button
              className={`nav-link ${tab.id === "sp1" ? "active" : ""}`}
              data-bs-toggle="tab"
              data-bs-target={`#${tab.id}`}
              type="button"
              role="tab"
            >
              {tab.title}
              <span className="d-none d-lg-inline-block">{tab.subtitle}</span>
            </button>
          </li>
        ))}
      </ul>
      
    </>
  );
};

export default ProductTabs;
