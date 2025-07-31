const FaqAccordion = () => {
  const accordionItems = [
    {
      id: "faq-1",
      question: "Berapa lama proses pembuatan desain  di Famous?",
      answer:
        "Durasi pengerjaan paling cepat 2 Hari, tergantung dari berbagai faktor yang mengakibatkan durasinya lebih lama. seperti layanan yang dipilih dan kami memprioritaskan hasil, bukan kecepatan",
    },
    {
      id: "faq-2",
      question: "Apa saja yang dibutuhkan untuk desain disini",
      answer:
        "Kebutuhan yang terpenting adalah deskripsi dari bisnis, target pasar, serta bisa digunakan dimana saja. ",
    },
    {
      id: "faq-3",
      question: "Kenapa harus order Desain di Famous?",
      answer:
        "Kami memiliki layanan desain berbagai macam, Kami juga selalu memberikan hasil yang terbaik melalui riset dan di kerjakan oleh team profesional.",
    },
    {
      id: "faq-4",
      question: "Apa desainnya bisa dicetak",
      answer:
        "File desain yang kami berikan sudah diatas standart untuk cetak, dan desain yang kami buat juga memiliki guidline dari warna dan makna.",
    },
    {
      id: "faq-5",
      question: "Apakah desain yang dibuat aman dari plagiat?",
      answer:
        "Seluruh komponen yang kami pakai untuk layanan desain sudah terverifikasi dan dibuat sendiri oleh team kami. jadi 100% aman dari plagiat dan kesamaan dengan desain milik orang lain.",
    },
    
  ];

  return (
    <div className="accordion accordion-style-four" id="accordionOne">
      {accordionItems.map((item, index) => (
        <div className="accordion-item" key={item.id}>
          <div className="accordion-header" id={`heading-${index}`}>
            <button
              className={`accordion-button ${index === 2 ? "" : "collapsed"}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse-${index}`}
              aria-expanded={index === 2 ? "true" : "false"}
              aria-controls={`collapse-${index}`}
            >
              <span>{`0${index + 1}.`}</span> {item.question}
            </button>
          </div>
          <div
            id={`collapse-${index}`}
            className={`accordion-collapse collapse ${
              index === 2 ? "show" : ""
            }`}
            aria-labelledby={`heading-${index}`}
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

export default FaqAccordion;
