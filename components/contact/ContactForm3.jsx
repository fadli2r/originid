import React from "react";

const ContactForm3 = () => {
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
      <div className="input-bg-group position-relative controls">
        <div className="d-block">
          <div className="input-group-meta form-group mb-50">
            <label className="d-block" htmlFor>
              Name*
            </label>
            <input
              type="text"
              placeholder="Bostmai Hasan"
              name="name"
              required="required"
            />
            <div className="help-block with-errors" />
          </div>
        </div>
        {/* End .d-block */}

        <div className="d-block">
          <div className="input-group-meta form-group mb-60">
            <label className="d-block" htmlFor>
              Email*
            </label>
            <input
              type="email"
              placeholder="demo@domain.com"
              name="email"
              required="required"
              data-error="Valid email is required."

            />
            <div className="help-block with-errors" />
          </div>
        </div>
        {/* End .d-block */}

        <div className="d-block">
          <div className="input-group-meta form-group">
            <textarea
              placeholder="Your message*"
              name="message"
              required="required"
              defaultValue={""}
            />
            <div className="help-block with-errors" />
          </div>
        </div>
        {/* End .d-block */}
      </div>
      {/* /.input-bg-group */}

      <button type="submit" className="btn-one fw-500 w-100 fs-18 d-block mt-45">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm3;
