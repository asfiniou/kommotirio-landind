function Gallery() {
  const image = [1, 2, 3, 4];

  return (
    <section className="gallery" id="gallery">
      <h2>Gallery</h2>
      <div className="gallery-grid">
        {image.map((n) => (
          <div className="gallery-item" key={n}></div>
        ))}
      </div>
    </section>
  );
}
export default Gallery;
