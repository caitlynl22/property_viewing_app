import { useState, useEffect } from "react"
import axios from "axios"
import PropertyCard from "../components/PropertyCard"

export default function PropertiesPage() {
  const [properties, setProperties] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get("/api/properties")
      .then((response) => setProperties(response.data))
      .catch((error) => console.error("Error fetching properties:", error))
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className="container mx-auto p-4">
      {loading && <p>Loading properties...</p>}
      <h1 className="text-2xl font-bold mb-8 dark:text-white">Properties with Availability</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  )
}
