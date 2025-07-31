const Faq = () => {
  const faqData = [
    {
      question: "Apa itu jasa web development dan design?",
      answer:
        "Jasa web development dan design adalah layanan profesional yang mencakup pengembangan dan perancangan situs web untuk memenuhi kebutuhan bisnis atau individu.",
    },
    {
      question: "Berapa lama proses untuk membuat website?      ",
      answer:
        "Proses pembuatan website di Kami tergantung kompleksitas desain dan perencanaan,perkiraan 1-2 minggu sudah selesai.",
    },
    {
      question: "What can I use to build my website?",
      answer:
        "Duis aute irure dolor in reprehenderit in voluptate velit ess dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupid non proident, sunt in culpa qui officia deserunt.",
    },
    {
      question:
        "If I already have a website, can I transfer it to your web hosting?",
      answer:
        "Duis aute irure dolor in reprehenderit in voluptate velit ess dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupid non proident, sunt in culpa qui officia deserunt.",
    },
    {
      question: "How can I accept credit cards online?",
      answer:
        "Duis aute irure dolor in reprehenderit in voluptate velit ess dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupid non proident, sunt in culpa qui officia deserunt.",
    },
    {
      question: "What are the additional requirements I should know about?",
      answer:
        "Duis aute irure dolor in reprehenderit in voluptate velit ess dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupid non proident, sunt in culpa qui officia deserunt.",
    },
  ];

  return (
    <div className="accordion accordion-style-two" id="accordionOne">
      {faqData.map((faq, index) => (
        <div className="accordion-item" key={index}>
          <div className="accordion-header" id={`heading${index}`}>
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${index}`}
              aria-expanded="false"
              aria-controls={`collapse${index}`}
            >
              {faq.question}
            </button>
          </div>
          <div
            id={`collapse${index}`}
            className="accordion-collapse collapse"
            aria-labelledby={`heading${index}`}
            data-bs-parent="#accordionOne"
          >
            <div className="accordion-body">
              <p>{faq.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
