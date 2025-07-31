const Form = () => {
  const sendWhatsappMessage = (number, message) => {
    try {
      // Membuat tautan WhatsApp dengan nomor dan pesan tertentu
      const whatsappLink = `https://api.whatsapp.com/send?phone=${encodeURIComponent(number)}&text=${encodeURIComponent(message)}`;
  
      // Membuka tautan WhatsApp di jendela baru
      window.open(whatsappLink, '_blank');
  
    } catch (error) {
      console.error('Terjadi kesalahan:', error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
      // Mendapatkan nilai input dari formulir
      const name = event.target.name.value;
      const email = event.target.email.value;
      const message = event.target.message.value;

      // Menyiapkan pesan WhatsApp dengan data yang diambil
      const whatsappMessage = `Halo, saya ${name} (${email}).%0pertanyaan: ${message}`;

      // Mengirim pesan ke WhatsApp (simulasi, sesuaikan dengan kebutuhan Anda)

      sendWhatsappMessage('+628113651127', whatsappMessage);

      // Reset formulir setelah mengirim pesan
      event.target.reset();  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="messages" />
      <div className="row controls">
        <div className="col-12">
          <div className="input-group-meta form-group mb-20">
            <input
              type="text"
              placeholder="Nama*"
              name="name"
              required="required"
              data-error="Name is required."
            />
            <div className="help-block with-errors" />
          </div>
        </div>
        {/* End .col-12 */}

        <div className="col-12">
          <div className="input-group-meta form-group mb-20">
            <input
              type="email"
              placeholder="Email*"
              name="email"
              required="required"
              data-error="Valid email is required."
            />
            <div className="help-block with-errors" />
          </div>
        </div>
        {/* End .col-12 */}

        <div className="col-12">
          <div className="input-group-meta form-group mb-15">
            <textarea
              placeholder="Tulis pesan disini*"
              name="message"
              required="required"
              data-error="Please,leave us a message."
              defaultValue={""}
            />
            <div className="help-block with-errors" />
          </div>
        </div>
        {/* End .col-12 */}

        <div className="col-12">
          <button
            type="submit"
            className="btn-thirteen w-100 fw-500 tran3s text-uppercase"
          >
            SEND MESSAGE
          </button>
        </div>
        {/* End .col-12 */}
      </div>
      {/* End .row */}

      <div className="fs-16 text-center mt-25">
        <span className="opacity-75">Been here before? </span>
        <a href="#" className="tx-dark fw-500">
          Check your query
        </a>
      </div>
    </form>
  );
};

export default Form;
