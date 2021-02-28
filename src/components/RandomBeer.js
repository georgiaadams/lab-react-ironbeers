import React, { Component } from 'react';
import Header from './Header/Header';
import axios from 'axios';

class RandomBeer extends Component {
  state = {
    randomBeer: [],
  };

  getBeersData = () => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then((response) => {
        const data = response.data;
        this.setState({ randomBeer: data });
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.getBeersData();
  }
  render() {
    const { randomBeer } = this.state;
    return (
      <div>
        <Header />
        <div>
          <img
            width="100px"
            style={{ marginTop: '50px' }}
            src={randomBeer.image_url}
            alt="randomBeer"
          />
          <h2>{randomBeer.name}</h2>
          <h3>{randomBeer.attenuation_level}</h3>
          <h3>{randomBeer.first_brewed}</h3>
          <h3>{randomBeer.tagline}</h3>
          <p>{randomBeer.description}</p>
          <p>{randomBeer.contributed_by}</p>
        </div>
      </div>
    );
  }
}
export default RandomBeer;
