import React from "react";
import { Field, reduxForm } from "redux-form";

const Streamform = (props) => {

  const renderInput = ({ input, label, meta }) => {
    const errorclassname = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={errorclassname}>
        <label>{label}</label>
        <input {...input} type="text" autoComplete="off" />
        {rendererror(meta)}
      </div>
    );
  };

  const rendererror = ({ error, touched }) => {
    if (error && touched) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  };

  const onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  }

  return (
    <form  onSubmit={props.handleSubmit(onSubmit)} className="ui form error">
      <Field name="title" component={renderInput} label="Enter Title" />
      <Field
        name="description"
        component={renderInput}
        label="Enter Description"
      />
      <br />
      <button className="ui primary button">Submit</button>
    </form>
  );
};

const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    errors.title = "Please enter title";
  }

  if (!formValues.description) {
    errors.description = "Please enter description";
  }

  return errors;
};

export default reduxForm({
  form: "Streamform",
  validate,
})(Streamform);
