import React from 'react'

const Infobox = ({ topic }) => {
  return (
    <dl>
      <div
        className="bg-white px-2 py-1 sm:grid sm:grid-cols-3 sm:gap-2 sm:px-6">
        <dt className="text-sm font-medium text-gray-500">
          Created by
        </dt>
        <dd
          className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          {topic.data.creator}
        </dd>
      </div>
      <div
        className="bg-white px-2 py-1 sm:grid sm:grid-cols-3 sm:gap-2 sm:px-6">
        <dt className="text-sm font-medium text-gray-500">
          First release
        </dt>
        <dd
          className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          {topic.data.first_release}
        </dd>
      </div>
      <div
        className="bg-white px-2 py-1 sm:grid sm:grid-cols-3 sm:gap-2 sm:px-6">
        <dt className="text-sm font-medium text-gray-500">
          Url
        </dt>
        <dd
          className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          <a href={topic.data.url} rel="noreferrer" target="_blank">
            {topic.data.url}
          </a>
        </dd>
      </div>
      {(() => {
        if (topic.data.another_url) {
          return (
            <div
              className="bg-white px-2 py-1 sm:grid sm:grid-cols-3 sm:gap-2 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Url
              </dt>
              <dd
                className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <a href={topic.data.another_url} rel="noreferrer"
                   target="_blank">
                  {topic.data.another_url}
                </a>
              </dd>
            </div>
          )
        }
      })()}
    </dl>
  )
}

export default Infobox
