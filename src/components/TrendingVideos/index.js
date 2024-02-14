import {Component} from 'react'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import {HiFire} from 'react-icons/hi'

import TrendingVideoCard from '../TrendingVideoCard'

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
} from './TrendingStyles'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class TrendingVideos extends Component {
  state = {videosList: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    const {videosList} = this.state
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/trending'

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
        channel: eachVideo.channel,
        viewCount: eachVideo.view_count,
        publishedAt: eachVideo.published_at,
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

  renderTrendingVideos = () => {
    const {videosList} = this.state
    return (
      <VideoContainer>
        {videosList.map(videoItem => (
          <TrendingVideoCard Item={videoItem} key={videoItem.id} />
        ))}
      </VideoContainer>
    )
  }

  renderAllTrendingVideoDetails = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderTrendingVideos()
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
                    data-testid="trending"
                  >
                    <IconPara isDarkTheme={isDarkTheme}>
                      <HiFire />
                    </IconPara>
                    <TrendHeading isDarkTheme={isDarkTheme}>
                      Trending
                    </TrendHeading>
                  </TopBannerContainer>

                  {this.renderAllTrendingVideoDetails()}
                </HomeContainer>
              </SideContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default TrendingVideos
