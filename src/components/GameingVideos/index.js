import {Component} from 'react'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import {SiYoutubegaming} from 'react-icons/si'

import GamingVideoCard from '../GamingVideoCard'

import Header from '../Header'

import SideBar from '../SideBar'

import ThemeContext from '../../context/ThemeContext'

import {
  HomeContainer,
  TrendHeading,
  IconPara,
  TopBannerContainer,
  VideoContainer,
  SideContainer,
  LoaderContainer,
  FailureContainer,
  FailureBtn,
  FailureHeading,
  FailureImg,
  FailurePara,
} from './GameingStyles'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class GameingVideos extends Component {
  state = {videosList: []}

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    const {videosList} = this.state
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/gaming'

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)

    if (response.ok === true) {
      const data = await response.json()
      const updatedData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
      }))
      this.setState({
        videosList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  retryJobsPage = () => {
    this.getVideos()
  }

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </LoaderContainer>
  )

  renderFailureView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const FailImg = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        return (
          <FailureContainer>
            <FailureImg alt="failure view" src={FailImg} />
            <FailureHeading isDarkTheme={isDarkTheme}>
              Oops! Something Went Wrong
            </FailureHeading>
            <FailurePara isDarkTheme={isDarkTheme}>
              We are having some trouble to complete your request .Please try
              again
            </FailurePara>

            <FailureBtn type="button" onClick={this.retryJobsPage}>
              Retry
            </FailureBtn>
          </FailureContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderGamingVideos = () => {
    const {videosList} = this.state
    return (
      <VideoContainer>
        {videosList.map(videoItem => (
          <GamingVideoCard Item={videoItem} key={videoItem.id} />
        ))}
      </VideoContainer>
    )
  }

  renderAllGamingVideoDetails = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderGamingVideos()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    const {videosList} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <>
              <Header />
              <SideContainer>
                <SideBar />

                <HomeContainer isDarkTheme={isDarkTheme}>
                  <TopBannerContainer
                    isDarkTheme={isDarkTheme}
                    data-testid="gaming"
                  >
                    <IconPara isDarkTheme={isDarkTheme}>
                      <SiYoutubegaming />
                    </IconPara>
                    <TrendHeading isDarkTheme={isDarkTheme}>
                      Gaming
                    </TrendHeading>
                  </TopBannerContainer>

                  {this.renderAllGamingVideoDetails()}
                </HomeContainer>
              </SideContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default GameingVideos
