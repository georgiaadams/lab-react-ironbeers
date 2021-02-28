import React, { Component } from 'react';
import './App.css';
import Homepage from '../src/pages/Homepage/Homepage';
import { Route, Switch } from 'react-router-dom';
import BeersList from './components/BeersList/Beerslist';
import SingleBeer from './components/SingleBeer';
import RandomBeer from './components/RandomBeer';
import axios from 'axios';
import NewBeer from './pages/NewBeer';
import SearchBeer from './components/SearchBeer';

class App extends Component {
  state = {
    beers: [],
    originalBeers: [],
  };

  getBeersData = () => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) => {
        const data = response.data;
        this.setState({ beers: data, originalBeers: data });
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.getBeersData();
  }

  addNewBeer = (beer) => {
    const beersCopy = [beer, ...this.state.beers];
    this.setState({ beers: beersCopy });
  };

  filterBeers = (searchStr) => {
    const filteredBeers = this.state.originalBeers.filter((oneBeer) => {
      return oneBeer.name.toLowerCase().includes(searchStr.toLowerCase());
    });
    this.setState({ beers: filteredBeers });
  };

  render() {
    const { beers } = this.state;
    return (
      <div className="App">
        <Switch>
          <Route path="/" component={Homepage} exact />

          <Route path="/beers" exact>
            <SearchBeer filterBeers={this.filterBeers} />
            <BeersList beers={beers} />
          </Route>
          <Route path="/beers/new" exact>
            <NewBeer addNewBeer={this.addNewBeer} />
          </Route>
          <Route path="/beers/random" component={RandomBeer} exact />

          <Route
            path="/beers/single/:id"
            render={(rrdProps) => {
              return <SingleBeer {...rrdProps} beersData={beers} exact />;
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
