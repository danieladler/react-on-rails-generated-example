import React, { PropTypes } from 'react';
import CatForm from './CatForm';

export default class CatInstance extends React.Component {

  /**
   * @param props - Comes from your rails view.
   * @param _railsContext - Comes from React on Rails
   */
  constructor(props, _railsContext) {
    super(props);
  }

  render() {
    // const { cat, i } = this.props;
    var _this = this;
    return (
      <CatForm {..._this.props} />
    );
  }
}
