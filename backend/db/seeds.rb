# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end
require "faker"

puts "Seeding properties..."

Property.destroy_all

US_STATES = Property::US_STATES

20.times do
  Property.create!(
    name: Faker::Company.name,
    address1: Faker::Address.street_address,
    address2: [Faker::Address.secondary_address, nil].sample,
    city: Faker::Address.city,
    state: US_STATES.sample,
    zip: Faker::Address.zip_code,
    year_built: rand(1800..Date.current.year),
    website_url: Faker::Internet.url
  )
end

puts "Created #{Property.count} properties."

