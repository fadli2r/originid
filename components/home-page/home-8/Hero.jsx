import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";

const Hero = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="Vsq1_kewchQ"
        onClose={() => setOpen(false)}
      />

      <h1 className="hero-heading fw-500 text-white mb-45">
        Konsultan Digital Marketing <span>Khusus</span> #UMKM Indonesia.
      </h1>
      <p className="text-lg text-white opacity-75 mb-65 lg-mb-50 pe-lg-5">
        OriginFamous merupakan pelopor Digital Marketing Agency di Indonesia.
      </p>

      <div className="d-sm-flex align-items-center">
        <div
          onClick={() => setOpen(true)}
          role="button"
          className="fancybox video-icon tran3s mb-25 d-flex align-items-center order-sm-last"
        >
         
          
        </div>
        {/* End popup video */}

        <Link
          href="#"
          className="btn-sixteen fw-500 tran3s mb-25 me-4 order-sm-first"
        >
          Tentang kami
        </Link>
      </div>
      <p className="fs-20 opacity-50 text-white">
      5 tahun pengalaman di dunia digital dan iklan online. Prioritas membantu UMKM menuju Digitalisasi.
      </p>
    </>
  );
};

export default Hero;
