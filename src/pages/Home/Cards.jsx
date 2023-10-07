const Cards = ({ card }) => {
  const {title,img,short_description,price} = card;
  console.log(card);
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
        <figure>
          <img className="h-40 w-96"
            src={img}
            
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{short_description}</p>
          <p>Price : <span>{price}</span></p>
          <div className="card-actions">
            <button className="btn btn-primary w-full">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
