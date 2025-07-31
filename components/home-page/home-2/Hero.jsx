import Link from "next/link";

const Hero = () => {
  return (
    <div className="hero-banner-seven p-30">
      <div className="bg-wrapper position-relative pt-200 pb-20 md-pt-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-7" data-aos="fade-right">
              <Link
                href="/pages-menu/pricing"
                className="slogan d-inline-block"
              >
                <strong className="fw-500">Promo </strong>
                awal tahun 2024, up to 70%.
                <i className="fas fa-chevron-right" />
              </Link>
              <h1 className="hero-heading fw-bold tx-dark mt-25">
                Buat Website untuk bisnismu lebih
                <span className="position-relative ms-3 d-inline-block">
                Profit <img src="/images/shape/shape_95.svg" alt="shape" />
                </span>
                .
              </h1>
              <p className="text-lg mb-70 pt-35 pe-xxl-5 md-pt-30 lg-mb-40">
                sudah punya website tapi biasa aja? coba bikin di sini langsung dapatkan hasilnya.
              </p>
              <Link
                href="/pages-menu/pricing-v3"
                className="btn-fourteen fw-500 tran3s"
              >
                Bikin sekarang
              </Link>
            </div>
          </div>
          {/* End .container */}

          <div className="illustration-holder" data-aos="fade-left">
            <img
              src="/images/assets/web-dev.png"
              alt="illustration"
              className="lazy-img main-illustration"
            />
          </div>
          {/* /.illustration-holder */}
        </div>
        {/* /.container */}
      </div>
    </div>
  );
};

export default Hero;
