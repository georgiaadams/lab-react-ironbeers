import React from 'react';
import AddBeer from '../components/Form/AddBeer';
import Header from '../components/Header/Header';

function NewBeer({ addNewBeer }) {
  console.log('rendering');

  return (
    <div>
      <Header />
      <AddBeer addNewBeer={addNewBeer} />
    </div>
  );
}

export default NewBeer;
