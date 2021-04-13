import React, { useEffect, useState } from 'react'
import * as me from '../services/me'
import ChangePhoto from '../components/Settings/ChangePhoto'
import UserForm from '../components/Settings/UserForm'

const Settings = () => {
  const [user, setUser] = useState()

  useEffect(() => {
    (async () => {
      const user = await me.profile()

      setUser({
        data: user
      })
    })()
  }, [])

  return (
    <div>
      <div className="relative flex items-center mt-8"><h2
        className="text-lg font-medium mr-auto">Update Profile</h2></div>
      <div className="grid grid-cols-12 gap-6">
        <div
          className="col-span-12 lg:col-span-4 xxl:col-span-3 flex lg:block flex-col-reverse">
          <div className="relative rounded-md border-transparent mt-5">
            {user && (
              <div className="relative flex items-center p-5">
                <div className="w-12 h-12 image-fit"><img
                  alt={user.data.username} className="rounded-full"
                  src={user.data.avatar_url}/>
                </div>

                <div className="ml-4 mr-auto">
                  <div
                    className="font-medium text-base">{user && user.data.name}</div>
                  <div
                    className="text-gray-600">{user && user.data.profile.job}</div>
                </div>
              </div>
            )}
            <div className="p-5 border-t border-gray-200">
              <a
                className="flex items-center text-theme-1 dark:text-theme-10 font-medium"
                href={'/settings'}>
                Personal Information
              </a>
              <a className="flex items-center mt-5" href={'/settings'}>
                Account Settings
              </a>
              <a className="flex items-center mt-5" href={'/settings'}>
                Change Password
              </a>
              <a className="flex items-center mt-5" href={'/settings'}>
                User Settings
              </a>
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-8 xxl:col-span-9">
          <div className="relative rounded-md border-transparent lg:mt-5">
            <div className="flex items-center p-5 border-b border-gray-200">
              <h2 className="font-medium text-base mr-auto">Display
                Information</h2>
            </div>
            <div className="p-5">
              {user && (
                <div className="flex flex-col-reverse xl:flex-row flex-col">
                  <UserForm user={user}/>
                  <ChangePhoto user={user}/>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings
