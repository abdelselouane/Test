function Card({ title, price, image, description }) {
  return (
    <>
      <div className="card">
        <img
          src={`${process.env.PUBLIC_URL}/assets/img/${image}`}
          alt={title}
          width="100%"
          height="200"
        />
        <h5>
          {title} <span>${price}</span>
        </h5>
        <p>{description}</p>
        <a href="/">Order a delivery</a>
      </div>
    </>
  );
}
export default Card;
