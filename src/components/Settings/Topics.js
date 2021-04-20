import React, { useEffect, useState } from 'react'
import * as me from '../../services/me'
import Select from 'react-select'

const Topics = ({ user }) => {
  const [topics, setTopics] = useState()
  const [currentUser, setCurrentUser] = useState([])

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

  const handleCheckbox = (id) => {
    const newTopics = [...topics.data];

    newTopics.forEach(topic => topic.id === id && (topic.is_interested = !topic.is_interested));
    setTopics({
      ...topics,
      data: newTopics
    });
  }

  const handleSelect = (id, e) => {
    const newTopics = [...topics.data];

    newTopics.forEach(topic => topic.id === id && (topic.state = e.value));
    setTopics({
      ...topics,
      data: newTopics
    })
  }

  const handleDelete = async (id) => {
    await me.deleteInsight(id)
  }

  const updateInsights = async (data) => {
    await me.updateInsights(data)
  }

  const handleUpdateInsights = (e) => {
    e.preventDefault()
    updateInsights(topics)
  }

  useEffect(() => {
    (async () => {
      const topics = await me.insights()

      setTopics(topics)
    })()
  }, [])

  return (
    <div className="flex-1 mt-6 xl:mt-0">
      <dl>
        {topics && topics.data.map((topic) => {
          return (
            <div
              className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              key={topic.id}>
              <dt
                className="text-sm font-medium text-gray-500">{topic.name}</dt>
              <dd
                className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <Select options={options} id="update-profile-languages"
                        name="state"
                        placeholder={topic.state}
                        value={topic.state}
                        onChange={e => handleSelect(topic.id, e)}/>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input type="checkbox" name="is_interested"
                           checked={topic.is_interested}
                           className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                           value={topic.is_interested}
                           onChange={() => handleCheckbox(topic.id)}/>
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="is_interested"
                           className="font-medium text-gray-700">
                      Interested?
                    </label>
                    <button type="button"
                            onClick={() => handleDelete(topic.id)}>Delete
                    </button>
                  </div>
                </div>
              </dd>
            </div>
          )
        })}
      </dl>
      <div className="mt-1">
        <button onClick={handleUpdateInsights} type="submit"
                className="px-3 py-2 uppercase font-bold text-white bg-black rounded-lg hover:bg-white hover:text-black focus:outline-none active:outline-none"> Update
        </button>
      </div>
    </div>
  )
}

export default Topics
