const Faq = () => {
  const accordionItems = [
    {
      id: "faq-1",
      question: "Followers dan Penjualan auto naik",
      },
    {
      id: "faq-2",
      question: "Tidak perlu mikirin konten dan algoritma social media",
      },
    {
      id: "faq-3",
      question: "Tanpa perlu mikir marketing, cukup Fokus ke bisnis",
      },
    {
      id: "faq-4",
      question: "Meningkatkan Branding",
      },
      {
        id: "faq-5",
        question: "Gak perlu hire admin social media",
        },
        
  ];

  return (
    <div className="accordion accordion-style-four" id="accordionOne">
      {accordionItems.map((item, index) => (
        <div className="accordion-item" key={item.id}>
          <div className="accordion-header" id={`heading-${index}`}>
            <div
              className={`accordion-button ${ "collapsed"}`}              
            >
              <span>{`0${index + 1}.`}</span> {item.question}
            </div>
          </div>
          
        </div>
      ))}
    </div>
  );
};

export default Faq;
