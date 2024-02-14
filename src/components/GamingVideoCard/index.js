import {Link} from 'react-router-dom'

import {formatDistanceToNow} from 'date-fns'

import ThemeContext from '../../context/ThemeContext'

import {
  VideoCardContainer,
  ThumbnailImg,
  DetailsContainer,
  Title,
  Views,
} from './GamingVideoCardStyles'

import '../../App.css'

const GamingVideoCard = props => {
  const {Item} = props
  const {id, title, thumbnailUrl, viewCount} = Item

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <Link to={`videos/${id}`} className="link-item">
            <VideoCardContainer>
              <ThumbnailImg src={thumbnailUrl} alt="video thumbnail" />
              <DetailsContainer>
                <Title isDarkTheme={isDarkTheme}>{title}</Title>

                <Views>{viewCount} Watching Worldwide</Views>
              </DetailsContainer>
            </VideoCardContainer>
          </Link>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default GamingVideoCard
