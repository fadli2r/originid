import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero-banner-twelve pt-150 pb-120 lg-pb-80 md-pt-200">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="text-wrapper" data-aos="fade-right">
              <h1 className="hero-heading fw-500 tx-dark">
                Desain bisnis Profesional Hanya di Famous.
              </h1>
              <p className="text-lg tx-dark mb-30 pt-35 lg-pt-20 lg-mb-20">
                bikin desain cv, bisnis, logo, website mulai dari 50rb.
              </p>
              <div className="d-lg-flex align-items-center">
                <a
                  href="https://wa.me/628113651127"
                  className="btn-twentyFour fw-500 position-relative d-inline-flex align-items-center me-5 mt-30"
                >
                  <span>Bikin sekarang</span>
                  <img
                    src="/images/icon/icon_123.svg"
                    alt="icon"
                    className="ms-3"
                  />
                </a>
                <div className="btn-eighteen position-relative d-inline-block tx-dark mt-15 md-mt-20">
                  <a href="#" className="fw-500 tran3s">
                    Konsultasi Gratis!
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* End col-6 */}

          <div
            className="col-xxl-6 col-xl-5 col-md-6 ms-auto text-end"
            data-aos="fade-left"
          >
            <div className="zn2 d-inline-block position-relative sm-mt-60">
            <div className="illustration-holder" data-aos="fade-left">
            <img
              src="/images/media/bg-desain.png"
              alt="illustration"
              className="lazy-img main-illustration"
            />
          </div>
            </div>
          </div>
          {/* End col-6 */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </div>
  );
};

export default Hero;
