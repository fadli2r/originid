const Pricing = () => {
  const plans = [
    {
      icon: "/images/icon/icon_56.svg",
      plan: "Basic",
      features: [
        "5 Tiktok Videos",
        "5 Instagram Reels",
        "4 Instragram Feed",
        "2 Photo Product",
        "5 Caption",
        "1 Influencer Promotion",
      ],
      price: "Rp. 1.500.000",
      trial: "up to 3 user + 1.99 per user",
      className: "pr-column pr-one",
      wa:"628113651127?text=Halo,%20saya%20tertarik%20untuk%20langganan%20SMM%20Basic",
    },
    {
      icon: "/images/icon/icon_57.svg",
      plan: "Pro",
      features: [
        "7 Tiktok Videos",
        "7 Instagram Reels",
        "8 Instragram Feed",
        "2 Influencer Promotion",
        "Unlimited Photo Product",
        "Unlimited Caption",
        "Tips SMM",
      ],
      price: "Rp. 2.500.000",
      trial: "up to 5 user + 1.99 per user",
      className: "pr-column active",
      wa:"628113651127?text=Halo,%20saya%20tertarik%20untuk%20langganan%20SMM%20Pro",

    },
    {
      icon: "/images/icon/icon_58.svg",
      plan: "Ultimate",
      features: [
        "2-3 Tiktok Videos/Weeks",
        "2-3 Instagram Reels/Weeks",
        "12 Instragram Feed",
        "3 Influencer Promotion",
        "Unlimited Photo Product",
        "Unlimited Caption",
        "Tips SMM",
      ],
      price: "Rp. 4.5000.000",
      trial: "up to 7 user + 1.99 per user",
      className: "pr-column pr-two",
      wa:"628113651127?text=Halo,%20saya%20tertarik%20untuk%20langganan%20SMM%20Ultimate",

    },
    
  ];
  const plans2 = [
    {
      icon: "/images/icon/icon_56.svg",
      plan: "Basic",
      features: [
        "5 Tiktok Videos/bulan",
        "5 Instagram Reels/bulan",
        "4 Instragram Feed/bulan",
        "2 Photo Product/bulan",
        "5 Caption/bulan",
        "1 Influencer Promotion/bulan",
      ],
      price: "Rp. 10.000.000",
      trial: "up to 3 user + 1.99 per user",
      className: "pr-column pr-one",
      wa:"628113651127?text=Halo,%20saya%20tertarik%20untuk%20langganan%20SMM%20Basic",
    },
    {
      icon: "/images/icon/icon_57.svg",
      plan: "Pro",
      features: [
        "7 Tiktok Videos/bulan",
        "7 Instagram Reels/bulan",
        "8 Instragram Feed/bulan",
        "2 Influencer Promotion/bulan",
        "Unlimited Photo Product",
        "Unlimited Caption",
        "Tips SMM",
      ],
      price: "Rp. 25.000.000",
      trial: "up to 5 user + 1.99 per user",
      className: "pr-column active",
      wa:"628113651127?text=Halo,%20saya%20tertarik%20untuk%20langganan%20SMM%20Pro",

    },
    {
      icon: "/images/icon/icon_58.svg",
      plan: "Ultimate",
      features: [
        "10-12 Tiktok Videos/bulan",
        "5-8 Instagram Reels/bulan",
        "12 Instragram Feed/bulan",
        "3 Influencer Promotion/bulan",
        "Unlimited Photo Product",
        "Unlimited Caption",
        "Tips SMM",
      ],
      price: "Rp. 45.0000.000",
      trial: "up to 7 user + 1.99 per user",
      className: "pr-column pr-two",
      wa:"628113651127?text=Halo,%20saya%20tertarik%20untuk%20langganan%20SMM%20Ultimate",

    },
  ];

  return (
    <div data-aos="fade-up">
      <ul
        className="nav nav-tabs justify-content-center border-0 pricing-nav-three wow fadeInUp"
        role="tablist"
      >
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            data-bs-toggle="tab"
            data-bs-target="#month"
            type="button"
            role="tab"
          >
            Monthly
          </button>
        </li>
        {/* End Monthly */}
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            data-bs-toggle="tab"
            data-bs-target="#year"
            type="button"
            role="tab"
          >
            Yearly
          </button>
        </li>
        {/* End yarly */}
      </ul>
      {/* End ul */}

      <div className="pricing-table-area-three mt-160 lg-mt-100 xs-mt-60 wow fadeInUp">
        <div className="tab-content">
          <div className="tab-pane show active" id="month">
            <div className="row gx-0 align-items-center">
              {plans.map((plan, index) => (
                <div className="col-lg-4 col-sm-6" key={index}>
                  <div className={`pr-column ${plan.className}`}>
                    <img src={plan.icon} alt="" className="icon" />
                    <div className="plan tx-dark">{plan.plan}</div>
                    <div className="pr-body">
                      <ul className="style-none text-start">
                        {plan.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="pr-footer pt-45 lg-pt-30">
                      <div className="price tx-dark">{plan.price}</div>
                      <div className="trial-text fs-17 opacity-75 mb-30">
                        /bulan
                      </div>
                      <a href={`https://wa.me/${plan.wa}`} target="_blank" className="btn-twelve fw-500 tran3s">
                      Coba Sekarang
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* /.row */}
          </div>
          {/* /.tab-pane */}

          <div className="tab-pane" id="year">
            <div className="row gx-0 align-items-center">
              {plans2.map((plan, index) => (
                <div className="col-lg-4 col-sm-6" key={index}>
                  <div className={`pr-column ${plan.className}`}>
                    <img src={plan.icon} alt="" className="icon" />
                    <div className="plan tx-dark">{plan.plan}</div>
                    <div className="pr-body">
                      <ul className="style-none text-start">
                        {plan.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="pr-footer pt-45 lg-pt-30">
                    <div className="price tx-dark">{plan.price}</div>
                      <div className="trial-text fs-17 opacity-75 mb-30">
                        /Tahun
                      </div>
                      <a href={`https://wa.me/${plan.wa}`} target="_blank" className="btn-twelve fw-500 tran3s">
                        Coba Sekarang
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* /.row */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
