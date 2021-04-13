import logo from '../assets/logo.png'

const Landing = () => {
  return (
    <>
      <div className="text-gray-900 centered w-full h-screen flex items-center justify-center bg-gray-100 text-sm">
        <div className="w-full m-2 p-4 lg:w-1/3 lg:m-0 lg:p-8 bg-white shadow-lg">
          <div className="flex flex-row items-center uppercase font-bold text-lg tracking-wider justify-center mb-4">
            <a className="flex flex-row items-center justify-start children-x-1" href={'/'}>
              <img src={logo} alt="logo"/>
            </a>
          </div>
          <p className="text-secondary mb-4 text-center">
            We are working on something awesome.
          </p>
          <div className="flex text-sm mb-4">
            <a className="text-center w-full block px-4 py-2 uppercase font-bold text-white bg-black rounded-lg hover:bg-white hover:text-black focus:outline-none active:outline-none" href={'/'}>Go back
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Landing
