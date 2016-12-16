import React, { PropTypes } from 'react';
import CatInstance from './CatInstance';
import AddCatForm from './AddCatForm';

export default class CatsCollection extends React.Component {

  /**
   * @param props - Comes from your rails view.
   * @param _railsContext - Comes from React on Rails
   */
  constructor(props, _railsContext) {
    super(props);
  }

  render() {
    var _this = this,
      cats = this.props.cats.map(function(cat, i) {
      return (
        <CatInstance
          key={i}
          i={i}
          cat={cat}
          {..._this.props}
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
