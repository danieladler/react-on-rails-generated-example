import React, { PropTypes } from 'react';
import { reduxForm, Field, initialize } from 'redux-form';
import { connect } from 'react-redux';
import { UPDATE_CAT_ATTRS, INCREMENT_TREAT } from '../constants/CatsConstants';

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

  incrementTreat = (event) => {
    event.preventDefault
    const { index, dispatch } = this.props;
    dispatch({type: INCREMENT_TREAT, index});
  }

  render() {
    const { cat, handleSubmit } = this.props
    return (
      <div>
       <form onSubmit={this.handleFormSubmit}>
         <div>
           <label> Name: </label>
           <Field ref="Name" name="name" type="text" component="input" />
           {cat.name}
         </div>
         <div>
           <label> Color: </label>
           <Field ref="Color" name="color" type="text" component="input"/>
           {cat.color}
         </div>
         <button action="submit">Save changes</button>
       </form>
       <div>
         <label> treat count: {cat.treats} </label>
         <button onClick={this.incrementTreat}> +1 treat </button>
       </div>
       <br/>
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
