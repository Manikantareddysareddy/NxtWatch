import {Component} from 'react'

import Cookies from 'js-cookie'

import {MdPlaylistAdd} from 'react-icons/md'

import SavedVideoCard from '../SavedVideoCard'

import Header from '../Header'

import SideBar from '../SideBar'

import ThemeContext from '../../context/ThemeContext'

import {
  HomeContainer,
  TrendHeading,
  IconPara,
  TopBannerContainer,
  VideoContainer,
  NoVideosDesc,
  NoVideosHeading,
  NoVideosView,
  NoVideosViewImg,
  Retry,
  SideContainer,
} from './SavedVideosStyles'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class SavedVideos extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
  }

  renderSavedVideos = () => (
    <ThemeContext.Consumer>
      {value => {
        const {savedVideos, isDarkTheme} = value
        const shouldShowProductsList = savedVideos.length > 0
        return shouldShowProductsList ? (
          <VideoContainer>
            {savedVideos.map(videoItem => (
              <SavedVideoCard Item={videoItem} key={videoItem.id} />
            ))}
          </VideoContainer>
        ) : (
          <NoVideosView>
            <NoVideosViewImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png "
              alt=" no saved videos"
            />
            <NoVideosHeading>No saved videos found</NoVideosHeading>
            <NoVideosDesc>
              You can save your videos while watching them
            </NoVideosDesc>
          </NoVideosView>
        )
      }}
    </ThemeContext.Consumer>
  )

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme, savedVideos} = value
          return (
            <>
              <Header />
              <SideContainer>
                <SideBar />

                <HomeContainer isDarkTheme={isDarkTheme}>
                  <TopBannerContainer
                    isDarkTheme={isDarkTheme}
                    data-testid="savedVideos"
                  >
                    <IconPara isDarkTheme={isDarkTheme}>
                      <MdPlaylistAdd />
                    </IconPara>
                    <TrendHeading isDarkTheme={isDarkTheme}>
                      SavedVideos
                    </TrendHeading>
                  </TopBannerContainer>

                  {this.renderSavedVideos()}
                </HomeContainer>
              </SideContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default SavedVideos
