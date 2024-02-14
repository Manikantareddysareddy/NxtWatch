import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : ' #e2e8f0')};
  min-height: 100vh;
  width: 100%;
`
export const VideoContainer = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;

  overflow-y: scroll;
  height: 100vh;
`
export const TopBannerContainer = styled.ul`
  display: flex;
  flex-direction: row;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : ' #f9f9f9')};
  height: 19vh;
  padding-left: 50px;
  padding-top: 10px;
`
export const IconPara = styled.button`
  font-size: 70px;
  color: #ff0b37;
  height: 16vh;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : ' #d7dfe9')};

  border: 0 none;
  width: 11%;
  border-radius: 80px;
`
export const TrendHeading = styled.li`
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : ' #181818')};
  list-style-type: none;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 35px;
  margin-top: 35px;
  margin-left: 20px;
`
export const SideContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`

export const NoVideosView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
`
export const NoVideosDesc = styled.p`
  color: #475569;
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 400;
`
export const NoVideosHeading = styled.h1`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 23px;
  font-weight: bold;
`
export const Retry = styled.button`
  background-color: #4f46e5;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 14px;
  border: 0 none;
  padding: 10px;
  color: #ffffff;
`
export const NoVideosViewImg = styled.img`
  height: 40vh;
  width: 30vw;
`
