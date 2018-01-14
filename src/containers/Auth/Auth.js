import React, { Component } from 'react';
import classes from './Auth.css';
import Aux from '../../hoc/Aux_';

// Images
import logo from '../../assets/logo.svg';
import xIcon from '../../assets/x-icn.svg';

// UI
import Input from '../../components/UI/Input';

class Auth extends Component {
  state = {
    loginForm: {
      username: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'User Name',
          maxLength: 30,
          style: { marginBottom: '25px' },
        },
        value: '',
        validation: {
          rules: {
            required: true,
          },
          touched: false,
          valid: false,
        },
      },
      password: {
        elementType: 'input',
        elementConfig: {
          type: 'password',
          placeholder: 'Password',
          maxLength: 30,
        },
        value: '',
        validation: {
          rules: {
            required: true,
          },
          touched: false,
          valid: false,
        },
      },
    },
    resetLinkForm: {
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Email',
          maxLength: 30,
        },
        value: '',
        validation: {
          rules: {
            required: true,
          },
          touched: false,
          valid: false,
        },
      },
    },
    resetPassForm: {
      newPassword: {
        elementType: 'input',
        elementConfig: {
          type: 'password',
          placeholder: 'New Password',
          maxLength: 30,
          style: { marginBottom: '25px' },
        },
        value: '',
        validation: {
          rules: {
            required: true,
          },
          touched: false,
          valid: false,
        },
      },
      confirmPassword: {
        elementType: 'input',
        elementConfig: {
          type: 'password',
          placeholder: 'Confirm Password',
          maxLength: 30,
        },
        value: '',
        validation: {
          rules: {
            required: true,
          },
          touched: false,
          valid: false,
        },
      },
    },
    view: 'resetPass',
    loginError: false,
  }
  onForgotClick = () => {
    this.setState({
      view: 'resetLink',
    });
  };
  onBackClick = () => {
    this.setState({
      view: 'login',
    });
  };
  loginInputChangedHandler = (event, inputIdentifier) => {
    const updatedForm = {
      ...this.state.loginForm,
    };
    const updatedElement = {
      ...updatedForm[inputIdentifier],
    };
    updatedElement.value = event.target.value;
    updatedElement.validation.touched = true;
    // check validity
    updatedElement.validation.valid = this.checkValidity(
      updatedElement.value,
      updatedElement.validation.rules,
    );
    updatedForm[inputIdentifier] = updatedElement;
    this.setState({
      loginForm: updatedForm,
    });
  };
  resetInputChangedHandler = (event, inputIdentifier) => {
    const updatedForm = {
      ...this.state.resetLinkForm,
    };
    const updatedElement = {
      ...updatedForm[inputIdentifier],
    };
    updatedElement.value = event.target.value;
    updatedElement.validation.touched = true;
    // check validity
    updatedElement.validation.valid = this.checkValidity(
      updatedElement.value,
      updatedElement.validation.rules,
    );
    updatedForm[inputIdentifier] = updatedElement;
    this.setState({
      resetLinkForm: updatedForm,
    });
  };
  resetPassInputChangedHandler = (event, inputIdentifier) => {
    const updatedForm = {
      ...this.state.resetPassForm,
    };
    const updatedElement = {
      ...updatedForm[inputIdentifier],
    };
    updatedElement.value = event.target.value;
    updatedElement.validation.touched = true;
    // check validity
    updatedElement.validation.valid = this.checkValidity(
      updatedElement.value,
      updatedElement.validation.rules,
    );
    updatedForm[inputIdentifier] = updatedElement;
    this.setState({
      resetPassForm: updatedForm,
    });
  };
  loginSubmitHandler = (event) => {
    event.preventDefault();
    const loginData = {};
    const loginFormIds = Object.keys(this.state.loginForm);
    const loginFormValues = Object.values(this.state.loginForm);
    for (let i = 0; i < loginFormIds.length; i += 1) {
      loginData[loginFormIds[i]] = loginFormValues[i].value;
    }
  };
  checkValidity = (value, rules) => {
    let isValid = true;
    if (rules.required) {
      isValid = value.trim() !== '' && isValid;
    }
    return isValid;
  }
  render() {
    let view = null;
    let errors = [];
    const formClasses = [];
    formClasses.push(classes['form-container']);
    // check if there is form errors
    if (this.state.loginError) {
      formClasses.push(classes.highlight);
      errors = (
        <div className={classes.errorMessage}>
          <img alt="x-icon" src={xIcon} />Incorrect User Name Or Password
        </div>
      );
    }
    // check what form to redner
    switch (this.state.view) {
      case 'login':
        view = (
          <Aux>
            <div className={classes.text1}>Log In</div>
            <form onSubmit={this.loginSubmitHandler}>
              <Input
                change={(event) => { return this.loginInputChangedHandler(event, 'username'); }}
                elementType={this.state.loginForm.username.elementType}
                elementConfig={this.state.loginForm.username.elementConfig}
                validation={this.state.loginForm.username.validation}
                value={this.state.loginForm.username.value}
              />
              <div style={{ position: 'relative' }}>
                <Input
                  change={(event) => { return this.loginInputChangedHandler(event, 'password'); }}
                  elementType={this.state.loginForm.password.elementType}
                  elementConfig={this.state.loginForm.password.elementConfig}
                  validation={this.state.loginForm.password.validation}
                  value={this.state.loginForm.password.value}
                />
                <span onClick={this.onForgotClick} className={classes['forgot-link']}>Forgot Password?</span>
              </div>
              {errors}
              <button type="submit" className={classes['submit-button']}>LOG IN</button>
            </form>
          </Aux>
        );
        break;
      case 'resetLink':
        view = (
          <Aux>
            <div className={classes.text2}>Forgot Your Password?</div>
            <div className={classes.instructionText}>
              Enter your email address and we’ll send you a request link
            </div>
            <form onSubmit={this.loginSubmitHandler}>
              <Input
                change={(event) => { return this.resetInputChangedHandler(event, 'email'); }}
                elementType={this.state.resetLinkForm.email.elementType}
                elementConfig={this.state.resetLinkForm.email.elementConfig}
                validation={this.state.resetLinkForm.email.validation}
                value={this.state.resetLinkForm.email.value}
              />
              <button type="submit" className={classes['submit-button']}>REQUEST LINK</button>
            </form>
            <div onClick={this.onBackClick} className={classes.text3}>Back to sign in</div>
          </Aux>
        );
        break;
      case 'resetPass':
        view = (
          <Aux>
            <div className={classes.text1}>Forgot Your Password?</div>
            <form onSubmit={this.resetPassInputChangedHandler}>
              <Input
                change={(event) => { return this.resetPassInputChangedHandler(event, 'newPassword'); }}
                elementType={this.state.resetPassForm.newPassword.elementType}
                elementConfig={this.state.resetPassForm.newPassword.elementConfig}
                validation={this.state.resetPassForm.newPassword.validation}
                value={this.state.resetPassForm.newPassword.value}
              />
              <div style={{ position: 'relative' }}>
                <Input
                  change={(event) => { return this.resetPassInputChangedHandler(event, 'confirmPassword'); }}
                  elementType={this.state.resetPassForm.confirmPassword.elementType}
                  elementConfig={this.state.resetPassForm.confirmPassword.elementConfig}
                  validation={this.state.resetPassForm.confirmPassword.validation}
                  value={this.state.resetPassForm.confirmPassword.value}
                />
              </div>
              <button type="submit" className={classes['submit-button']}>RESET PASSWORD</button>
            </form>
          </Aux>
        );
        break;
      default:
        view = null;
    }
    return (
      <div className={classes.wrapper}>
        <div className={formClasses.join(' ')}>
          <img alt="logo" src={logo} />
          {view}
        </div>
      </div>
    );
  }
}
export default Auth;
