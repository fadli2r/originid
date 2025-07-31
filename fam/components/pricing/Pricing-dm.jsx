import React from "react";
import Link from "next/link";


const pricingPlans = {
  monthly: [
    {
      id: 1,
      name: "Paket Basic",
      price: "299rb",
      info: "untuk bisnis pemula",
      min:"*Lifetime",
      link:"https://wa.me/628113651127/?text=Hi%20min%2C%20aku%20mau%20konsultasi%20mengenai%20layanan%20%23umkmbisa%20dengan%20paket%20Basic",

      features: [
        { text: "Page One Google Search", available: true },
        { text: "Limit Google Ads 100rb", available: true },
        { text: "1 Keyword Search", available: true },
        { text: "Tips Social Media Marketing",available: true},
        { text: "Tips Social Media Marketing",available: false },
        { text: "Template Email Marketing",available: false },
        { text: "Garansi 1 bulan Uang Kembali",available: true },

      ],

    },
    {
      id: 2,
      name: "Paket Pro",
      price: "599rb",
      info: "untuk bisnis yang sudah berkembang",
      min:"*minimal 3 Bulan",
      link:"https://wa.me/628113651127/?text=Hi%20min%2C%20aku%20mau%20konsultasi%20mengenai%20layanan%20%23umkmbisa%20dengan%20paket%20Pro.",

      features: [
        { text: "Page One Google Search", available: true },
        { text: "Limit Google Ads 300rb", available: true },
        { text: "3 Keyword Search", available: true },
        { text: "Tips Social Media Marketing",available: true},
        { text: "Tips Social Media Marketing",available: true },
        { text: "Template Email Marketing",available: true },
        { text: "Garansi 1 bulan Uang Kembali",available: true },

      ],
    },
    {
      id: 3,
      name: "Hire Us",
      price: "-",
      info: "untuk bisnis/perusahaan",
      min:"*minimal 6 Bulan",
      link:"https://wa.me/628113651127/?text=Hi%20min%2C%20aku%20mau%20konsultasi%20mengenai%20layanan%20%23umkmbisa%20dengan%20paket%20Ultimate.",

      features: [
        { text: "Page One Google Search", available: true },
        { text: "Limit Google Ads", available: true },
        { text: "Keyword Search", available: true },
        { text: "Tips Social Media Marketing",available: true},
        { text: "Tips Social Media Marketing",available: true },
        { text: "Template Email Marketing",available: true },
        { text: "Garansi 1 bulan Uang Kembali",available: true },
      ],

    },
    // ... Add other monthly plans here
  ],
  
};

const Pricing2 = () => {
  const renderPlan = (plan) => (
    <div key={plan.id} className="col-md-4 pr-column sm-mb-20">
      <div className="pr-header ">
        <div className="plan">{plan.name}</div>
        <div className="price ">{plan.price}</div>
        <div className="info">{plan.info}</div>
      </div>{" "}
      {/* /.pr-header */}
      <div className="pr-body ">
        <ul className="style-none">
          {plan.features.map((feature, index) => (
            <li key={index} style={{padding:"22px"}}>
            <span className="pr-text d-block d-lg-none mb-5">
              {feature.text}
            </span>
            <i
              className={`bi ${
                feature.available
                  ? "bi-check2 availabe"
                  : "bi-x not-available"
              }`}
              
            />
          </li>
          ))}
        </ul>
      </div>
      <div className="pr-footer">
        
      <Link href={plan.link} target="_blank" className="trial-button fw-500 fs-16 tran3s">          Pilih paket

        </Link>
        <div className="trial-text mt-15 fs-15 opacity-75">
        {plan.min}
        </div>
      </div>
    </div>
  );

  return (
    <>
      
      <div
        className="pricing-table-area-one mt-110 lg-mt-60 pe-xxl-4 ps-xxl-4"
        data-aos="fade-up"
      >
        <div className="tab-content">
          <div className="tab-pane show active" id="month">
            <div className="row gx-0 position-relative">
              <div className="col-lg-3 pr-list-wrapper d-none d-lg-block position-relative">
                <ul className="style-none">
                <li>Page one Google Search</li>
                <li>Limit Google ads</li>
                <li>Keyword Search</li>
                <li>FB & Google Ads Account</li>
                <li>Tips Social Media Marketing</li>
                <li>Template Email Marketing</li>
                <li>Garansi 1 Bulan uang Kembali</li>

                </ul>
              </div>
              <div className="col-lg-9 pr-table-wrapper ml-auto">
                <div className="row gx-0">
                  {pricingPlans.monthly.map(renderPlan)}
                </div>
              </div>
            </div>
          </div>
          {/* End tab-pane */}

         
        </div>
      </div>
    </>
  );
};

export default Pricing2;
