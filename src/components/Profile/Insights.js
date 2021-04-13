import React, { useEffect, useState } from 'react'
import * as users from '../../services/users'

const Insights = ({ username }) => {
  const [insights, setInsights] = useState()

  useEffect(() => {
    (async () => {
      const insights = await users.insights(username)

      setInsights({
        data: insights
      })
    })()
  }, [username])

  return (
    <dl>
      {insights && insights.data.map((insight) => {
        return (
          <div key={insight.id}
               className="bg-white px-2 py-1 sm:grid sm:grid-cols-3 sm:gap-2 sm:px-6">
            <dt
              className="text-sm font-medium text-gray-500">{insight.name}</dt>
            <dd
              className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {(() => {
                if (insight.is_interested === true) {
                  return (
                    <>is interested</>
                  )
                } else {
                  return (
                    <>
                      {insight.state}
                    </>
                  )
                }
              })()}
            </dd>
          </div>
        )
      })}
    </dl>
  )
}

export default Insights
