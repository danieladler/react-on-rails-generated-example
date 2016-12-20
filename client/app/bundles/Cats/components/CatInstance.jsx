import React, { PropTypes } from 'react';
import CatForm from './CatForm';

export default class CatInstance extends React.Component {
  render() {
    const { cat } = this.props;
    var _this = this;
    return (
      <CatForm
        cat={cat}
        {..._this.props}
      />
    );
  }
}
