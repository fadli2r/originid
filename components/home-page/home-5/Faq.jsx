const accordionData = [
  {
    question: "Apa keuntungan membuat website di Originfamous?",
    answer:
      "kami memiliki revisi dan garansi uang kembali jika website Anda tidak sesuai dengan rencana di awal",
  },
  {
    question: "Apa saja yang harus disiapkan untuk membuat website?",
    answer:
      "Siapkan informasi tentang bisnis atau proyek Anda, termasuk tujuan, target audiens, dan preferensi desain. Persiapkan juga materi seperti logo, teks, dan gambar.",
  },
  {
    question: "Apakah saya mendapatkan akses untuk websitenya?",
    answer:
      "Kami akan memberikan semua akses pada website Anda, Anda juga bisa merubah isi website sendiri.",
  },
  {
    question: "Berapa lama proses untuk membuat website di Famous?",
    answer:
      "Proses pembuatan website di Kami tergantung kompleksitas desain dan perencanaan,perkiraan 1-2 minggu sudah selesai.",
  },
  
];

const Faq = () => {
  return (
    <div className="accordion accordion-style-seven md-mt-60" id="accordionOne">
      {accordionData.map((item, index) => (
        <div className="accordion-item" key={index}>
          <div className="accordion-header" id={"heading" + index}>
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={"#collapse" + index}
              aria-expanded={index === 1 ? "true" : "false"}
              aria-controls={"collapse" + index}
            >
              {item.question}
            </button>
          </div>
          <div
            id={"collapse" + index}
            className={`accordion-collapse collapse${
              index === 1 ? " show" : ""
            }`}
            aria-labelledby={"heading" + index}
            data-bs-parent="#accordionOne"
          >
            <div className="accordion-body">
              <p>{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
