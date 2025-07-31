import React from "react";
import Link from "next/link";


const pricingPlans = {
  monthly: [
    {
      id: 1,
      name: "Paket Basic",
      price: "299rb",
      info: "Great for Individual Person",
      min:"*Lifetime",
      link:"https://wa.me/628113651127/?text=Hi%20min%2C%20aku%20mau%20konsultasi%20mengenai%20layanan%20%23umkmbisa%20dengan%20paket%20Basic",

      features: [
        { text: "website", nt:"Basic" },
        { text: "Social Media", nt:"Basic" },
        { text: "seo google", nt:"Basic" },
        { text: "Saldo Ads",nt:"300Rb" },
        { text: "konten dan video",nt:"Not include"},
        { text: "Influencer",nt:"Not include" },
        { text: "Refund 100%", nt:"Include" },
        { text: "Akses Whatsapp #UMKMBisa", nt:"Basic" },
      ],

    },
    {
      id: 2,
      name: "Paket Pro",
      price: "99rb",
      info: "Great for Individual Person",
      min:"*minimal 3 Bulan",
      link:"https://wa.me/628113651127/?text=Hi%20min%2C%20aku%20mau%20konsultasi%20mengenai%20layanan%20%23umkmbisa%20dengan%20paket%20Pro.",

      features: [
        { text: "website", nt:"Pro" },
        { text: "Social Media", nt:"Pro" },
        { text: "seo google", nt:"Pro" },
        { text: "Saldo Ads",nt:"300Rb" },
        { text: "konten dan video",nt:"Pro"},
        { text: "Influencer",nt:"1-3 Influencer" },
        { text: "Refund 100%", nt:"Include" },
        { text: "Akses Whatsapp #UMKMBisa",nt:"Pro" },
      ],
    },
    {
      id: 3,
      name: "Paket Ultimate",
      price: "199rb",
      info: "Great for Individual Person",
      min:"*minimal 6 Bulan",
      link:"https://wa.me/628113651127/?text=Hi%20min%2C%20aku%20mau%20konsultasi%20mengenai%20layanan%20%23umkmbisa%20dengan%20paket%20Ultimate.",

      features: [
        { text: "website", nt:"Pro" },
        { text: "Social Media", nt:"Pro" },
        { text: "seo google", nt:"Pro" },
        { text: "Saldo Ads",nt:"500Rb" },
        { text: "konten dan video",nt:"Pro"},
        { text: "Influencer",nt:"3-10 Influencer" },
        { text: "Refund 100%", nt:"Include" },
        { text: "Akses Whatsapp #UMKMBisa",nt:"Pro" },
      ],

    },
    // ... Add other monthly plans here
  ],
  yearly: [
    {
      id: 1,
      name: "Paket Basic",
      price: "299rb",
      info: "Great for Individual Person",
      min:"*Lifetime",
      link:"https://wa.me/628113651127/?text=Hi%20min%2C%20aku%20mau%20konsultasi%20mengenai%20layanan%20%23umkmbisa%20dengan%20paket%20Basic.",
      features: [
        { text: "website", nt:"Basic" },
        { text: "Social Media", nt:"Basic" },
        { text: "seo google", nt:"Basic" },
        { text: "Saldo Ads",nt:"300Rb" },
        { text: "konten dan video",nt:"Not include"},
        { text: "Influencer",nt:"Not include" },
        { text: "Refund 100%", nt:"Include" },
        { text: "Akses Whatsapp #UMKMBisa", nt:"Basic" },
      ],

    },
    {
      id: 2,
      name: "Paket Pro",
      price: "1.1jt",
      info: "Great for Individual Person",
      min:"*minimal 3 Bulan",
      link:"https://wa.me/628113651127/?text=Halo%20Min.%20Saya%20ingin%20berkonsultasi%20mengenai%20layanan%20%23umkmbisa%20dengan%20paket%20Pro.",

      features: [
        { text: "website", nt:"Pro" },
        { text: "Social Media", nt:"Pro" },
        { text: "seo google", nt:"Pro" },
        { text: "Saldo Ads",nt:"700rb" },
        { text: "konten dan video",nt:"Pro"},
        { text: "Influencer",nt:"1-3 Influencer" },
        { text: "Refund 100%", nt:"Include" },
        { text: "Akses Whatsapp #UMKMBisa",nt:"Pro" },
      ],

    },
    {
      id: 3,
      name: "Paket Ultimate",
      price: "2.2jt",
      info: "Great for Individual Person",
      min:"*minimal 6 Bulan",
      link:"https://wa.me/628113651127/?text=Halo%20Min.%20Saya%20ingin%20berkonsultasi%20mengenai%20layanan%20%23umkmbisa%20dengan%20paket%20Ultimate.",

      features: [
        { text: "website", nt:"Pro" },
        { text: "Social Media", nt:"Pro" },
        { text: "seo google", nt:"Pro" },
        { text: "Saldo Ads",nt:"1.2jt" },
        { text: "konten dan video",nt:"Pro"},
        { text: "Influencer",nt:"3-10 Influencer" },
        { text: "Refund 100%", nt:"Include" },
        { text: "Akses Whatsapp #UMKMBisa",nt:"Pro" },
      ],

    },
  ],
};

const Pricing2 = () => {
  const renderPlan = (plan) => (
    <div key={plan.id} className="col-md-4 pr-column sm-mb-20">
      <div className="pr-header text-white">
        <div className="plan">{plan.name}</div>
        <div className="price text-white">{plan.price}</div>
        <div className="info">{plan.info}</div>
      </div>{" "}
      {/* /.pr-header */}
      <div className="pr-body ">
        <ul className="style-none">
          {plan.features.map((feature, index) => (
            <li key={index}>
              <span className="pr-text d-block d-lg-none mb-5">
                {feature.text}
              </span>
              
              <span>{feature.nt}</span>
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
      <ul
        className="nav nav-tabs justify-content-center border-0 pricing-nav-one"
        role="tablist"
        data-aos="fade-up"
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
        {/* End monthly */}

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
        {/* End monthly */}
      </ul>
      <div
        className="pricing-table-area-one mt-110 lg-mt-60 pe-xxl-4 ps-xxl-4"
        data-aos="fade-up"
      >
        <div className="tab-content">
          <div className="tab-pane show active" id="month">
            <div className="row gx-0 position-relative">
              <div className="col-lg-3 pr-list-wrapper d-none d-lg-block position-relative">
                <ul className="style-none">
                <li>website</li>
<li>Social Media</li>
<li>seo google</li>
<li>Saldo Ads</li>
<li>konten dan video</li>
<li>Influencer</li>
<li>Refund 100%</li>
<li>Akses WA UMKMBisa</li>
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

          <div className="tab-pane" id="year">
            <div className="row gx-0 position-relative">
              <div className="col-lg-3 pr-list-wrapper d-none d-lg-block position-relative">
                <ul className="style-none">
                <li>website</li>
<li>Social Media</li>
<li>seo google</li>
<li>Saldo Ads</li>
<li>konten dan video</li>
<li>Influencer</li>
<li>Refund 100%</li>
<li>Akses WA UMKMBisa</li>
                </ul>
              </div>
              <div className="col-lg-9 pr-table-wrapper ml-auto">
                <div className="row gx-0">
                  {pricingPlans.yearly.map(renderPlan)}
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
