import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { register } from '../../services/auth'
import Background from './Background'

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const history = useHistory()

  const handleRegister = async (e) => {
    e.preventDefault()

    await register(email, password, name, username)

    history.push('/')
  }

  return (
    <>
      <div className="w-full flex flex-row h-screen overflow-hidden">
        <Background/>
        <div
          className="w-full lg:w-1/2 bg-white text-default p-8 lg:p-24 flex flex-col items-center justify-center">
          <p className="text-3xl font-bold font-poppins mb-4">Register to
            Dashpanelen</p>
          <form className="flex flex-col text-sm mb-4 w-full">
            <div className="w-full mb-4">
              <label className="block">
                <span className="text-default">Email</span>
                <input name="email" id="email" type="email" required
                       className="form-input mt-1 text-xs block w-full bg-white"
                       placeholder="Enter your email"
                       onChange={(e) => setEmail(e.target.value)}/>
              </label>
            </div>
            <div className="w-full mb-4">
              <label className="block">
                <span className="text-default">Password</span>
                <input name="password" id="password" type="password" required
                       className="form-input mt-1 text-xs block w-full bg-white"
                       placeholder="Enter your password"
                       onChange={(e) => setPassword(e.target.value)}/>
              </label>
            </div>
            <div className="w-full mb-4">
              <label className="block">
                <span className="text-default">Name</span>
                <input name="name" id="name" type="text" required
                       className="form-input mt-1 text-xs block w-full bg-white"
                       placeholder="Enter your name"
                       onChange={(e) => setName(e.target.value)}/>
              </label>
            </div>
            <div className="w-full mb-4">
              <label className="block">
                <span className="text-default">Username</span>
                <input name="username" id="username" type="text" required
                       className="form-input mt-1 text-xs block w-full bg-white"
                       placeholder="Enter your username"
                       onChange={(e) => setUsername(e.target.value)}/>
              </label>
            </div>
            <div className="w-full">
              <button onClick={handleRegister} type="submit"
                      className="px-4 py-3 uppercase font-bold text-white bg-black rounded-lg hover:bg-white hover:text-black focus:outline-none active:outline-none">Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Register
