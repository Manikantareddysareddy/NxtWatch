import {Link} from 'react-router-dom'

import {formatDistanceToNow} from 'date-fns'

import ThemeContext from '../../context/ThemeContext'

import {
  VideoCardContainer,
  ThumbnailImg,
  DetailsContainer,
  Data,
  Title,
  ChannelName,
  Views,
  ViewsDate,
  ViewsContainer,
} from './SavedVideoCardStyles'

import '../../App.css'

const SavedVideoCard = props => {
  const {Item} = props
  const {id, title, thumbnailUrl, name, viewCount, publishedAt} = Item
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <Link to={`videos/${id}`} className="link-item">
            <VideoCardContainer>
              <div>
                <ThumbnailImg src={thumbnailUrl} alt="video thumbnail" />
              </div>
              <DetailsContainer>
                <Data>
                  <Title isDarkTheme={isDarkTheme}>{title}</Title>
                  <ChannelName>{name}</ChannelName>
                  <ViewsContainer>
                    <Views>{viewCount} views</Views>
                    <ViewsDate>{publishedAt}</ViewsDate>
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

export default SavedVideoCard
