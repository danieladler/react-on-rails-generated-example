import React, { PropTypes } from 'react';
import AddCatForm from './AddCatForm';
import CatForm from './CatForm';

export default class CatsCollection extends React.Component {
  render() {
    var _this = this,
      cats = this.props.cats.map(function(cat, index) {
        return (
          <div key={index}>
            {cat.name}
            {cat.color}
            <CatForm
              index={index}
              cat={cat}
            />
          </div>
        )
    });
    return (
      <div>
        <h2> Here are all the cats: </h2>
        { cats }
      </div>
    );
  }
}
