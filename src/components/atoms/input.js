import { useContext } from 'react'
import { AppContext } from 'context'

export const Input = () => {
  const { color, spacing, radius, style } = useContext(AppContext)

  return (
    <div>
      <label htmlFor="email" className="sr-only">
        Email
      </label>
      <input
        type="text"
        name="email"
        id="email"
        className={`shadow-sm focus:ring-${color}-500 focus:border-${color}-500 block w-full sm:text-sm border-${color}-300 rounded-${radius}`}
        placeholder="you@example.com"
      />
    </div>
  )
}
