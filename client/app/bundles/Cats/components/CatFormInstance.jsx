import React, { PropTypes } from 'react'
import { reduxForm, Field } from 'redux-form'
import MenuItem from 'material-ui/MenuItem'
import { RadioButton } from 'material-ui/RadioButton'
import {
  Checkbox,
  RadioButtonGroup,
  SelectField,
  TextField,
  Toggle
} from 'redux-form-material-ui';

class CatFormInstance extends React.Component {

  /**
   * @param props - Comes from your rails view.
   * @param _railsContext - Comes from React on Rails
   */
  constructor(props, _railsContext) {
    super(props);
  }

  render() {
    const { cat, i } = this.props;
    return (
      <div>
        <h3>
          Meow, {cat.name}!
        </h3>
        <div>
          <h3>
            Name test will go here 
          </h3>
        </div>
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

export default reduxForm({
  form: 'catFormInstance',
  initialValues: {
    name: 'test',
  }
})(CatFormInstance)
