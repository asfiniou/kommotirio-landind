function Services() {
  const servises = [
    { title: "Κούρεμα", desc: "Κλασικό ή μοντέρνο, προσαρμοσμένο σε εσένα." },
    { title: "Βαφή", desc: "Φυσικά προϊόντα, μακράς διαρκείας αποτέλεσμα." },
    { title: "Περιποίηση", desc: "Θεραπείες αναδόμησης και ενυδάτωσης." },
  ];

  return (
    <section className="services" id="services">
      <h2>Υπηρεσίες</h2>
      <div className="services-grid">
        {servises.map((s) => (
          <div className="service-card" key={s.title}>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Services;
