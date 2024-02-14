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
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '  #f9f9f9 ')};
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
export const TrendHeading = styled.h1`
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : ' #181818')};

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
