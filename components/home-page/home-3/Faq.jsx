import React from "react";

const faqData = [
  {
    id: 1,
    question: "Harga murah hasil maksimal ",
    answer:
      "Visi kami adalah membangun branding dengan maksimal dan bisa digunakan untuk meningkatkan bisnis Anda.",
  },
  {
    id: 2,
    question: "Proses cepat",
    answer:
      "Proses pembuatan desain di Famous maksimal hanya 1 minggu, lebih dari itu desain Gratis buat Anda",
  },
  {
    id: 3,
    question: "Bebas Plagiarism",
    answer:
      "Desain yang kami buat tidak mengambil dari luar dan dikerjakan oleh Desainer Terverifikasi",
  },
];

const Faq = () => {
  return (
    <div className="accordion accordion-style-six" id="accordionOne">
      {faqData.map((item, index) => (
        <div className="accordion-item" key={item.id}>
          <div className="accordion-header" id={`heading${item.id}`}>
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${item.id}`}
              aria-expanded={index === 0 ? "true" : "false"}
              aria-controls={`collapse${item.id}`}
            >
              {item.question}
            </button>
          </div>
          <div
            id={`collapse${item.id}`}
            className={`accordion-collapse collapse${
              index === 0 ? " show" : ""
            }`}
            aria-labelledby={`heading${item.id}`}
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
