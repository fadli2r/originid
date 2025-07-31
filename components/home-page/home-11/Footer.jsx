import Link from "next/link";

const Footer = () => {
  const footerItems = [
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
      className: "col-lg-2 col-md-3 col-sm-6 mb-30",
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
      className: "col-lg-2 col-md-3 col-sm-6 mb-30",
    },
    
  ];

  return (
    <>
      {footerItems.map((item, index) => (
        <div key={index} className={item.className}>
          <h5 className="footer-title tx-dark fw-normal">{item.title}</h5>
          <ul className="footer-nav-link style-none">
            {item.links.map((link, i) => (
              <li key={i}>
                <Link href={link.url}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default Footer;
