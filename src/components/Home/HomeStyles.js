import styled from 'styled-components'

export const SideBarContainer = styled.div`
  background-color: #f9f9f9;
  width: 20%;
  padding: 30px;
  padding: 20px;
  height: 100vh;
`
export const MainHomeContainer = styled.ul`
  display: flex;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '  #f9f9f9 ')};
  flex-direction: row;
  margin-top: 0px;
  background-size: cover;
  width: 100vw;
  max-height: 100vh;
`
export const Container = styled.ul`
  width: 80%;
  height: 100vh;
`
