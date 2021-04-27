import { useContext } from 'react'
import { AppContext } from 'context'

const Components = () => {
  return (
    <div className="w-96 border-r flex flex-col">
      <Component>Button</Component>
      <Component>Input</Component>
      <Component>Checkbox</Component>
      <Component>Slider</Component>
    </div>
  )
}

const Component = ({ children }) => <span>{children}</span>

export default Components
