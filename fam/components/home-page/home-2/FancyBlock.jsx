import Image from "next/image";

const FancyBlock = () => {
  const cardsData = [
    {
      iconSrc: "/images/icon/icon_70.svg",
      title: "Konsultasi",
      description: "Kami menerima kebutuhan website anda, kami akan lakukan riset",
      delay: "100",
    },
    {
      iconSrc: "/images/icon/icon_71.svg",
      title: "Proses",
      description: "Kami siapkan perencanaan dan desain konsep website. ",
      delay: "200",
    },
    {
      iconSrc: "/images/icon/icon_72.svg",
      title: "Publish",
      description: "Revisi dan uji coba untuk tahap akhir sebelum publish",
      delay: "300",
    },
  ];

  return (
    <>
      {cardsData.map((card, index) => (
        <div
          key={index}
          className="col-lg-4 col-md-6 d-flex"
          data-aos="fade-up"
          data-aos-delay={card.delay}
        >
          <div className={`card-style-eleven d-flex w-100 mt-85 lg-mt-40`}>
            <div className="icon d-flex align-items-center justify-content-center position-relative rounded-circle">
              <Image
                width={24}
                height={24}
                src={card.iconSrc}
                alt="icon"
                className="lazy-img"
              />
            </div>
            <div className="text">
              <h4 className="mb-10">{card.title}</h4>
              <p>{card.description}</p>
            </div>
          </div>
          {/* /.card-style-eleven */}
        </div>
      ))}
    </>
  );
};

export default FancyBlock;
