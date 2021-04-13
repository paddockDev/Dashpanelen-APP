import React, { useEffect, useState } from 'react'
import * as github from '../../services/github'

const Issues = () => {
  const [issues, setIssues] = useState()

  useEffect(() => {
    (async () => {
      const issues = await github.issues()

      setIssues({
        data: issues
      })
    })()
  }, [])

  return (
    <div className="flex w-full sm:w-1/2 md:w-1/4 p-4">
      <div
        className="bg-white text-black w-full rounded-3xl shadow flex flex-col justify-between">
        <div className="text-center py-5">
          <ul className="p-0 m-0">
            {issues && issues.data.map((issue) => {
              return (
                <li className="relative" key={issue.node.id}>
                  <a href={issue.node.url} target="_blank" rel="noreferrer"
                    className="flex w-full px-4 py-2 text-left justify-start items-center">
                    <span
                      className="text-base font-sans block font-medium truncate">
                      {issue.node.title}
                    </span>
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
        <p
          className="m-0 p-8 pt-0 h-20 flex justify-center items-end text-xl font-medium leading-6 font-sans">
          <span className="truncate">Open issues</span>:<b
          className="px-8">{issues && issues.data.length}</b></p>
      </div>
    </div>
  )
}

export default Issues
