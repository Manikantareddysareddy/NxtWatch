import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70vh;
`
export const NotFoundImg = styled.img`
  width: 400px;
`
export const NotFoundHeading = styled.h1`
  color: ${props => (props.isDarkTheme ? ' #e2e8f0' : '#0f0f0f')};
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 30px;
`
export const NotFoundPara = styled.p`
  color: #475569;
  font-family: 'Roboto';
  font-weight: normal;
  font-size: 17px;
`

export const MainHomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-size: cover;
  width: 100vw;
  max-height: 100vh;
`
export const Container = styled.div`
  width: 80%;
  height: 100vh;
  background-color: ${props => (props.isDarkTheme ? '#212121' : ' #ebebeb')};
`
