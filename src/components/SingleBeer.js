import React from 'react';
import Header from './Header/Header';

function SingleBeer(props) {
  const { id } = props.match.params;

  const oneBeer = props.beersData.find((beer) => beer._id === id);

  return (
    <div>
      <Header />
      <div key={oneBeer._id}>
        <img width="30px" src={oneBeer.image_url} alt="singleBeer" />
        <h2>{oneBeer.name}</h2>
        <h3>{oneBeer.attenuation_level}</h3>
        <h3>{oneBeer.first_brewed}</h3>
        <h3>{oneBeer.tagline}</h3>
        <p>{oneBeer.description}</p>
        <p>{oneBeer.contributed_by}</p>
      </div>
    </div>
  );
}

export default SingleBeer;
