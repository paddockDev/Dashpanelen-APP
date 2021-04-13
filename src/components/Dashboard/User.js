import React, { useEffect, useState } from 'react'
import * as github from '../../services/github'

const User = () => {
  const [me, setMe] = useState()

  useEffect(() => {
    (async () => {
      const me = await github.me()

      setMe({
        data: me
      })
    })()
  }, [])

  return (
    <div className="flex w-full sm:w-1/2 md:w-1/4 p-4">
      <div
        className="bg-white text-black w-full rounded-3xl rounded-tr-3xl shadow flex flex-col justify-between">
        {me && (
          <a href={me.data.url} rel="noreferrer" target="_blank">
            <img className="rounded-tl-3xl rounded-tr-3xl"
                 src={me.data.avatarUrl} alt={me.data.login}/>
            <span
              className="inline-flex w-full bg-pink-600 text-white rounded-bl-3xl rounded-br-3xl h-6 px-3 justify-center items-center">{me.data.login}</span>
          </a>
        )}
      </div>
    </div>
  )
}

export default User
