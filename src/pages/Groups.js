import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as groups from '../services/groups'
import InfoBox from '../components/Groups/InfoBox'

const Groups = () => {
  const [group, setGroup] = useState()
  const { slug } = useParams()

  useEffect(() => {
    (async () => {
      const group = await groups.bySlug(slug)

      setGroup({
        data: group
      })
    })()
  }, [slug])

  return (
    <>
      {group && (
        <>
          <header className="bg-white shadow">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold text-gray-900">
                {group.data.name}
              </h1>
            </div>
          </header>
          <main>
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
              <div className="flex flex-wrap">
                <div className="flex w-full sm:w-1/2 md:w-3/4 py-3 px-2">
                  <div>
                    {group.data.description}
                  </div>
                </div>
                <div className="flex w-full sm:w-1/2 md:w-1/4 py-3 px-2">
                  <InfoBox group={group}/>
                </div>
              </div>
            </div>
          </main>
        </>
      )}
    </>
  )
}

export default Groups
