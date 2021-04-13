import React from 'react'
import bgLogin from '../../assets/bg-login.jpg'
import logo from '../../assets/logo-white.png'

const Background = () => {
  return (
    <div
      className="hidden lg:flex lg:flex-col w-1/2 bg-black text-white p-8 items-start justify-between relative">
      <img alt="bg" src={bgLogin}
           className="absolute inset-0 z-0 object-contain h-auto w-full"/>
      <div
        className="bg-transparent text-white flex flex-row items-center uppercase font-bold text-2xl tracking-wider justify-start z-10">
        <a className="flex flex-row items-center justify-start" href="/">
          <img src={logo} alt="logo"/>
        </a>
      </div>
      <div className="flex flex-col z-10">
        <p className="text-3xl font-bold font-poppins mb-4">Welcome
          to Dashpanelen!</p>
        <p className="text-sm font-thin">Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies
          eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas
          semper. Aenean ultricies mi vitae est. Mauris placerat eleifend
          leo.</p>
      </div>
      <div
        className="flex flex-row items-center justify-between w-full text-xs z-10">
        <div className="text-white">© Dashpanelen 2021</div>
        <div className="flex flex-row ml-auto">
          <div className="px-1"><a href={'/'}>Privacy policy</a></div>
          <div className="px-1"><a href={'/'}>Terms of service</a></div>
          <div className="px-1"><a href={'/'}>Contact us</a></div>
        </div>
      </div>
    </div>
  )
}

export default Background
