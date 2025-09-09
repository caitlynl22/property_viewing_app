export default function PropertyCard({ property }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <h2 className="text-xl font-semibold p-4">{property.name}</h2>
      <dl className="text-left p-8 space-y-2">
        <div>
          <dt className="font-semibold">Address:</dt>
          <dd>
            <p>{property.address1}{property.address2 && `, ${property.address2}`}</p>
            <p>{property.city}, {property.state} {property.zip}</p>
          </dd>
        </div>

        <div className="flex space-x-2">
          <dt className="font-semibold">Year Built:</dt>
          <dd>{property.year_built}</dd>
        </div>

        {property.website_url && (
          <div className="flex space-x-2">
            <dt className="font-semibold">Website:</dt>
            <dd className="wrap-anywhere">
              <a
                href={property.website_url}
                className="text-blue-500 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {property.website_url}
              </a>
            </dd>
          </div>
        )}
      </dl>
      <h3 className="text-lg font-semibold">Available Units:</h3>
      {property.units.length > 0 ? (
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-16">
              <table className="relative min-w-full divide-y divide-gray-300 dark:divide-white/15 mx-8">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0 dark:text-white"
                    >
                      Unit
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white">
                      Beds
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white">
                      Baths
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white">
                      Sqft
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-white/10">
                  {property.units.map((unit) => (
                    <tr key={unit.id}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0 dark:text-white text-left">
                      {unit.name}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-400 text-left">
                      {unit.bedroom_count}
                    </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-400 text-left">
                      {unit.bathroom_count}
                    </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-400 text-left">
                      {unit.unit_size}
                    </td>
                  </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-sm text-gray-500">This property has no units.</p>
      )}
    </div>
  )
}
