const CardData = [
  {
    icon: "/images/icon/icon_82.svg",
    title: "Konsultasi",
    description: "konsultasikan kebutuhan bisnis digital anda.",
  },
  {
    icon: "/images/icon/icon_83.svg",
    title: "Pilih layanan",
    description: "Tim kami memberikan pelayanan yang cocok untuk bisnis anda",
  },
  {
    icon: "/images/icon/icon_84.svg",
    title: "Mulai Digitalisasi",
    description: "Tim kami akan melakukan digitalisasi bisnis anda",
  },
];

const Block3 = () => {
  return (
    <>
      {CardData.map((data, index) => (
        <div className="col-xl-4" key={index}>
          <div className="card-style-thirteen position-relative">
            <div className="icon d-flex align-items-end">
              <img src={data.icon} alt="icon" className="lazy-img" />
            </div>
            <h4 className="text-white mt-20 mb-10">{data.title}</h4>
            <p className="fs-18">{data.description}</p>
            {index !== 2 && (
              <div className="arrow d-flex align-items-center justify-content-center rounded-circle position-absolute">
                <i className="bi bi-chevron-right" />
              </div>
            )}
          </div>
          {/* /.card-style-thirteen */}
        </div>
      ))}
    </>
  );
};

export default Block3;
