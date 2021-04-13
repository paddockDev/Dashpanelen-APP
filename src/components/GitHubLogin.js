import React, { useState } from 'react'
import axios from 'axios'

const GitHubLogin = () => {
  const handleGitHub = (e) => {
    e.preventDefault()

    axios.get(`${process.env.REACT_APP_API_URL}github/redirect`)
      .then((res) => {
        return res.json()
      })
      .then(token => console.log(token))
      .catch((err) => console.log(err.message))
  }

  return (
    <button className="px-4 py-3 uppercase font-bold text-white bg-black rounded-lg hover:bg-white hover:text-black focus:outline-none active:outline-none" onClick={handleGitHub}>
      Login with GitHub
    </button>
  )
}

export default GitHubLogin
