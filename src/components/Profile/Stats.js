import { useEffect, useState } from 'react'
import * as users from '../../services/users'

const Stats = ({ username }) => {
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
    <div
      className="mt-6 lg:mt-0 flex-1 flex items-center justify-center px-5 border-t lg:border-0 border-gray-200 pt-5 lg:pt-0">
      <div className="text-center rounded-md w-24 py-3">
        <div
          className="font-medium text-black text-xl"> {insights && insights.data.countLanguage}
        </div>
        <div className="text-gray-600">Languages</div>
      </div>
      <div className="text-center rounded-md w-24 py-3">
        <div
          className="font-medium text-black text-xl"> {insights && insights.data.countFramework}
        </div>
        <div className="text-gray-600">Frameworks</div>
      </div>
    </div>
  )
}

export default Stats
