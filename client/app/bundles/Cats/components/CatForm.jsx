import React, { PropTypes } from 'react';
import { reduxForm, Field, initialize } from 'redux-form';
import { connect } from 'react-redux';
import {UPDATE_CAT_NAME} from '../constants/CatsConstants';
// const form = reduxForm({
//   form: 'CatForm'
// });

const FieldComponent = field => {
  // debugger
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
  // componentDidMount() {
  //   this.handleInitialize();
  // }
  //
  // handleInitialize() {
  //   console.log(this.props.cat.name);
  //   var cat = this.props.cat,
  //       initData = {
  //         "name": cat.name,
  //       };
  //
  //   this.props.initialize(initData);
  // }


  handleFormSubmit(event) {
    event.preventDefault();
    // debugger
    const name = this.refs.Name.value;
    const {index, dispatch} = this.props;
    // const {id} = cat;
    dispatch({type: UPDATE_CAT_NAME, index, name});
    // index: props.index,
    // this.props.submitFormAction(formProps);
  }

  render() {
    // debugger
    const { handleSubmit } = this.props
    // console.log({cat});
    return (
      <div>
       <form onSubmit={this.handleFormSubmit}>
         <Field ref="Name" name="name" type="text" component="input" label="First Name" />
         <button action="submit">Save changes</button>
       </form>
     </div>
    )
  }
}

const CatReduxForm = reduxForm()(CatForm);

const ConnectedForm = connect((state, props) => {
  // debugger;
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

// function mapStateToProps(state) {
//   return {
//     catSample: state.cats[0],
//   };
// }

// export default connect(mapStateToProps)(form(CatForm));
// export default form(CatForm);
