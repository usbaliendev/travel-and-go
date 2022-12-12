import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="fLists">
        <ul className="fList">
          <li className="fListItem">Países</li>
          {/* <li className="fListItem">Regiões</li> */}
          <li className="fListItem">Cidades</li>
          {/* <li className="fListItem">Distritos</li> */}
          {/* <li className="fListItem">Aeroportos</li> */}
          <li className="fListItem">Hotéis</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Casas</li>
          <li className="fListItem">Apartamentos</li>
          <li className="fListItem">Resorts </li>
          <li className="fListItem">Villas</li>
          <li className="fListItem">Albergues</li>
          <li className="fListItem">Casas de hóspedes</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Lugares únicos para ficar</li>
          <li className="fListItem">Opiniões</li>
          <li className="fListItem">Comunidades de viagens</li>
          <li className="fListItem">Ofertas sazonais e de férias</li>
        </ul>
        {/* <ul className="fList">
          <li className="fListItem">Aluguel de carros</li>
          <li className="fListItem">Localizador de voo</li>
          <li className="fListItem">Reservas de restaurantes</li>
          <li className="fListItem">Agentes de Viagens</li>
        </ul> */}
        <ul className="fList">
          <li className="fListItem">Serviços ao Cliente</li>
          <li className="fListItem">Ajuda de parceiros</li>
          <li className="fListItem">Termos e condições</li>
        </ul>
      </div>
      <div className="fText">Copyright © 2023 TravelandGo</div>
    </div>
  );
};

export default Footer;
