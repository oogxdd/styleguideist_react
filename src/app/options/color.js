import { useContext } from 'react'
import { AppContext } from 'context'

const colors = [
  'gray',
  'red',
  'yellow',
  'green',
  'blue',
  'indigo',
  'purple',
  'pink',
]

const Colors = () => {
  const { color: selectedColor, setColor } = useContext(AppContext)

  return (
    <div className="flex flex-col py-4 border-b">
      Color
      <div className="flex mt-1">
        {colors.map((color) => (
          <Color
            color={color}
            active={selectedColor === color}
            onClick={() => setColor(color)}
          />
        ))}
      </div>
    </div>
  )
}

const Color = ({ color, active, onClick }) => {
  let colorClassnames = ''
  if (active) {
    colorClassnames = `bg-${color}-500 border-2 border-${color}-700`
  } else {
    colorClassnames = `bg-${color}-300`
  }
  return <div className={`w-8 h-8 mr-1 ${colorClassnames}`} onClick={onClick} />
}

export default Colors
