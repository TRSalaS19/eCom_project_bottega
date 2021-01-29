import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';


class SignUp extends Component {
  
  signIn = reduxForm ({
    form: 'SignIn'
  })(SignIn);

  render(){
    return (
      <div className="sign-up">
        sign-up
      </div>
    )
  }
}

export default SignUp;