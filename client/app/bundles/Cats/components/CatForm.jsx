import React, { PropTypes } from 'react';
import { reduxForm, Field, initialize } from 'redux-form';
import { connect } from 'react-redux';

// const form = reduxForm({
//   form: 'CatForm'
// });

const renderField = field => (
    <div>
      <label>{field.input.label}</label>
      <input {...field.input}/>
    </div>
);

class CatForm extends React.Component {
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

  handleFormSubmit(formProps) {
    this.props.submitFormAction(formProps);
  }

  render() {
    const { handleSubmit } = this.props
    return (
      <div>
       <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
         <Field name="name" type="text" component={renderField} label="First Name"/>
         <button action="submit">Save changes</button>
       </form>
     </div>
    )
  }
}

export default reduxForm({
  form: 'catForm',
  initialValues: {
    name: 'test'
    // name: this.props.cat.name,
  }
})(CatForm)

// function mapStateToProps(state) {
//   return {
//     catSample: state.cats[0],
//   };
// }

// export default connect(mapStateToProps)(form(CatForm));
// export default form(CatForm);
