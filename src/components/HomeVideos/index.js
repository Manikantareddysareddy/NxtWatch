import {Component} from 'react'

import {Link} from 'react-router-dom'

import Loader from 'react-loader-spinner'

import Popup from 'reactjs-popup'

import Cookies from 'js-cookie'

import {IoSearch} from 'react-icons/io5'

import {IoMdClose} from 'react-icons/io'

import VideoCard from '../VideoCard'

import ThemeContext from '../../context/ThemeContext'

import {
  HomeContainer,
  BannerContainer,
  BannerImage,
  InputSearchContainer,
  SearchInput,
  BannerHeading,
  SearchIcon,
  CloseButton,
  BannerButton,
  VideoContainer,
  NoVideosView,
  NoVideosDesc,
  NoVideosHeading,
  NoVideosViewImg,
  LoaderContainer,
  FailureContainer,
  FailureBtn,
  FailureHeading,
  FailureImg,
  FailurePara,
  Retry,
} from './HomeVideoStyles'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class HomeVideos extends Component {
  state = {
    videosList: [],
    searchInput: '',
    closeBanner: false,
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    const {videosList, searchInput, apiStatus} = this.state
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`

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

  onSearchDetails = event => {
    this.setState({searchInput: event.target.value})
  }

  searchByInput = () => {
    this.getVideos()
  }

  gotoVideos = () => {
    this.setState({searchInput: ''}, this.getVideos)
  }

  renderAllVideos = () => {
    const {videosList, searchInput} = this.state
    const shouldShowProductsList = videosList.length > 0

    return shouldShowProductsList ? (
      <VideoContainer>
        {videosList.map(videoItem => (
          <VideoCard Item={videoItem} key={videoItem.id} />
        ))}
      </VideoContainer>
    ) : (
      <NoVideosView>
        <NoVideosViewImg
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png "
          alt=" no videos"
        />
        <NoVideosHeading>No Search results found</NoVideosHeading>
        <NoVideosDesc>
          Try different key words or remove search filter
        </NoVideosDesc>

        <Retry onClick={this.gotoVideos} type="button">
          Retry
        </Retry>
      </NoVideosView>
    )
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

  closeBannerEl = () => {
    const {closeBanner} = this.state
    this.setState({closeBanner: !closeBanner})
  }

  renderAllVideoDetails = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderAllVideos()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    const {videosList, searchInput, closeBanner} = this.state

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <HomeContainer isDarkTheme={isDarkTheme}>
              {closeBanner === true ? null : (
                <BannerImage data-testid="banner">
                  <div>
                    <BannerContainer
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                      alt="nxt watch logo"
                    />
                    <BannerHeading>
                      Buy NxtWatch Premium prepaid plans with UPI
                    </BannerHeading>
                    <BannerButton type="button">GET IT NOW</BannerButton>
                  </div>
                  <div>
                    <CloseButton
                      type="button"
                      data-testid="close"
                      onClick={this.closeBannerEl}
                    >
                      <IoMdClose />
                    </CloseButton>
                  </div>
                </BannerImage>
              )}

              <InputSearchContainer>
                <SearchInput
                  type="search"
                  placeholder="Search"
                  value={searchInput}
                  onChange={this.onSearchDetails}
                  isDarkTheme={isDarkTheme}
                />
                <SearchIcon
                  onClick={this.searchByInput}
                  isDarkTheme={isDarkTheme}
                  data-testid="searchButton"
                >
                  <IoSearch />
                </SearchIcon>
              </InputSearchContainer>
              {this.renderAllVideoDetails()}
            </HomeContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default HomeVideos
