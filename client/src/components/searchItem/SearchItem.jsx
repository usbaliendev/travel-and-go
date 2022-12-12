import { Link } from "react-router-dom";
import "./searchItem.css";

const SearchItem = ({ item }) => {
  return (
    <div className="searchItem">
      <img src={item.photos[0]} alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance">{item.distance} do centro</span>
        <span className="siTaxiOp">Transporte grátis ao aeroporto</span>
        {/* <span className="siSubtitle">
          Apartamento com ar condicionado
        </span> */}
        <span className="siFeatures">{item.desc}</span>
        <span className="siCancelOp">Cancelamento sem taxas</span>
        <span className="siCancelOpSubtitle">
          Você pode cancelar mais tarde, então reserve este preço hoje!
        </span>
      </div>
      <div className="siDetails">
        {item.rating && <div className="siRating">
          <span>Excelente</span>
          <button>{item.rating}</button>
        </div>}
        <div className="siDetailTexts">
          <span className="siPrice">R${item.cheapestPrice}</span>
          <span className="siTaxOp">Inclui impostos e taxas</span>
          <Link to={`/hotels/${item._id}`}>
            <button className="siCheckButton">Ver disponibilidade</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
