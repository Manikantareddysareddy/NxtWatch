import styled from 'styled-components'

export const SideContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`
export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : ' #f9f9f9')};
  min-height: 100vh;
  width: 100%;
  overflow-y: scroll;
`
export const LikeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
`
export const SecondDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const TitleHeading = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : ' #181818')};
  font-weight: 450;
`

export const ViewsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 0px;
  justify-content: space-between;
`
export const Views = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  margin-top: 0px;

  color: #64748b;
`
export const ViewsDate = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  margin-top: 0px;
  font-weight: 450;
  margin-right: 10px;
  color: #64748b;
  margin-left: 20px;
`
export const VideoContainer = styled.div`
  width: 100%;
`
export const VideoDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  padding: 20px;
`
export const LikePara = styled.p`
  color: ${props => (props.isliked ? '#2563eb' : ' #64748b')};
  font-family: 'Roboto';
  font-size: 18px;
  margin-left: 5px;
  margin-top: 0px;
`
export const LikeBtn = styled.button`
  background-color: transparent;
  border: 0 none;
  font-size: 23px;
  display: flex;
  flex-direction: row;

  cursor: pointer;
  color: ${props => (props.isliked ? '#2563eb' : ' #64748b')};
  margin-top: 5px;
`
export const DisLikePara = styled.p`
  color: ${props => (props.isdislike ? '#2563eb' : ' #64748b')};
  font-family: 'Roboto';
  font-size: 18px;
  margin-left: 5px;
  margin-top: 0px;
`
export const SavePara = styled.p`
  color: ${props => (props.isSaved ? '#2563eb' : ' #64748b')};
  font-family: 'Roboto';
  font-size: 18px;
  margin-left: 5px;
  margin-top: 0px;
`
export const DisLikeBtn = styled.button`
  background-color: transparent;
  border: 0 none;
  display: flex;
  flex-direction: row;

  cursor: pointer;
  font-size: 23px;
  color: ${props => (props.isdislike ? '#2563eb' : ' #64748b')};
  margin-top: 5px;
`

export const SaveBtn = styled.button`
  background-color: transparent;
  border: 0 none;
  font-size: 23px;
  display: flex;
  flex-direction: row;

  cursor: pointer;
  color: ${props => (props.isSaved ? '#2563eb' : ' #64748b')};
`
export const HorizentalLine = styled.h1`
  color: red;
  width: 100%;
  background-color: #94a3b8;
  height: 2px;
`
export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`

export const ProfileImg = styled.img`
  height: 8vh;
  width: 4vw;
  margin-right: 10px;
`

export const Data = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`
export const ChannelName = styled.p`
  font-family: 'Roboto';
  margin-top: 0px;
  font-size: 20px;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : ' #181818')};
  font-weight: 450;
`
export const Desc = styled.p`
  font-family: 'Roboto';
  margin-top: 0px;
  font-size: 17px;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : ' #181818')};
  font-weight: 450;
`
export const Subs = styled.p`
  font-family: 'Roboto';
  margin-top: 0px;
  font-size: 17px;
  color: #64748b;
  font-weight: 450;
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
