import Select from 'react-select'
import React, { useState } from 'react'
import * as me from '../../services/me'

const CreateTopic = () => {
  const [insight, setInsight] = useState({
    name: "",
    is_interested: false
  })

  const options = [
    {
      value: null,
      label: 'No Skill',
    },
    {
      value: 'expert',
      label: 'Expert',
    },
    {
      value: 'skilled',
      label: 'Skilled',
    },
    {
      value: 'competence',
      label: 'Competence',
    },
    {
      value: 'advanced',
      label: 'Advanced',
    },
    {
      value: 'newbie',
      label: 'Newbie',
    }
  ]

  const handleChange = (e) => {
    const target = e.target
    const value = target && (target.type === 'checkbox' ? target.checked : target.value)
    const name = target && target.name

    setInsight((prevState) => ({
        ...prevState,
        [target ? name : 'state']: target ? value : e.value
      })
    )
  }

  const handleAddInsight = (e) => {
    e.preventDefault()
    addInsight(insight)
  }

  const addInsight = async (data) => {
    await me.addInsight(data)
  }

  return (
    <form className="flex-1 mt-6 xl:mt-0">
      <div>
        <input type="text"
               className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
               name="name" placeholder="Topic"
               value={insight.name}
               onChange={handleChange}/>
      </div>
      <div className="mt-3">
        <Select options={options} id="update-profile-languages" name="state"
                placeholder={insight.state}
                value={insight.state}
                onChange={handleChange}/>
      </div>
      <div className="mt-3">
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input type="checkbox" name="is_interested"
                   className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                   checked={insight.is_interested}
                   onChange={handleChange}/>
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="is_interested"
                   className="font-medium text-gray-700">
              Interested?
            </label>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <button onClick={handleAddInsight} type="submit"
                className="px-3 py-2 uppercase font-bold text-white bg-black rounded-lg hover:bg-white hover:text-black focus:outline-none active:outline-none">Add
        </button>
      </div>
    </form>
  )
}

export default CreateTopic
