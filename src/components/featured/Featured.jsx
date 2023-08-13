import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <li>
        Get rewarded for your travels – unlock instant savings of 10% or more
        with a free Lamabooking account
      </li>
      <h6>
        Get rewarded for your travels – unlock instant savings of 10% or more
        with a free Lamabooking account
      </h6>

      <div className="featuredItem">
        <img
          src="https://thumbs.dreamstime.com/b/white-intercity-bus-rides-highway-271969260.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Bus</h1>
          <h2>+ 123</h2>
          <button className="btnDetails">see the details...</button>
        </div>
      </div>
      <h6>
        Get rewarded for your travels – unlock instant savings of 10% or more
        with a free Lamabooking account
      </h6>

      <div className="featuredItem">
        <img
          src="https://images.pexels.com/photos/2275288/pexels-photo-2275288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Metro</h1>
          <h2>+ 533</h2>
          <button className="btnDetails">see the details</button>
        </div>
      </div>
      <h6>
        Get rewarded for your travels – unlock instant savings of 10% or more
        with a free Lamabooking account
      </h6>

      <div className="featuredItem">
        <img
          src="https://images.pexels.com/photos/2790396/pexels-photo-2790396.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Train</h1>
          <h2>+ 532</h2>
          <button className="btnDetails">see the details...</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
