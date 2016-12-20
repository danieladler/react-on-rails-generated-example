import React, { PropTypes } from 'react';
// import CatIns  tance from './CatInstance';
import AddCatForm from './AddCatForm';
import CatForm from './CatForm';

export default class CatsCollection extends React.Component {
  render() {
    var _this = this,
      cats = this.props.cats.map(function(cat, i) {
        return (
          <CatForm
            key={i}
            i={i}
            cat={cat}
          />
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
