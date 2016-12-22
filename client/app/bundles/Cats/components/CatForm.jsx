import React, { PropTypes } from 'react';
import { reduxForm, Field, initialize } from 'redux-form';
import { connect } from 'react-redux';
import {UPDATE_CAT_ATTRS} from '../constants/CatsConstants';

const FieldComponent = field => {
  return (
    <div>
      <label>{field.input.label}</label>
      <input {...field.input}/>
    </div>
  );
}

class CatForm extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(event) {
    event.preventDefault();
    const name = this.refs.Name.value;
    const color = this.refs.Color.value;
    const {index, dispatch} = this.props;
    dispatch({type: UPDATE_CAT_ATTRS, index, name, color});
  }

  render() {
    const { handleSubmit } = this.props
    return (
      <div>
       <form onSubmit={this.handleFormSubmit}>
         <Field ref="Name" name="name" type="text" component="input" />
         <Field ref="Color" name="color" type="text" component="input"/>
         <button action="submit">Save changes</button>
       </form>
     </div>
    )
  }
}

const CatReduxForm = reduxForm()(CatForm);

const ConnectedForm = connect((state, props) => {
  return {
    initialValues: props.cat,
    index: props.index,
    form: `cats-${props.index}`,
  };
})(CatReduxForm);

const CatShape = React.PropTypes.shape({
  id: React.PropTypes.number.isRequired,
  name: React.PropTypes.string.isRequired,
  color: React.PropTypes.string.isRequired,
  treats: React.PropTypes.number.isRequired,
});

ConnectedForm.propTypes = {
  cat: CatShape.isRequired,
  index: React.PropTypes.number.isRequired,
}

export default ConnectedForm;
