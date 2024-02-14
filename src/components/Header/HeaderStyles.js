import styled from 'styled-components'

export const HeaderMainContainer = styled.div`
  height: 13vh;
  display: flex;
  flex-direction: row;
  padding-top: 10px;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : ' #f9f9f9')};
  justify-content: space-between;
  padding-left: 30px;
  padding-right: 30px;
`
export const ImageEl = styled.img`
  height: 6vh;
  width: 12vw;
  margin-top: 10px;
`

export const ThemeLogoutContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
export const ProfileImageEl = styled.img`
  height: 6vh;
  margin-right: 20px;
  width: 3vw;
`
export const LogoutButton = styled.button`
  background-color: transparent;
  color: ${props => (props.isDarkTheme ? ' #f9f9f9' : '#3b82f6')};
  border: ${props =>
    props.isDarkTheme ? '2px  #f9f9f9 solid' : '2px #3b82f6 solid'};
  font-weight: bold;
  font-size: 15px;
  padding: 8px;
  border-radius: 5px;
  width: 8vw;
`
export const ThemeImg = styled.p`
  font-size: 34px;
  margin-right: 20px;
  margin-top: 40px;
`
export const ThemeButton = styled.button`
  background-color: transparent;
  border: 0 none;
  font-size: 32px;
  color: ${props => (props.isDarkTheme ? ' #f9f9f9' : '#0f0f0f')};
  cursor: pointer;
  margin-right: 20px;
`
export const LogoutButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 20vw;
  justify-content: center;
  align-items: center;

  padding-bottom: 20px;
`
export const CancelButton = styled.button`
  background-color: transparent;
  border: 1px #94a3b8 solid;
  color: #94a3b8;
  font-family: 'Roboto';
  border-radius: 5px;
  padding: 12px;
  cursor: pointer;
  margin-right: 10px;
`
export const ConfirmButton = styled.button`
  background-color: #3b82f6;
  border: 0 none;
  cursor: pointer;
  border-radius: 5px;
  color: #ffffff;
  font-family: 'Roboto';
`
export const Para = styled.p`
  color: ${props => (props.isDarkTheme ? '#e2e8f0' : '  #00306e')};
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 450;
`
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const MainContainer = styled.div`
  height: 25vh;
  width: 100%;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : ' #f9f9f9')};
  display: flex;
  flex-direction: column;
  justify-content: content;
  align-items: center;
`
