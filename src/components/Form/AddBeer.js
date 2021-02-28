import './Form.css';
import React, { Component } from 'react';
import axios from 'axios';

class AddBeer extends Component {
  state = {
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    contributed_by: '',
    attenuation_level: 0,
  };

  handleInput = (event) => {
    let { value, name } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const data = this.state;
    axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', data)
      .then((response) => {
        this.props.addNewBeer(data);
      })
      .catch((err) => console.log(err));
  };

  render() {
    const {
      name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      contributed_by,
      attenuation_level,
    } = this.state;
    return (
      <div>
        <form className="form" onSubmit={this.handleSubmit}>
          <h2>Add a new beer</h2>
          <br />
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleInput}
          />
          <br />
          <label>Tagline</label>
          <input
            type="text"
            name="tagline"
            value={tagline}
            onChange={this.handleInput}
          />
          <br />
          <label>Description</label>
          <input
            type="text"
            name="description"
            value={description}
            onChange={this.handleInput}
          />
          <br />
          <label>First brewed</label>
          <input
            type="text"
            name="first_brewed"
            value={first_brewed}
            onChange={this.handleInput}
          />
          <br />
          <label>Brewer's tips</label>
          <input
            type="text"
            name="brewers_tips"
            value={brewers_tips}
            onChange={this.handleInput}
          />
          <br />
          <label>Attenuation level</label>
          <input
            type="number"
            name="attenuation_level"
            value={attenuation_level}
            onChange={this.handleInput}
          />
          <br />
          <label>Contributed by</label>
          <input
            type="text"
            name="contributed_by"
            value={contributed_by}
            onChange={this.handleInput}
          />
          <br />
          <button type="submit">ADD BEER</button>
        </form>
      </div>
    );
  }
}

export default AddBeer;
