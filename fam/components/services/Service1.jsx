import Link from "next/link";

const services = [
  {
    iconSrc: "/images/icon/ads.png",
    sub:"Bingung cara masarin?",
    title: "Advertising",
    delay: "100",
  },
  {
    iconSrc: "/images/icon/employee.png",
    sub:"Tidak punya karyawan?",
    title: "Admin Sosmed",
    delay: "200",
  },
  {
    iconSrc: "/images/icon/writer.png",
    sub:"Tidak bisa bikin caption?",
    title: "Conten Writer",
    delay: "300",
  },
  {
    iconSrc: "/images/icon/studio.png",
    sub:"Tidak punya tempat buat live?",
    title: "Live Studio",
    delay: "100",
  },
  {
    iconSrc: "/images/icon/video.png",
    sub:"Tidak jago editing?",
    title: "Content Video",
    delay: "200",
  },
  {
    iconSrc: "/images/icon/product-photo.png",
    sub:"Foto produk jelek?",
    title: "Photo Product",
    delay: "300",
  },
];

const Service1 = () => {
  return (
    <>
      {services.map((service, index) => (
        <div
          className="col-lg-4 col-sm-6"
          data-aos="fade-up"
          data-aos-delay={service.delay}
          key={index}
        >
          <div className="card-style-sixteen tran3s text-center position-relative mt-40">
            <div className="icon">
              <img
                src={service.iconSrc}
                alt="icon"
                width={65}
                height={65}
                className="lazy-img m-auto"
              />
            </div>
            <p className="fs-20 m0 pt-20">{service.sub}</p>
            <h4 className="tx-dark">{service.title}</h4>
            <Link
              href="/pages-menu/service-details"
              className="read-more rounded-circle text-start tran3s"
            >
              <i className="bi bi-arrow-right" />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default Service1;
