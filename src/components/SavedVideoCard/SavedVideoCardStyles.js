import styled from 'styled-components'

export const VideoCardContainer = styled.li`
  display: flex;
  flex-direction: row;
  background-color: transparent;
  width: 100vw;
  list-style-type: none;
  margin: 20px;
`

export const ThumbnailImg = styled.img`
  width: 100%;
  height: 30vh;
`

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 20px;
  margin-top: 20px;
  width: 40%;
`

export const Data = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => (props.isDarkTheme ? ' #e2e8f0' : '#383838')};
  font-weight: 450;
`

export const ChannelName = styled.p`
  font-family: 'Roboto';
  margin-top: 0px;
  font-size: 17px;
  color: #64748b;
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
`
