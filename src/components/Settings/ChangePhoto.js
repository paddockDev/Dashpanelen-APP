const ChangePhoto = ({ user }) => {
  return (
    <div className="w-52 mx-auto xl:mr-0 xl:ml-6">
      <div className="border-2 border-dashed shadow-sm border-gray-200 rounded-md p-5">
        <div className="h-40 relative image-fit cursor-pointer zoom-in mx-auto">
          <img className="rounded-md" alt={user && user.data.username} src={user && user.data.avatar_url}/>
          <div className="w-5 h-5 flex items-center justify-center absolute rounded-full text-white bg-theme-6 right-0 top-0 -mr-2 -mt-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x w-4 h-4 w-4 h-4">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </div>
          <div className="mx-auto cursor-pointer relative mt-5">
            <button type="button" className="px-3 py-2 uppercase font-bold text-white bg-black rounded-lg hover:bg-white hover:text-black focus:outline-none active:outline-none"> Change Photo</button>
            <input type="file" className="w-full h-full top-0 left-0 absolute opacity-0"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChangePhoto
