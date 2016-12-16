import React, { PropTypes } from 'react';

export default class Cats extends React.Component {

  /**
   * @param props - Comes from your rails view.
   * @param _railsContext - Comes from React on Rails
   */
  constructor(props, _railsContext) {
    super(props);

    // How to set initial state in ES6 class syntax
    // https://facebook.github.io/react/docs/reusable-components.html#es6-classes
    // this.state = { cat: this.props.cat };
  }

  render() {
    const { cat, i } = this.props;
    return (
      <div>
        <h3>
          Meow, {cat.name}!
        </h3>
        <div>
          <h4> Crucial details: </h4>
          <ul>
            <li> color: { cat.color} </li>
            <li> treat count: {cat.treats} </li>
            <button onClick={this.props.incrementTreat.bind(null, i)}> +1 treats </button>
          </ul>
        </div>
        <hr />
      </div>
    );
  }
}
