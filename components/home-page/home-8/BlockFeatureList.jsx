const BlockFeatureList = () => {
  const featureList = [
    {
      title: "Konsultasikan bisnismu secara Gratis",
    },
    {
      title: "Menangani semua kebutuhan digital bisnismu",
    },
    {
      title: "Prioritas kami bukan harga, tapi Hasil dan Kepercayaan",
    },
  ];

  return (
    <div className="block-style-three ps-xxl-5" data-aos="fade-left">
      <div className="title-style-nine">
        <div className="sc-title">Cara Kerja Famous</div>
        <h2 className="main-title text-white">
          Konsultasi bisnis <span>Gratis</span> khusus UMKM
        </h2>
      </div>
      <p className="text-lg text-white opacity-75 pt-20 pb-30 lg-pb-20">
       #UMKMBisa adalah salah satu pelopor Konsultan Digital Marketing Agency di indonesia yang menjadi prioritas Generasi Digital Kreatif Indonesia. 
      </p>
      <ul className="style-none list-item fs-18 text-white opacity-75">
        {featureList.map((feature, index) => (
          <li key={index}>{feature.title}</li>
        ))}
      </ul>
      <a href="#" className="btn-sixteen fw-500 border7 tran3s mt-45">
        Konsultasi sekarang
      </a>
    </div>
  );
};

export default BlockFeatureList;
