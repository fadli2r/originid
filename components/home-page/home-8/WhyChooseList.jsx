const reasons = [
  {
    title: "tidak perlu ikut mikirin digital marketing, cukup terima beres",
  },
  {
    title: "Mendapatkan pelatihan khusus untuk meningkatkan branding digital",
  },
  {
    title: "Mendapatkan analisa dan laporan setiap bulannya",
  },
  {
    title: "Anda bisa fokus pada aspek bisnis lainnya yang lebih strategis.",
  },
  {
    title: "Meningkatkan brand awareness dan juga engagement.",
  },
  {
    title: "Penjualan dan omzet semakin meningkat.",
  },
  {
    title: "Tidak perlu bingung mikirin desain dan riset konten.",
  },
  {
    title: "Konten lebih autentik, kreatif, dan relevan dengan bisnis Anda.",
  },
];

const WhyChooseList = () => {
  return (
    <div className="block-style-five pe-xl-5 me-xxl-5" data-aos="fade-right">
      <div className="title-style-nine pb-20">
        <div className="sc-title">Kenapa Origin Famous?</div>
        <h2 className="main-title text-white">
          Alasan <span>memilih</span> Famous untuk digitalisasi bisnis kamu.
        </h2>
      </div>
      {/* /.title-style-nine */}
      
      <ul className="style-none list-item d-flex flex-row flex-wrap">
        {reasons.map((reason) => (
          <li  key={reason.title} className="list-group-item col-12 col-md-12 col-lg-6  ">{reason.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default WhyChooseList;
