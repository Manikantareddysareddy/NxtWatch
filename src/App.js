import {Component} from 'react'

import {Switch, Route, Redirect} from 'react-router-dom'

import LoginForm from './components/LoginForm'

import TrendingVideos from './components/TrendingVideos'

import GameingVideos from './components/GameingVideos'

import NotFound from './components/NotFound'

import ProtectedRoute from './components/ProtectedRoute'

import Home from './components/Home'

import VideoItemDetails from './components/VideoItemDetails'

import SavedVideos from './components/SavedVideos'

import ThemeContext from './context/ThemeContext'

import './App.css'

class App extends Component {
  state = {isDarkTheme: false, savedVideos: [], isSaved: false}

  toggleTheme = () => {
    const {isDarkTheme} = this.state
    this.setState({isDarkTheme: !isDarkTheme})
  }

  savedTheVideo = (id, data) => {
    const {savedVideos} = this.state
    const ExsistVal = savedVideos.find(each => each.id === id)

    if (ExsistVal !== undefined) {
      this.setState(prevState => ({
        savedVideos: prevState.savedVideos.filter(
          eachContact => eachContact.id !== id,
        ),
      }))
    } else {
      this.setState(prevState => ({
        savedVideos: [...prevState.savedVideos, data],
      }))
    }
  }

  render() {
    const {isDarkTheme, savedVideos} = this.state
    console.log(savedVideos)
    return (
      <ThemeContext.Provider
        value={{
          isDarkTheme,
          savedVideos,

          toggleTheme: this.toggleTheme,
          savedTheVideo: this.savedTheVideo,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={TrendingVideos} />
          <ProtectedRoute exact path="/gaming" component={GameingVideos} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
