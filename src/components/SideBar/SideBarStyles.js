import styled from 'styled-components'

export const SideMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  padding-left: 20px;
  background-color: ${props => (props.isDarkTheme ? '#181818' : ' #f9f9f9')};
  width: 20vw;
`

export const HomeHeading = styled.h1`
  color: ${props => (props.isDarkTheme ? '#e2e8f0' : ' #475569')};
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 17px;
  margin-left: 20px;
`
export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const SideBarHome = styled.div`
  display: flex;
  flex-direction: row;
`
export const Icon = styled.div`
  font-size: 25px;
  color: #616e7c;
  margin-top: 7px;
`
export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-end;
`
export const Heading = styled.p`
  font-size: 23px;
  font-family: 'Roboto';
  color: ${props => (props.isDarkTheme ? '#e2e8f0' : ' #616e7c')};
  margin-top: 7px;
  margin-left: 10px;
  margin-top: 0px;
  font-weight: bold;
`
export const SocialMedia = styled.div`
  display: flex;
  flex-direction: row;
`
export const ImageEle = styled.img`
  height: 7vh;
  width: 3.5vw;
  margin-left: 10px;
`
export const Para = styled.p`
  font-size: 15px;
  font-family: 'Roboto';

  color: ${props => (props.isDarkTheme ? '#e2e8f0' : ' #616e7c')};
  margin-top: 7px;
  font-weight: bold;
  width: 100%;
  margin-top: 20px;
`
