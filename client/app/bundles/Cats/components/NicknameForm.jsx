import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form';

class NicknameForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return(
      <form onSubmit={handleSubmit}>
        <h4> Add a nickname: </h4>
        <div>
          <label htmlFor="nickname">Nickname:</label>
          <Field name="nickname" component="input" type="text"/>
        </div>
        <button type="submit"> Submit </button>
      </form>
    )
  }
}

NicknameForm = reduxForm({
  form: 'nickname'
})(NicknameForm);

export default NicknameForm;
