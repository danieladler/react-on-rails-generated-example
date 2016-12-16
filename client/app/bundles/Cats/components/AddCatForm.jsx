import React from 'react'
import { Field, reduxForm } from 'redux-form'

const AddCatForm = (props) => {
  return (
    <div>
      <h1> Form Placeholder </h1>
    </div>
  )
}

export default reduxForm({
  form: 'addCat'  // a unique identifier for this form
})(AddCatForm)
