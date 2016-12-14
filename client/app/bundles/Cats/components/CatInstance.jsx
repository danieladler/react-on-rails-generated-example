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
        <hr />
        <form >
          <label htmlFor="name">
            Give a treat to:
          </label>
          <input
            id="name"
            type="text"
            value={cat.name}
            onChange={(e) => this.props.updateName(e.target.value, cat.id)}
          />
        </form>
      </div>
    );
  }
}
