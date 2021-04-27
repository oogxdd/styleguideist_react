import { createContext, useState } from 'react'

const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [component, setComponent] = useState('green')
  const [section, setSection] = useState('green')

  const [color, setColor] = useState('green')
  const [spacing, setSpacing] = useState('2')
  const [radius, setRadius] = useState('sm')
  const [style, setStyle] = useState('default')

  return (
    <AppContext.Provider
      value={{
        color,
        spacing,
        radius,
        style,
        setColor,
        setSpacing,
        setRadius,
        setStyle,

        component,
        section,
        setComponent,
        setSection,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { AppProvider, AppContext }
