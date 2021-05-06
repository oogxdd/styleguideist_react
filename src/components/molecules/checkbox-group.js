import { useContext } from 'react'
import { AppContext } from 'context'

export const CheckboxGroup = () => {
  const { color, spacing, radius, style } = useContext(AppContext)

  return (
    <div className="flex items-center justify-center">
        <fieldset>
          <legend className="text-base font-medium text-gray-900">By Email</legend>
          <div className="mt-4 space-y-4">
            <div className="relative flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="comments"
                  name="comments"
                  type="checkbox"
                  className={`form-checkbox h-4 w-4 text-${color}-600 rounded-${radius} focus:ring-${color}-500 border-${color}-300`}
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="comments" className="font-medium text-gray-700">
                  Comments
                </label>
                <p className="text-gray-500">Get notified when someones posts a comment on a posting.</p>
              </div>
            </div>
            <div className="relative flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="candidates"
                  name="candidates"
                  type="checkbox"
                  className={`form-checkbox h-4 w-4 text-${color}-600 rounded-${radius} focus:ring-${color}-500 border-${color}-300`}
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="candidates" className="font-medium text-gray-700">
                  Candidates
                </label>
                <p className="text-gray-500">Get notified when a candidate applies for a job.</p>
              </div>
            </div>
            <div className="relative flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="offers"
                  name="offers"
                  type="checkbox"
                  className={`form-checkbox h-4 w-4 text-${color}-600 rounded-${radius} focus:ring-${color}-500 border-${color}-300`}
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="offers" className="font-medium text-gray-700">
                  Offers
                </label>
                <p className="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
              </div>
            </div>
          </div>
        </fieldset>
    </div>
  )
}
