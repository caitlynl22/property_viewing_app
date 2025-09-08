export default function PropertyCard({ property }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <h2 className="text-xl font-semibold p-4">{property.name}</h2>
      <ul className="p-4">
        <li>
          <h3>Address:</h3>
          <p>{property.address1}{property.address2 && `, ${property.address2}`}</p>
          <p>{property.city}, {property.state} {property.zip}</p>
        </li>
        <li>
          <h3>Year Built:</h3>
          <p>{property.year_built}</p>
        </li>
        {property.website_url &&(
          <li>
            <h3>Website:</h3>
            <a href={property.website_url} className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
              {property.website_url}
            </a>
          </li>
        )}
      </ul>
    </div>
  )
}
