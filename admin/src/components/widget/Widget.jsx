import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import HotelIcon from '@mui/icons-material/Hotel';

const Widget = ({ type }) => {
  let data;

  //temporary
  const amount = 20;
  const diff = 5;

  switch (type) {
    case "user":
      data = {
        title: "Usuários",
        isMoney: false,
        link: "Ver usuários",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "hoteis":
      data = {
        title: "Hotéis",
        isMoney: false,
        link: "Ver hotéis",
        icon: (
          <MapsHomeWorkIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "quartos":
      data = {
        title: "Quartos",
        isMoney: false,
        link: "Ver quartos",
        icon: (
          <HotelIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"} {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
