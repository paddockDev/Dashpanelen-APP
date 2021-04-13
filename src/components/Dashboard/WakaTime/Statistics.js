import React from 'react'

const Statistics = () => {
  return (
    <div className="flex w-full sm:w-1/2 md:w-1/4 p-4">
      <div
        className="bg-white text-black w-full rounded-3xl shadow flex flex-col justify-between">
        <div className="text-center py-5">
          You are not connected to <a href="https://www.wakatime.com/" rel="noreferrer" target="_blank">Wakatime.com</a> to see your weekly statistics to your programming languages.
        </div>
      </div>
    </div>
  )
}

export default Statistics
