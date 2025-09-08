require 'rails_helper'

RSpec.describe "Properties API", type: :request do
  describe "GET /api/properties" do
    it "returns a list of properties" do
      property1 = create(:property)
      property2 = create(:property)

      get "/api/properties"

      expect(response).to have_http_status(:ok)

      body = JSON.parse(response.body)

      expect(body).to be_an(Array)
      expect(body.size).to eq(2)
      expect(body.first).to include(
        "id" => property1.id,
        "name" => property1.name,
        "address1" => property1.address1,
        "city" => property1.city,
        "state" => property1.state,
        "zip" => property1.zip,
        "year_built" => property1.year_built,
        "website_url" => property1.website_url
      )
    end
  end

  describe "GET /api/properties/:id" do
    it "returns a single property" do
      property = create(:property)

      get "/api/properties/#{property.id}"

      expect(response).to have_http_status(:ok)

      body = JSON.parse(response.body)

      expect(body).to include(
        "id" => property.id,
        "name" => property.name,
        "address1" => property.address1,
        "city" => property.city,
        "state" => property.state,
        "zip" => property.zip,
        "year_built" => property.year_built,
        "website_url" => property.website_url
      )
    end

    it "returns 404 if the property does not exist" do
      get "/api/properties/999999"

      expect(response).to have_http_status(:not_found)
    end
  end
end
