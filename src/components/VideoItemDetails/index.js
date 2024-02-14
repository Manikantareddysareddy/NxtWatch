import {Component} from 'react'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import ReactPlayer from 'react-player'

import {formatDistanceToNow} from 'date-fns'

import {MdPlaylistAdd} from 'react-icons/md'

import {BiLike, BiDislike} from 'react-icons/bi'

import ThemeContext from '../../context/ThemeContext'

import {
  SideContainer,
  HomeContainer,
  VideoDetailContainer,
  VideoContainer,
  TitleHeading,
  SecondDetailsContainer,
  ViewsContainer,
  Views,
  ViewsDate,
  LikeContainer,
  LikePara,
  LikeBtn,
  SavePara,
  SaveBtn,
  DisLikeBtn,
  DisLikePara,
  HorizentalLine,
  Data,
  ProfileImg,
  Desc,
  Subs,
  ChannelName,
  DetailsContainer,
  LoaderContainer,
  FailureContainer,
  FailureBtn,
  FailureHeading,
  FailureImg,
  FailurePara,
} from './VideoItemDetails'

import Header from '../Header'

import SideBar from '../SideBar'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    videoItem: [],
    isliked: false,
    isdislike: false,
    isSaved: false,
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getVideoItemDetails()
  }

  getFormattedData = data => ({
    id: data.video_details.id,
    description: data.video_details.description,
    videoUrl: data.video_details.video_url,
    title: data.video_details.title,
    thumbnailUrl: data.video_details.thumbnail_url,
    name: data.video_details.channel.name,
    profileImageUrl: data.video_details.channel.profile_image_url,
    subscriberCount: data.video_details.channel.subscriber_count,
    viewCount: data.video_details.view_count,
    publishedAt: data.video_details.published_at,
  })

  getVideoItemDetails = async () => {
    const {apiStatus} = this.state
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    const {match} = this.props
    const {params} = match
    const {id} = params

    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = this.getFormattedData(data)

      this.setState({
        videoItem: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderVideoDetails = () => {
    const {videoItem, isliked, isdislike, isSaved} = this.state
    const {
      id,
      title,
      thumbnailUrl,
      channel,
      viewCount,
      publishedAt,
      name,
      profileImageUrl,
      subscriberCount,
      description,
      videoUrl,
    } = videoItem

    const videoliked = () => {
      this.setState({isliked: !isliked, isdislike: false})
    }

    const videoDisLiked = () => {
      this.setState({isliked: false, isdislike: !isdislike})
    }

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme, savedVideos, savedTheVideo} = value
          const saveTheVideo = () => {
            this.setState({isSaved: !isSaved})
            savedTheVideo(id, videoItem)
          }
          return (
            <VideoDetailContainer>
              <VideoContainer>
                <ReactPlayer url={videoUrl} controls />
              </VideoContainer>
              <TitleHeading isDarkTheme={isDarkTheme}>{title}</TitleHeading>
              <SecondDetailsContainer>
                <ViewsContainer>
                  <Views>{viewCount} views</Views>
                  <ViewsDate>{publishedAt}</ViewsDate>
                </ViewsContainer>
                <ViewsContainer>
                  <LikeContainer>
                    <LikeBtn
                      type="button"
                      onClick={videoliked}
                      isliked={isliked}
                    >
                      <BiLike />

                      <LikePara isliked={isliked}>Like</LikePara>
                    </LikeBtn>
                  </LikeContainer>
                  <LikeContainer>
                    <DisLikeBtn
                      type="button"
                      onClick={videoDisLiked}
                      isdislike={isdislike}
                    >
                      <BiDislike />

                      <DisLikePara isdislike={isdislike}>Dislike</DisLikePara>
                    </DisLikeBtn>
                  </LikeContainer>
                  <LikeContainer>
                    <SaveBtn
                      type="button"
                      onClick={saveTheVideo}
                      isSaved={isSaved}
                    >
                      <MdPlaylistAdd />

                      {isSaved === true ? (
                        <SavePara isSaved={isSaved}>Saved</SavePara>
                      ) : (
                        <SavePara isSaved={isSaved}>Save</SavePara>
                      )}
                    </SaveBtn>
                  </LikeContainer>
                </ViewsContainer>
              </SecondDetailsContainer>
              <HorizentalLine />
              <DetailsContainer>
                <ProfileImg src={profileImageUrl} alt="channel logo" />
                <Data>
                  <ChannelName isDarkTheme={isDarkTheme}>{name}</ChannelName>
                  <Subs>{subscriberCount} subscribers</Subs>
                  <Desc isDarkTheme={isDarkTheme}>{description}</Desc>
                </Data>
              </DetailsContainer>
            </VideoDetailContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  retryJobsPage = () => {
    this.getVideoItemDetails()
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
              We are having some trouble to complete your request. Please try
              again.
            </FailurePara>

            <FailureBtn type="button" onClick={this.retryJobsPage}>
              Retry
            </FailureBtn>
          </FailureContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderAllVideoItemDetails = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideoDetails()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    const {videoItem} = this.state
    const {
      title,
      thumbnailUrl,
      channel,
      viewCount,
      publishedAt,
      name,
      profileImageUrl,
      subscriberCount,
      description,
      videoUrl,
    } = videoItem

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <>
              <Header />
              <SideContainer>
                <SideBar />
                <HomeContainer
                  isDarkTheme={isDarkTheme}
                  data-testid="videoItemDetails"
                >
                  {this.renderAllVideoItemDetails()}
                </HomeContainer>
              </SideContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoItemDetails
