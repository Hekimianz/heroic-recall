import { useRef, useState } from "react";
function Card({ id, name, image, handleCardClick }) {
  const [isLoading, setIsLoading] = useState(true);
  const imgRef = useRef(null);
  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <section className="card--cont" onClick={() => handleCardClick(id)}>
      {isLoading && <span className="imgLoader"></span>}
      <img
        src={image}
        alt="hero image"
        className="card--image"
        onLoad={handleImageLoad}
        ref={imgRef}
      />
      <h2 className="card--name">{name}</h2>
    </section>
  );
}

export default Card;
