import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import './BeersList.css';

function Beerslist(props) {
  const { beers } = props;
  return (
    <div>
      <Header />
      <h1>All Beers</h1>
      {beers.map((beer) => {
        return (
          <div className="oneBeer" key={beer._id}>
            <div className="image">
              <img width="30px" src={beer.image_url} alt="singleBeer" />
            </div>
            <div className="beerDetails">
              <Link to={`/beers/single/${beer._id}`}>
                <h2>{beer.name}</h2>
              </Link>
              <h3>{beer.tagline}</h3>
              <p>{beer.contributed_by}</p>
              <hr />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Beerslist;
