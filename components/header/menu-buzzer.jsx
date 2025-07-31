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
                <img src="/images/logo/famous-2.png" alt="" width={150} />
              </Link>
            </div>
          </li>
          {/* End li */}
          <li
            className={
              router.pathname === "/digital-marketing" ? "active nav-item" : "nav-item"
            }
          >
            <Link href="/home/digital-marketing" role="button" className="nav-link">
              Influencer
            </Link>
          </li>
          <li
            className={
              router.pathname === "/design" ? "active nav-item" : "nav-item"
            }
          >
            <Link href="/home/design" role="button" className="nav-link">
              Campaign
            </Link>
          </li>
          <li
            className={
              router.pathname === "/smm" ? "active nav-item" : "nav-item"
            }
          >
            <Link href="/home/smm" role="button" className="nav-link">
              Package
            </Link>
          </li>
          <li
            className={
              router.pathname === "/web-dev" ? "active nav-item" : "nav-item"
            }
          >
            <Link href="/home/web-dev" role="button" className="nav-link">
               
            </Link>
          </li>

          
          {/* End li (contact) */}
        </ul>
        {/* End ul */}

        {/* Mobile Content */}
        <div className="mobile-content d-block d-lg-none">
          <div className="d-flex flex-column align-items-center justify-content-center mt-70">
            <Link href="/contact" className="btn-twentyOne fw-500 tran3s">
              Join Influencer
            </Link>
          </div>
        </div>
        {/* /.mobile-content */}
      </div>
    </nav>
  );
};

export default MainMenu;
