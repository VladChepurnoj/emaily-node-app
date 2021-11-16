import React, { Component } from "react";
import { reduxForm } from "redux-form";

class SuerveyForm extends Component {
  render() {
    return <div>SuerveyForm</div>;
  }
}

export default reduxForm()(SuerveyForm);
