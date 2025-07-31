import Link from "next/link";
import { useState } from "react";

const footerLinks = [
  {
    title: "Service",
    links: [
      { label: "UMKM", href: "/" },
      { label: "Digital Agency", href: "/services/digital-marketing" },
      { label: "SMM", href: "/services/smm" },
      { label: "Design Video", href: "/services/design" },
      { label: "Web Development", href: "/services/web-dev" },
      { label: "Kol & Influencer", href: "/services/buzzer" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Team", href: "/team" },
      { label: "Jobs", href: "/jobs" },
      { label: "Patners", href: "/patners" },
      { label: "Terms & conditions", href: "/faq" },
      { label: "Privacy policy", href: "/faq" },
    ],
  },
  
];

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  return (
    <>
      <div className="col-lg-4 form-widget mb-30">
        <div className="logo">
          <Link href="/">
            <img src="/images/logo/famous-2.png" alt="" width={150} />
          </Link>
        </div>
        
        <div className="fs-14 mt-10 text-white opacity-50">
          <h6 className="text-white">Consultant Digital & Marketing Agency</h6>
        </div>
      </div>
      {/* End .col */}
      {footerLinks.map((section) => (
        <div className="col-lg-2 col-sm-4 ms-auto mb-30" key={section.title}>
          <h5 className="footer-title text-white fw-500">{section.title}</h5>
          <ul className="footer-nav-link style-none">
            {section.links.map((link) => (
              <li key={link.label}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default Footer;
