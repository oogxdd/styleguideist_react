import { useContext } from 'react'
import { AppContext } from 'context'

export const Checkbox = () => {
  const { color, spacing, radius, style } = useContext(AppContext)

  return (
    <div className="flex items-center justify-center">
        <label className="inline-flex items-center">
            <input
            type="checkbox"
            className={`form-checkbox h-5 w-5 text-${color}-600 rounded-${radius} focus:ring-${color}-500 border-${color}-300`}
            />
            <span className={`ml-2 text-${color}-700`}>label</span>
        </label>
    </div>
  )
}
