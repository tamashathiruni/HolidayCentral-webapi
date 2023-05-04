function SearchHotel() {
  return (
    <div className="serchitem">
      <img
        src="https://edenvillas.com/wp-content/uploads/2019/05/053EVINSLPOINTESUD.jpg"
        className="searchimg"
        alt="Edenvillas.img"
      />

      <div className="searchdes">
        <h1 className="searchtitle">Tower Street Apartments</h1>
        <span className="searchdistance">Beach nearby</span>
        <span className="searchtaxi">Limited-time Deal</span>
        <span className="searchsubtitle">
          Double Room with Private Bathroom
        </span>
        <span className="searchmoredetail">1 extra-large double bed</span>
        <span className="searchcancel">Free cancellation </span>
        <span className="searchcanceldes">
          You can cancel later, so lock in this great price today!
        </span>
      </div>

      <div className="searchdetails">
        <div className="searchrating">
          <span>Excellent</span>
          <button>7.9</button>
        </div>
        <div className="siDetaillTexts">
          <span className="searchprice">$165</span>
          <span className="searchtaxefee">Include taxes and fees</span>
          <button className="searchcheckbtn">See Availability</button>
        </div>
      </div>
    </div>
  );
}

export default SearchHotel;
