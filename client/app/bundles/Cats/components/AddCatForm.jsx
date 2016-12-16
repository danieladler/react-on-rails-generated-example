import React from 'react'
import { Field, reduxForm } from 'redux-form'

const AddCatForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Add a new cat</label>
          <div>
            <Field name="name" component="input" type="text" placeholder="name"/>
          </div>
        </div>
        <div>
          <button type="submit" disabled={pristine || submitting}>Submit</button>
          <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
        </div>
      </form>
    </div>
  )
}

export default reduxForm({
  form: 'addCatForm'  // a unique identifier for this form
})(AddCatForm)
