import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as topics from '../services/topics'
import InfoBox from '../components/Topics/Infobox'

const Topics = () => {
  const [topic, setTopic] = useState()
  const { slug } = useParams()

  useEffect(() => {
    (async () => {
      const topic = await topics.bySlug(slug)

      setTopic({
        data: topic
      })
    })()
  }, [slug])

  return (
    <>
      {topic && (
        <>
          <header className="bg-white shadow">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold text-gray-900">
                {topic.data.name}
              </h1>
            </div>
          </header>
          <main>
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
              <div className="flex flex-wrap">
                <div className="flex w-full sm:w-1/2 md:w-3/4 py-3 px-2">
                  <div>
                    {topic.data.description}
                  </div>
                </div>
                <div className="flex w-full sm:w-1/2 md:w-1/4 py-3 px-2">
                  <InfoBox topic={topic}/>
                </div>
              </div>
            </div>
          </main>
        </>
      )}
    </>
  )
}

export default Topics
