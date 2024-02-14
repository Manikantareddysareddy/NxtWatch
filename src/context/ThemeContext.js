import React from 'react'

const ThemeContext = React.createContext({
  isDarkTheme: false,
  toggleTheme: () => {},
  savedVideos: [],
  savedTheVideo: () => {},
  isSaved: false,
})

export default ThemeContext
