function ContactFooter() {
  return (
    <section className="contact-footer" id="contact">
      <div className="contact-form">
        <h2>Επικοινωνία</h2>
        <input type="text" placeholder="Όνομα" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Μήνυμα" rows="3">
          {" "}
        </textarea>
        <button className="cta-button">Αποστολή</button>
      </div>
      <div className="footer-info">
        <p>Καβάλα, Ελλάδα</p>
        <p>210 000 0000</p>
      </div>
    </section>
  );
}
export default ContactFooter;
