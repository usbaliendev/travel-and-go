import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=Berlim,Madrid,Londres"
  );

  return (
    <div className="featured">
      {loading ? (
        "Pesquisando por favor aguarde..."
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://cdn.getyourguide.com/img/location/6f156967bc6d6563.jpeg/99.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Berlim</h1>
              <h2>{data[0]} propriedades</h2>
              {console.log(data)}
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://www.travelandleisure.com/thmb/bm51vTBcyGJ840aDyLWaIOLqrgQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/madrid-spain-MADRIDTG0621-b2347a98186a4281a0874992b213ade0.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Madrid</h1>
              <h2>{data[1]} propriedades</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://www.telegraph.co.uk/content/dam/Travel/2018/October/london%20-iStock-637710736.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Londres</h1>
              <h2>{data[2]} propriedades</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
