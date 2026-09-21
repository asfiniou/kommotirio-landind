function Testimonials() {
  const reviews = [
    {
      text: "Πολύ ωραία εξυπηρέτηση, το ραντεβού κλείστηκε άμεσα.",
      name: "Μαρία Κ.",
    },
    { text: "Καθαρή σελίδα, βρήκα αμέσως ό,τι χρειαζόμουν.", name: "Ελένη Π." },
  ];
  return (
    <section className="testimonials">
      <h2>Τι λένε οι πελάτες μας</h2>
      <div className="testimonials-grid">
        {reviews.map((r) => (
          <div className="testimonials-card" key={r.name}>
            <p>{r.text}</p>
            <span>{r.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Testimonials;
