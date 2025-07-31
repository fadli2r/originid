import Image from "next/image";

const CallToAction = () => {
  const platformButtons = [
    {
      href: "https://wa.me/628113651127/?text=Hi%20min%2C%20Saya%20mau%20konsultasi%20mengenai%20layanan%20%23umkmbisa",
      className: "ios-button",
      icon: "/images/icon/whatsapp.png",
      text1: "Konsultasi disini",
      aos: "fade-right",
    },
    
  ];
  return (
    <div className="col-xl-7 col-lg-8 col-md-10 m-auto">
      <div className="title-style-nine text-center mb-40" data-aos="fade-up">
        <h2 className="main-title text-white">
          Masih bingung? Konsultasi <span>GRATIS</span> sekarang
        </h2>
      </div>
      {/* /.title-style-nine */}
      <p
        className="text-white opacity-75 text-center text-lg mt-40 mb-40 lg-mt-20"
        data-aos="fade-up"
      >
        Tim kami siap membantu meningkatkan branding dan omset bisnis Anda setiap bulan.
      </p>
      <div className="d-sm-flex align-items-center justify-content-center platform-button-group-two">
        {platformButtons.map((button, index) => (
          <a
            href={button.href}
            className={`d-flex align-items-center ${button.className}`}
            data-aos={button.aos}
            key={index}
            target="_blank"
          >
                    <div>
              <strong> {button.text1}</strong>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default CallToAction;
