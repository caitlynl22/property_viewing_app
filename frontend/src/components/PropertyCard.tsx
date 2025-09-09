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
            <dd>
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
        <ul className="list-disc list-inside text-sm space-y-1 p-4 pb-8">
          {property.units.map((unit) => (
            <li key={unit.id}>
              {unit.name} — {unit.bedroom_count} bd / {unit.bathroom_count} ba, {unit.unit_size} sqft
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-sm text-gray-500">This property has no units.</p>
      )}
    </div>
  )
}
