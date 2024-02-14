import {Component} from 'react'

import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import ThemeContext from '../../context/ThemeContext'

import {
  LogoImage,
  LabelEl,
  FormContainer,
  LoginButton,
  LoginContainer,
  LoginMainContainer,
  InputContainer,
  InputEl,
  ErrorPara,
  ShowPasswordLabelEl,
  ShowInputContainer,
} from './LoginStyles'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
    passwordVisible: false,
    passwordType: 'password',
  }

  onChangeUserName = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    })
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    console.log(errorMsg)
    this.setState({showSubmitError: true, errorMsg})
  }

  submitLoginDetails = async event => {
    event.preventDefault()

    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
      console.log(data)
    }
  }

  onShowPassword = () => {
    const {passwordType, passwordVisible} = this.state

    if (passwordVisible === true) {
      this.setState({
        passwordType: 'password',
        passwordVisible: !passwordVisible,
      })
    } else {
      this.setState({
        passwordType: 'text',
        passwordVisible: !passwordVisible,
      })
    }
  }

  render() {
    const {
      username,
      password,
      showSubmitError,
      errorMsg,
      passwordType,
    } = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <ThemeContext>
        {value => {
          const {isDarkTheme} = value
          const logoImage =
            isDarkTheme === false
              ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
              : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          return (
            <LoginMainContainer isDarkTheme={isDarkTheme}>
              <LoginContainer isDarkTheme={isDarkTheme}>
                <LogoImage
                  src={logoImage}
                  alt="website logo"
                  className="logo-image"
                />
                <FormContainer onSubmit={this.submitLoginDetails}>
                  <InputContainer>
                    <LabelEl htmlFor="textInput" isDarkTheme={isDarkTheme}>
                      USERNAME
                    </LabelEl>
                    <InputEl
                      type="text"
                      id="textInput"
                      placeholder="Username"
                      value={username}
                      onChange={this.onChangeUserName}
                    />
                  </InputContainer>
                  <InputContainer>
                    <LabelEl htmlFor="passwordInput" isDarkTheme={isDarkTheme}>
                      PASSWORD
                    </LabelEl>
                    <InputEl
                      type={passwordType}
                      id="passwordInput"
                      placeholder="Password"
                      value={password}
                      onChange={this.onChangePassword}
                    />
                  </InputContainer>

                  <ShowInputContainer>
                    <input
                      type="checkbox"
                      id="showPassword"
                      onChange={this.onShowPassword}
                    />
                    <ShowPasswordLabelEl
                      htmlFor="showPassword"
                      isDarkTheme={isDarkTheme}
                    >
                      Show Password
                    </ShowPasswordLabelEl>
                  </ShowInputContainer>

                  <LoginButton type="submit">Login</LoginButton>
                  {showSubmitError === true ? (
                    <ErrorPara>{errorMsg}</ErrorPara>
                  ) : null}
                </FormContainer>
              </LoginContainer>
            </LoginMainContainer>
          )
        }}
      </ThemeContext>
    )
  }
}

export default LoginForm
