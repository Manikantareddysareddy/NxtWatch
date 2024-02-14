import {Link, withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import {FaMoon} from 'react-icons/fa'

import {IoSunnyOutline} from 'react-icons/io5'

import ThemeContext from '../../context/ThemeContext'

import '../../App.css'

import {
  HeaderMainContainer,
  ImageEl,
  ThemeLogoutContainer,
  ProfileImageEl,
  LogoutButton,
  ThemeButton,
  LogoutButtonsContainer,
  CancelButton,
  ConfirmButton,
  Para,
  MainContainer,
  ButtonContainer,
} from './HeaderStyles'

const Header = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const changeTheme = () => {
        toggleTheme()
      }

      const onClickLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }
      const logoImage =
        isDarkTheme === false
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
      return (
        <>
          <HeaderMainContainer isDarkTheme={isDarkTheme}>
            <div>
              <Link to="/">
                <ImageEl src={logoImage} alt="website logo" />
              </Link>
            </div>
            <ThemeLogoutContainer>
              <ThemeButton
                type="button"
                onClick={changeTheme}
                data-testid="theme"
                isDarkTheme={isDarkTheme}
              >
                {isDarkTheme === false ? <FaMoon /> : <IoSunnyOutline />}
              </ThemeButton>

              <ProfileImageEl
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
              <div>
                <Popup
                  modal
                  trigger={
                    <LogoutButton type="button" isDarkTheme={isDarkTheme}>
                      LogOut
                    </LogoutButton>
                  }
                  className="popup-container"
                >
                  {close => (
                    <MainContainer isDarkTheme={isDarkTheme}>
                      <LogoutButtonsContainer>
                        <Para isDarkTheme={isDarkTheme}>
                          Are you sure, you want to logout
                        </Para>
                        <ButtonContainer>
                          <CancelButton
                            onClick={() => close()}
                            isDarkTheme={isDarkTheme}
                          >
                            Cancel
                          </CancelButton>
                          <ConfirmButton
                            type="button"
                            onClick={onClickLogout}
                            isDarkTheme={isDarkTheme}
                          >
                            Confirm
                          </ConfirmButton>
                        </ButtonContainer>
                      </LogoutButtonsContainer>
                    </MainContainer>
                  )}
                </Popup>
              </div>
            </ThemeLogoutContainer>
          </HeaderMainContainer>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default withRouter(Header)
