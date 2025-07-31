import Link from "next/link";
import {
  menuItems,
  pagesItems,
  portfolioItems,
  blogItems,
} from "../../data/menu";

import { useRouter } from "next/router";


const MainMenu = () => {
  const router = useRouter();


  

  const isActive = (link) => {
    return router.pathname.replace('/[id]', '') === link.replace(/\/\d+$/, '');
  };


  return (
    <nav className="navbar navbar-expand-lg order-lg-2">
      <button
        className="navbar-toggler d-block d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span />
      </button>
      {/* End mobile collapse menu */}

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="d-block d-lg-none">
            <div className="logo">
              <Link href="/" className="d-block">
                <img src="/images/logo/famous.png" alt="" width={150} />
              </Link>
            </div>
          </li>
          {/* End li */}
          <li
            className={
              router.pathname === "/digital-marketing" ? "active nav-item" : "nav-item"
            }
          >
            <Link href="/services/digital-marketing" role="button" className="nav-link">
              Digital Marketing
            </Link>
          </li>
          <li
            className={
              router.pathname === "/design" ? "active nav-item" : "nav-item"
            }
          >
            <Link href="/services/design" role="button" className="nav-link">
              Design
            </Link>
          </li>
          <li
            className={
              router.pathname === "/smm" ? "active nav-item" : "nav-item"
            }
          >
            <Link href="/services/smm" role="button" className="nav-link">
              SMM
            </Link>
          </li>
          <li
            className={
              router.pathname === "/web-dev" ? "active nav-item" : "nav-item"
            }
          >
            <Link href="/services/web-dev" role="button" className="nav-link">
              Web Development
            </Link>
          </li>

          <li
            className={
              router.pathname === "/services/buzzer" ? "active nav-item" : "nav-item"
            }
          >
            <Link href="/services/buzzer" role="button" className="nav-link">
              Buzzer
            </Link>
          </li>
          {/* End li (contact) */}
        </ul>
        {/* End ul */}

        {/* Mobile Content */}
        <div className="mobile-content d-block d-lg-none">
          <div className="d-flex flex-column align-items-center justify-content-center mt-70">
            <Link href="/contact" className="btn-twentyOne fw-500 tran3s">
              Contact us
            </Link>
          </div>
        </div>
        {/* /.mobile-content */}
      </div>
    </nav>
  );
};

export default MainMenu;
