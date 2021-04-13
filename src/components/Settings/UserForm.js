import React, { useState } from 'react'
import Select from 'react-select'
import * as me from '../../services/me'
import { updateProfile } from '../../services/me'


const UserForm = ({ user }) => {
  const [currentUser, setCurrentUser] = useState({})

  const options = [
    {
      value: 'de',
      label: 'German',
    },
    {
      value: 'en',
      label: 'English',
    },
    {
      value: 'se',
      label: 'Swedish',
    },
    {
      value: 'it',
      label: 'Italian',
    },
    {
      value: 'fr',
      label: 'French',
    }
  ]

  const handleInputChange = (e) => {
    setCurrentUser((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value
      })
    )
  }

  const [selectedValue, setSelectedValue] = useState(currentUser.lang || user.data.profile.lang)

  const handleChange = e => {
    setSelectedValue(e.value)
  }

  const updateUser = (e) => {
    e.preventDefault()
  }

  return (
    <form className="flex-1 mt-6 xl:mt-0">
      <div className="grid grid-cols-12 gap-x-5">
        <div className="col-span-12 xxl:col-span-6">
          <div>
            <label htmlFor="update-profile-name"
                   className="block text-sm font-medium text-gray-700">Display
              Name</label>
            <input id="update-profile-name" type="text"
                   className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                   name="name" placeholder="Name"
                   value={currentUser.name || user.data.name}
                   onChange={handleInputChange}/>
          </div>
          <div className="mt-3">
            <label htmlFor="update-profile-username"
                   className="block text-sm font-medium text-gray-700">User
              Name</label>
            <input id="update-profile-username" type="text"
                   className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                   name="username" placeholder="Username"
                   value={currentUser.username || user.data.username}
                   onChange={handleInputChange}/>
          </div>
          <div className="mt-3">
            <label htmlFor="update-profile-languages"
                   className="block text-sm font-medium text-gray-700">Language</label>
            <Select options={options} id="update-profile-languages" name="lang"
                    placeholder="Languages"
                    value={options.find(obj => obj.value === selectedValue)}
                    onChange={handleChange}/>
          </div>
          <div className="mt-3">
            <label htmlFor="update-profile-job"
                   className="block text-sm font-medium text-gray-700">Job
              title</label>
            <input id="update-profile-job" type="text"
                   className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                   placeholder="Job" name="job"
                   value={currentUser.job || user.data.profile.job}
                   onChange={handleInputChange}/>
          </div>
          <div className="mt-3">
            <label htmlFor="update-profile-description"
                   className="block text-sm font-medium text-gray-700">Profile
              description</label>
            <textarea id="update-profile-description" name="description"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                      placeholder="Description">{currentUser.description || user.data.profile.description}</textarea>
          </div>
        </div>
      </div>
      <div className="mt-1">
        <button onClick={() => handleUpdateUser()} type="submit"
                className="px-3 py-2 uppercase font-bold text-white bg-black rounded-lg hover:bg-white hover:text-black focus:outline-none active:outline-none"> Save
        </button>
      </div>
    </form>
  )
}

export default UserForm
