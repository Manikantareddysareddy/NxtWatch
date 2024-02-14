import {Link} from 'react-router-dom'

import {formatDistanceToNow} from 'date-fns'

import ThemeContext from '../../context/ThemeContext'

import {
  VideoCardContainer,
  ThumbnailImg,
  DetailsContainer,
  ProfileImg,
  Data,
  Title,
  ChannelName,
  Views,
  ViewsDate,
  ViewsContainer,
} from './VideoCardStyles'

import '../../App.css'

const VideoCard = props => {
  const {Item} = props
  const {id, title, thumbnailUrl, channel, viewCount, publishedAt} = Item
  const updatedChannel = {
    name: channel.name,
    profileImageUrl: channel.profile_image_url,
  }

  const date = formatDistanceToNow(new Date(publishedAt)).split(' ')

  const newDate = [date[1], date[2], 'ago']

  const {name, profileImageUrl} = updatedChannel

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <Link to={`videos/${id}`} className="link-item">
            <VideoCardContainer>
              <ThumbnailImg src={thumbnailUrl} alt="video thumbnail" />
              <DetailsContainer>
                <ProfileImg src={profileImageUrl} alt="channel logo" />
                <Data>
                  <Title isDarkTheme={isDarkTheme}>{title}</Title>
                  <ChannelName>{name}</ChannelName>
                  <ViewsContainer>
                    <Views>{viewCount} views</Views>
                    <ViewsDate>{newDate.join(' ')}</ViewsDate>
                  </ViewsContainer>
                </Data>
              </DetailsContainer>
            </VideoCardContainer>
          </Link>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default VideoCard
