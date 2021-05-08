import { useContext } from 'react'
import { AppContext } from 'context'

export const Checkbox = (props) => {
  const { color, spacing, radius, style } = useContext(AppContext)

  return (
    <div className="relative flex items-start">
        <div className="flex items-center h-5">
            <input
            type="checkbox"
            className={`form-checkbox h-4 w-4 text-${color}-600 rounded-${radius} focus:ring-${color}-500 border-gray-300`}
            />
          <div className="ml-3 text-sm">
            <label htmlFor="label" className="font-medium text-gray-700">
              {props.label}
            </label>
          </div>
        </div>
    </div>
  )
}
