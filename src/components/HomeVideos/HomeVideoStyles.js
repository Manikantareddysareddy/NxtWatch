import styled from 'styled-components'

export const HomeContainer = styled.li`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : ' #e2e8f0')};
  height: 100vh;
  width: 100%;
`
export const BannerContainer = styled.img`
  height: 6vh;
  width: 12vw;
  margin-top: 20px;
`
export const BannerImage = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  padding-left: 30px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const InputSearchContainer = styled.div`
  display: flex;
  margin-top: 20px;
  flex-direction: row;
  margin-left: 20px;
`
export const BannerHeading = styled.p`
  color: #181818;
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: bold;
`
export const BannerButton = styled.button`
  color: #181818;
  font-family: 'Roboto';
  font-size: 15px;
  background-color: transparent;
  border: 1px #181818 solid;
  font-weight: bold;
  padding: 10px;
  margin-bottom: 70px;
`
export const SearchInput = styled.input`
  width: 26vw;
  border: 1px #94a3b8 solid;
  height: 5vh;
  font-family: 'Roboto';
  color: #94a3b8;
  font-size: 17px;
  outline: none;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : ' #e2e8f0')};
`
export const SearchIcon = styled.button`
  font-size: 20px;
  border: 1px #94a3b8 solid;
  width: 5%;
  padding: 3px;
  color: ;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : ' #e2e8f0')};
`
export const VideoContainer = styled.ul`
  display: flex;
  overflow-y: scroll;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
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
export const CloseButton = styled.button`
  background-color: transparent;
  border: 0 none;
  font-size: 30px;
  cursor: pointer;
`
export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 50vh;
  margin-top: 10px;
`
export const FailureBtn = styled.button`
  background-color: #4f46e5;
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 16px;
  padding: 10px;
  border: 0 none;
  width: 10vw;
  border-radius: 6px;
  cursor: pointer;
`
export const FailureHeading = styled.h1`
  color: ${props => (props.isDarkTheme ? ' #e2e8f0' : '#383838')};
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 25px;
`
export const FailureImg = styled.img`
  height: 30vh;
  width: 15vw;
`
export const FailurePara = styled.p`
  color: #475569;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 17px;
`
