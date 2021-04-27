import { useContext } from 'react'
import { AppContext } from 'context'

const Sections = () => {
  return (
    <div className="border-b h-24 px-16 flex items-center justify-between">
      <Item>Atoms</Item>
      <Item>Molecules</Item>
      <Item>Organisms</Item>
      <Item>Template</Item>
    </div>
  )
}

const Item = ({ children }) => <span>{children}</span>

export default Sections
