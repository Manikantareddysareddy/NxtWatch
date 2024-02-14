import {Link} from 'react-router-dom'

import {AiFillHome} from 'react-icons/ai'

import {HiFire} from 'react-icons/hi'

import {SiYoutubegaming} from 'react-icons/si'

import {MdPlaylistAdd} from 'react-icons/md'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

import {
  TopContainer,
  SideMainContainer,
  SideBarHome,
  HomeHeading,
  Icon,
  BottomContainer,
  SocialMedia,
  ImageEle,
  Heading,
  Para,
} from './SideBarStyles'

const SideBar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <>
          <SideMainContainer isDarkTheme={isDarkTheme}>
            <TopContainer>
              <SideBarHome>
                <Icon>
                  <AiFillHome />
                </Icon>
                <Link to="/" className="link-item">
                  <HomeHeading isDarkTheme={isDarkTheme}>Home</HomeHeading>
                </Link>
              </SideBarHome>
              <SideBarHome>
                <Icon>
                  <HiFire />
                </Icon>
                <Link to="/trending" className="link-item">
                  <HomeHeading isDarkTheme={isDarkTheme}>Trending</HomeHeading>
                </Link>
              </SideBarHome>
              <SideBarHome>
                <Icon>
                  <SiYoutubegaming />
                </Icon>
                <Link to="/gaming" className="link-item">
                  <HomeHeading isDarkTheme={isDarkTheme}>Gaming</HomeHeading>
                </Link>
              </SideBarHome>
              <SideBarHome>
                <Icon>
                  <MdPlaylistAdd />
                </Icon>
                <Link to="/saved-videos" className="link-item">
                  <HomeHeading isDarkTheme={isDarkTheme}>
                    Saved Videos
                  </HomeHeading>
                </Link>
              </SideBarHome>
            </TopContainer>

            <BottomContainer>
              <Heading isDarkTheme={isDarkTheme}>CONTACT US</Heading>
              <SocialMedia>
                <ImageEle
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
                <ImageEle
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
                <ImageEle
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png "
                  alt="linked in logo"
                />
              </SocialMedia>
              <Para isDarkTheme={isDarkTheme}>
                Enjoy! Now to see your channels and recommendations!
              </Para>
            </BottomContainer>
          </SideMainContainer>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default SideBar
