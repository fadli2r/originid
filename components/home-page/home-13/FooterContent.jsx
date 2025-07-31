import Link from "next/link";

const links = [
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

const FooterContent = () => {
  return (
    <>
      {links.map((link, index) => (
        <div key={index} className="col-lg-3 col-sm-4 mb-30">
          <h5 className="footer-title fw-normal">{link.title}</h5>
          <ul className="footer-nav-link style-none">
            {link.links.map((item, i) => (
              <li key={i}>
                <Link href={item.url}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default FooterContent;
