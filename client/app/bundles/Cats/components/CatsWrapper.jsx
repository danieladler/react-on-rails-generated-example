import React, { PropTypes } from 'react';
import CatsCollection from './CatsCollection';
import AddCatForm from './AddCatForm';

export default class CatsWrapper extends React.Component {
  handleSubmit = values => {
    this.props.addCat(values);
  }

  render() {
    return (
      <div>
        <CatsCollection {...this.props} />
        <AddCatForm {...this.props} onSubmit={this.handleSubmit}/>
      </div>
    );
  }
}
