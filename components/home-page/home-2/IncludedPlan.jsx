const cards = [
  {
    id: 1,
    icon: "/images/icon/icon_63.svg",
    title: "Premium Template",
    description:
      "Kami memberikan Template premium dan mudah digunakan",
    delayAnim: "100",
  },
  {
    id: 2,
    icon: "/images/icon/icon_64.svg",
    title: "Tanpa perlu bisa ngoding",
    description:
      "Serahkan masalah website pada kami, Anda cukup terima beres",
    delayAnim: "200",
  },
  {
    id: 3,
    icon: "/images/icon/icon_65.svg",
    title: "SEO no.1 di Google Search",
    description: "Kami selalu memberikan keyword pada website Anda supaya no.1 di Google Search",
    delayAnim: "300",
  },
  {
    id: 4,
    icon: "/images/icon/icon_66.svg",
    title: "Tampilan Responsive",
    description:
      "Prioritas kami adalah tampilan website yang nyaman digunakan di desktop atau smartphone. ",
    delayAnim: "100",
  },
  {
    id: 5,
    icon: "/images/icon/icon_67.svg",
    title: "Memperkuat Branding",
    description:
      "Website memiliki pengaruh besar dalam Branding bisnis Anda",
    delayAnim: "200",
  },
  {
    id: 6,
    icon: "/images/icon/icon_68.svg",
    title: "Revisi dan Garansi 100%",
    description:
      "Kami memberikan revisi sepuasnya dan garansi jika tidak sesuai keinginan Anda",
    delayAnim: "300",
  },
];

const IncludedPlan = () => {
  return (
    <>
      {cards.map((card) => (
        <div
          className="col-lg-4 col-sm-6 d-flex"
          key={card.id}
          data-aos="fade-up"
          data-aos-delay={card.delayAnim}
        >
          <div className="card-style-eleven text-center text-lg-start w-100 mt-110 lg-mt-50 xs-mt-40">
            <div className="icon d-flex align-items-center justify-content-center position-relative rounded-circle">
              <img src={card.icon} alt="illustration" className="lazy-img" />
            </div>
            <h4 className="mt-30 mb-20 lg-mb-10">{card.title}</h4>
            <p>{card.description}</p>
          </div>
          {/* /.card-style-eleven */}
        </div>
      ))}
    </>
  );
};

export default IncludedPlan;
