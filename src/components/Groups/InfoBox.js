const Infobox = ({ group }) => {
  return (
    <dl>
      <div
        className="bg-white px-2 py-1 sm:grid sm:grid-cols-3 sm:gap-2 sm:px-6">
        <dt className="text-sm font-medium text-gray-500">
          Url
        </dt>
        <dd
          className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          <a href={group.data.homepage} rel="noreferrer" target="_blank">
            {group.data.homepage}
          </a>
        </dd>
      </div>
    </dl>
  )
}

export default Infobox
