import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : ' #ebebeb')};
  border-radius: 10px;
  width: 30vw;
  padding-top: 50px;
  align-items: center;

  height: 60vh;
`

export const LogoImage = styled.img`
  height: 7vh;
  width: 12vw;
  margin-bottom: 30px;
`

export const InputContainer = styled.div`
  display: flex;
  margin: 10px;
  flex-direction: column;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`

export const InputEl = styled.input`
  background-color: transparent;
  border: 1px #64748b solid;
  width: 20vw;
  height: 5vh;
  font-family: 'Roboto';
  color: #94a3b8;
  border-radius: 2px;
  font-size: 13px;
  padding: 7px;
  outline: none;
`

export const LabelEl = styled.label`
  color: ${props => (props.isDarkTheme ? '#ffffff' : ' #ebebeb')};
  margin-bottom: 10px;
  font-weight: 500;
  font-family: 'Roboto';
  font-size: 12px;
`
export const LoginButton = styled.button`
  background-color: #4f46e5;
  color: #ffffff;
  font-weight: bold;
  font-size: 14px;
  border: 0 none;
  padding: 8px;
  width: 93%;
  margin-left: 10px;
  border-radius: 5px;
  cursor: pointer;
`
export const ErrorPara = styled.p`
  color: #ff0b37;
  font-family: 'Roboto';
  font-size: 12px;
`
export const LoginMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDarkTheme ? '#212121' : ' #f9f9f9')};
  height: 100vh;
`
export const ShowInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 5px;
`
export const ShowPasswordLabelEl = styled.label`
  color: ${props => (props.isDarkTheme ? '#ffffff' : ' #0f0f0f')};
  margin-bottom: 10px;
  margin-top: 7px;
  font-weight: 500;
  font-family: 'Roboto';
  font-size: 14px;
  margin-left: 10px;
`
