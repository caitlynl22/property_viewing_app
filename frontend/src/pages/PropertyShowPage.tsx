import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import PropertyCard from "../components/PropertyCard"

export default function PropertyShowPage() {
  const { id } = useParams()
  const [property, setProperty] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get(`/api/properties/${id}`)
      .then((response) => setProperty(response.data))
      .catch((error) => console.error("Error fetching property:", error))
      .finally(() => setLoading(false))
  }, [id])

  if (!property) {
    return <p>Property not found.</p>
  }

  return (
    <div className="container mx-auto p-4">
      {loading && <p>Loading property details...</p>}
      <h2 className="text-2xl font-bold mb-4">Property Details</h2>
      <PropertyCard property={property} />
    </div>
  )
}
