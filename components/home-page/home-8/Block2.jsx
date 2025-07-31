import Image from "next/image";

const Block2 = () => {
  const data = [
    {
      icon: "/images/icon/web-p.png",
      title: "Web Design",
      description: "Layanan website Landing page, Company profile dan Bisnis anda",
    },
    {
      icon: "/images/icon/social-p.png",
      title: "Social Media Marketing",
      description: "Spesialis branding dan mengelola social media bisnis anda",
    },
    {
      icon: "/images/icon/seo-p.png",
      title: "SEO",
      description: "Menaikkan brand bisnis anda menjadi No. 1 pencarian Google",
    },
    {
      icon: "/images/icon/ads-p.png",
      title: "Social Ads & Google Ads",
      description: "Analisa Iklan bisnis anda agar sesuai target dan tujuan pasar",
    },
    {
      icon: "/images/icon/konten-p.png",
      title: "Content & Video Promotion",
      description: "Kami bantu pembuatan Konten vidio agar bisnis anda lebih menarik",
    },
    {
      icon: "/images/icon/buzzer-p.png",
      title: "Influencer & Buzzer",
      description: "Kami memiliki koneksi dengan influencer yang sesuai kategori bisnis Anda",
    },
  ];

  return (
    <>
      {data.map((item, index) => (
        <div
          key={index}
          className={`col-lg-4 col-md-6 ${index === 1 ? "active" : ""}`}
        >
          <div
            className="card-style-twelve text-center position-relative mt-40"
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`}
          >
            <div className="icon d-flex align-items-center justify-content-center">
              <Image
                width={180}
                height={180}
                layout="intrinsic"
                src={item.icon}
                alt="shape"
                className="lazy-img"
              />
            </div>
            <h4 className="text-white mb-10 mt-25">{item.title}</h4>
            <p className="text-white opacity-75 mb-25">{item.description}</p>
            <a href="#" className="arrow tran3s">
              <img
                src="/images/icon/icon_80.svg"
                alt="shape"
                className="lazy-img"
              />
            </a>
          </div>
          {/* /.card-style-twelve */}
        </div>
      ))}
    </>
  );
};

export default Block2;
