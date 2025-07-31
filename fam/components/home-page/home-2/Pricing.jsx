import { useState } from "react";

const plans = [
  {
    id: 1,
    name: "Landing Page",
    details: "Personal",
    price: "500rb",
    billing: "1x Revisi",
    limit: "Proses 1-3 hari",
    btnClass: "trial-button",
    features: [
      "1 Menu",
      "Page one Google Search",
      "template premium",
      "SEO",
      "Responsive Mobile",
      "Free Domain 1 tahun",
      "Free Hosting 1 tahun",
      "Premium Template",

    ],
    bgColor: "#FFF7EB",
    animDelay: "0",
  },
  {
    id: 3,
    name: "Wordpress",
    details: "Bisnis atau Personal",
    price: "799rb",
    billing: "2x Revisi",
    limit: "Proses 1-2 Minggu",
    btnClass: "trial-button",
    features: [
      "2x Zoom tutorial",
      "Page one Google Search",
      "template premium",
      "SEO",
      "Responsive Mobile",
      "Free Domain 1 tahun",
      "Free Hosting 1 tahun",
      "Premium Template",
    ],
    bgColor: "#FFEBEB",
    animDelay: "200",
  },
  {
    id: 2,
    name: "Company Profile",
    details: "Bisnis atau Agen",
    price: "899rb",
    billing: "3x Revisi",
    limit: "Proses 2-3 Minggu",
    btnClass: "btn-fourteen fw-500 tran3s w-100",
    features: [
      "5 Menu",
      "Page one Google Search",
      "template premium",
      "SEO",
      "Responsive Mobile",
      "Free Domain 1 tahun",
      "Free Hosting 1 tahun",
      "Premium Template",
    ],
    bgColor: "#E2F2FD",
    animDelay: "100",
  },
  
  // {
  //   id: 4,
  //   name: "Bussines",
  //   details: "Bisnis maupun Online Shop",
  //   price: "Hubungi kami",
  //   billing: "",
  //   limit: "",
  //   btnClass: "trial-button",
  //   features: [

  //     "Unlimited",
  //   ],
  //   bgColor: "#E4F4F1",
  //   animDelay: "300",
  // },
];

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState(2);
  return (
    <>
      {plans.map((plan) => (
        <div
          className="col-xl-4 col-sm-6"
          key={plan.id}
          data-aos="fade-up"
          data-aos-delay={plan.animDelay}
        >
          <div
            className={`pr-table-wrapper mt-40 ${
              plan.id === selectedPlan ? "active" : ""
            }`}
          >
            <div className="pack-name fw-500 tx-dark">{plan.name}</div>
            <div className="pack-details text-uppercase fs-14">
              {plan.details}
            </div>
            <div
              className="top-banner align-items-center justify-content-center d-md-flex"
              style={{ background: plan.bgColor, }}
            >
              <div className="price fw-500">
                <sup></sup>
                {plan.price}
              </div>
              <div>
                <span>{plan.billing}</span>
                <em className="d-block">{plan.limit}</em>
              </div>
              
            </div>
            {/* /.top-banner */}
            <ul className="pr-feature style-none">
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <a href="#" className={plan.btnClass}>
            buat sekarang
            </a>
            <div className="trial-text pt-25 tx-dark">
              Garansi kembali 100%
            </div>
          </div>
          {/* /.pr-table-wrapper */}
        </div>
      ))}
    </>
  );
};

export default Pricing;
