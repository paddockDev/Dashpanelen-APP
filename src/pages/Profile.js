import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AtSymbolIcon } from '@heroicons/react/outline'
import * as users from '../services/users'
import Insights from '../components/Profile/Insights'

const Profile = () => {
  const [user, setUser] = useState()
  const { username } = useParams()

  useEffect(() => {
    (async () => {
      const user = await users.profile(username)

      setUser({
        data: user
      })
    })()
  }, [username])

  return (
    <div>
      <div className="relative rounded-md border-transparent px-5 pt-5 mt-5">
        <div
          className="flex flex-col lg:flex-row border-b border-gray-200 pb-5 -mx-5">
          <div
            className="flex flex-1 px-5 items-center justify-center lg:justify-start">
            <div
              className="w-20 h-20 sm:w-24 sm:h-24 flex-none lg:w-32 lg:h-32 image-fit relative">
              <img alt={user && user.data.username}
                   className="rounded-full" src={user && user.data.avatar_url}/>
            </div>
            <div className="ml-5">
              <div
                className="w-40 sm:w-40 truncate sm:whitespace-normal font-medium text-lg">{user && user.data.name}
              </div>
              <div className="text-black">{user && user.data.profile.job}</div>
            </div>
          </div>
          <div
            className="mt-6 lg:mt-0 flex-1 px-5 border-l border-r border-gray-200 border-t lg:border-t-0 pt-5 lg:pt-0">
            <div
              className="font-medium text-center lg:text-left lg:mt-3"> Contact
              Details
            </div>
            <div
              className="flex flex-col justify-center items-center lg:items-start mt-4">
              <div className="truncate sm:whitespace-normal flex items-center">
                <AtSymbolIcon className="w-4 h-4"/>
                {user && user.data.email}
              </div>
            </div>
          </div>
          <div
            className="mt-6 lg:mt-0 flex-1 flex items-center justify-center px-5 border-t lg:border-0 border-gray-200 pt-5 lg:pt-0">
            <div className="text-center rounded-md w-24 py-3">
              <div
                className="font-medium text-black text-xl"> 0
              </div>
              <div className="text-gray-600">Languages</div>
            </div>
            <div className="text-center rounded-md w-24 py-3">
              <div
                className="font-medium text-black text-xl"> 0
              </div>
              <div className="text-gray-600">Frameworks</div>
            </div>
          </div>
        </div>
      </div>
      <Insights username={username}/>
    </div>
  )
}

export default Profile
