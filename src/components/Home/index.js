import {Component} from 'react'

import Header from '../Header'

import SideBar from '../SideBar'

import HomeVideos from '../HomeVideos'

import {MainHomeContainer, Container} from './HomeStyles'

import ThemeContext from '../../context/ThemeContext'

import '../../App.css'

class Home extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <>
              <Header />
              <MainHomeContainer data-testid="home" isDarkTheme={isDarkTheme}>
                <SideBar />
                <Container>
                  <HomeVideos />
                </Container>
              </MainHomeContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
