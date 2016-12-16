import React, { PropTypes } from 'react';
import CatsCollection from './CatsCollection';
import AddCatForm from './AddCatForm';

export default class CatsWrapper extends React.Component {

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

  handleSubmit = values => {
    console.log(values);
  }

  render() {
    return (
      <div>
        <CatsCollection {...this.props} />
        <AddCatForm onSubmit={this.handleSubmit}/>
      </div>
    );
  }
}
