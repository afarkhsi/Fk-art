import './style.css';
const Cards = ({ img, title, categorie }) => {
  return (
    <div className="box card-container flex-column">
      <img src={img} className="card-img-top card-container_img" alt={title} />
      <div className="card-body card-container_content">
        <h5 className="card-title card-container_content_title">{title}</h5>
        <ul className="list-group list-group-flush card-container_categories">
          <li className="list-group-item card-container_categories_item">
            {categorie}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Cards;
