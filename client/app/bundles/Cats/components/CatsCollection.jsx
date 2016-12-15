import React, { PropTypes } from 'react';
import CatInstance from './CatInstance';

export default class CatsCollection extends React.Component {

  /**
   * @param props - Comes from your rails view.
   * @param _railsContext - Comes from React on Rails
   */
  constructor(props, _railsContext) {
    super(props);

    // How to set initial state in ES6 class syntax
    // https://facebook.github.io/react/docs/reusable-components.html#es6-classes
    this.state = { cats: this.props.cats };
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
