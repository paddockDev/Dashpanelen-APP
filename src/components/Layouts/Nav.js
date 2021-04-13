import React, { useEffect, useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { logout } from '../../services/auth'
import logo from '../../assets/logo-white.png'
import * as me from '../../services/me'

const Nav = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const [authUser, setAuthUser] = useState()

  const history = useHistory()

  useEffect(() => {
    (async () => {
      const authUser = await me.profile()

      setAuthUser({
        data: authUser
      })
    })()
  }, [])

  const handleLogout = () => {
    logout()
    history.push('/')
  }

  return (
    <nav className="bg-white dark:bg-gray-800 shadow">
      <div className="max-w-full mx-auto px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a className="flex-shrink-0" href={'/home'}>
              <img className="h-8" src={logo}
                   alt={process.env.REACT_APP_NAME}/>
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <div className="ml-3 relative">
                <div className="relative inline-block text-left">
                  <div>
                    <button
                      onClick={() => setShowProfileMenu(!showProfileMenu)}
                      type="button"
                      className="flex items-center justify-center w-full rounded-md px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-50 hover:bg-gray-50 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500"
                      id="options-menu">
                      <img className="h-8 w-8 rounded-full"
                           src={authUser && authUser.data.avatar_url}
                           alt={authUser && authUser.data.username}/>
                    </button>
                  </div>
                  <div
                    className={`origin-top-right ${showProfileMenu ? 'block' : 'hidden'} absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-10`}>
                    <div className="py-1 " role="menu"
                         aria-orientation="vertical"
                         aria-labelledby="options-menu">
                      <Link to='/settings'
                         className="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
                         role="menuitem">
                                            <span className="flex flex-col">
                                                <span>
                                                    Settings
                                                </span>
                                            </span>
                      </Link>
                      <Link to={`/${authUser && authUser.data.username}`}
                         className="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
                         role="menuitem">
                                            <span className="flex flex-col">
                                                <span>
                                                    Account
                                                </span>
                                            </span>
                      </Link>
                      <Link to='/' onClick={() => handleLogout()}
                         className="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
                         role="menuitem">
                                            <span className="flex flex-col">
                                                <span>
                                                    Logout
                                                </span>
                                            </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
              <svg
                className="block h-8 w-8"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className="hidden h-8 w-8"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`md:hidden ${showMenu ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href={'/#'} onClick={() => handleLogout()}
             className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            Logout
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Nav
