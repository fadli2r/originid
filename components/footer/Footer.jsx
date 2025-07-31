import React from "react";

const Footer = () => {
  const links = [
    {
      id: 1,
      title: "Services",
      column: "col-lg-3 col-md-4 col-sm-6 mb-30",
      links: [
        { label: "UMKM", href: "/" },
        { label: "Digital Agency", href: "/services/digital-marketing" },
        { label: "SMM", href: "/services/smm" },
        { label: "Design Video", href: "/services/design" },
        { label: "Web Development", href: "/services/web-dev" },
        { label: "Kol & Influencer", href: "#" },
      ],
    },
    {
      id: 2,
      title: "Support",
      column: "col-lg-2 col-md-3 col-sm-6 mb-30",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Our Team", href: "/team" },
        { label: "Jobs", href: "#" },
        { label: "Patners", href: "#" },
        { label: "Terms & conditions", href: "/faq" },
        { label: "Privacy policy", href: "/faq" },
      ],
    },
    
  ];

  const socialIcons = [
    {
      iconClass: "fab fa-facebook-f",
      link: "#",
    },
    {
      iconClass: "fab fa-twitter",
      link: "#",
    },
    {
      iconClass: "fab fa-linkedin-in",
      link: "#",
    },
  ];

  return (
    <>
      {links.map((link) => (
        <div className={link.column} key={link.id}>
          <h5 className="footer-title text-white fw-500">{link.title}</h5>
          <ul className="footer-nav-link style-none">
            {link.items.map((item, i) => (
              <li key={i}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div className="col-xl-3 col-lg-4 col-md-5 mb-30">
        <h5 className="footer-title text-white fw-500">Address</h5>
        <p className="text-white opacity-75 mb-35">
          2190 Zinai terrace, Lake view <br />
          house state, 10 no road.
        </p>
        <ul className="d-flex social-icon style-none">
          {socialIcons.map((icon, index) => (
            <li key={index}>
              <a href={icon.link} target="_blank" rel="noopener noreferrer">
                <i className={icon.iconClass} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Footer;
