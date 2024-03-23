import { Search } from 'lucide-react';

function SearchBlock() {
  return (
    <div className="searchBlock">
      <div className="searchInfo">
        <h4>
          Buy your
          <br /> dream plants
        </h4>
        <div className="miniInfo">
          <div className="miniInfo1">
            <h5>50+</h5>
            <p>Plant Species</p>
          </div>
          <div className="miniInfo2">
            <h5>100+</h5>
            <p>Customers</p>
          </div>
        </div>
      </div>
      <input type="text" className="searchInput" placeholder="What are you looking for?" />
      <button className="searchButton">
        <Search />
      </button>
      <img
        src={process.env.PUBLIC_URL + '/img/unsplash_cLaaxa4DSnc-removebg-preview 1.png'}
        alt="flower"
        className="flower"
      />
      <img
        src={process.env.PUBLIC_URL + '/img/Rectangle 2.png'}
        alt="rectangle"
        className="rectangle"
      />
      <img src={process.env.PUBLIC_URL + '/img/Vector 186.png'} alt="vector1" className="vector1" />
      <img src={process.env.PUBLIC_URL + '/img/Vector 187.png'} alt="vector2" className="vector2" />
    </div>
  );
}

export default SearchBlock;
