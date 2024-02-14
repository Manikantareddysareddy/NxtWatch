import Header from '../Header'

import SideBar from '../SideBar'

import ThemeContext from '../../context/ThemeContext'

import {
  NotFoundContainer,
  NotFoundImg,
  NotFoundHeading,
  NotFoundPara,
  MainHomeContainer,
  Container,
} from './NotFoundStyles'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const ImgEl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
      return (
        <>
          <Header />
          <MainHomeContainer>
            <SideBar />
            <Container isDarkTheme={isDarkTheme}>
              <NotFoundContainer>
                <NotFoundImg
                  src={ImgEl}
                  alt="not found"
                  className="not-found-img"
                />
                <NotFoundHeading isDarkTheme={isDarkTheme}>
                  Page Not Found
                </NotFoundHeading>
                <NotFoundPara isDarkTheme={isDarkTheme}>
                  we are sorry, the page you requested could not be found.
                </NotFoundPara>
              </NotFoundContainer>
            </Container>
          </MainHomeContainer>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
