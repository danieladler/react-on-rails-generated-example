import React, { PropTypes } from 'react';

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
    // var cats = this.props.cats.map = (cat) => {
    //   <CatInstance
    //     key={cat.id}
    //     name={cat.name}
    //   />
    // };
    // return (
    //   <div>
    //     { cats }
    //   </div>
    // );
    return (
      <h2> Cats Collection is Visible! </h2>
    )
  }
}
