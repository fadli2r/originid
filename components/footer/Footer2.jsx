const columns = [
  {
    title: "Service",
    links: [
      { label: "UMKM", url: "/" },
      { label: "Digital Agency", url: "/services/digital-marketing" },
      { label: "SMM", url: "/services/smm" },
      { label: "Design Video", url: "/services/design" },
      { label: "Web Development", url: "/services/web-dev" },
      { label: "Kol & Influencer", url: "/services/buzzer" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "About Us", url: "/about" },
      { label: "Our Team", url: "/team" },
      { label: "Jobs", url: "/jobs" },
      { label: "Patners", url: "/patners" },
      { label: "Terms & conditions", url: "/faq" },
      { label: "Privacy policy", url: "/faq" },
    ],
  },
  
];

const Footer2 = () => {
  return (
    <>
      {columns.map((column, index) => (
        <div className="col-xl-2 col-lg-3 col-sm-4 mb-30" key={index}>
          <h5 className="footer-title tx-dark fw-normal">{column.title}</h5>
          <ul className="footer-nav-link style-none">
            {column.links.map((link, index) => (
              <li key={index}>
                <a href={link.url}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default Footer2;
