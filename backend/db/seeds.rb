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

puts "Clearing existing data..."
Unit.destroy_all
Property.destroy_all

puts "Seeding properties and units..."

US_STATES = Property::US_STATES

20.times do
  property = Property.create!(
    name: Faker::Company.name,
    address1: Faker::Address.street_address,
    address2: [ Faker::Address.secondary_address, nil ].sample,
    city: Faker::Address.city,
    state: US_STATES.sample,
    zip: Faker::Address.zip_code,
    year_built: rand(1800..Date.current.year),
    website_url: Faker::Internet.url
  )

  # Each property gets between 2–5 units
  rand(2..5).times do |n|
    Unit.create!(
      property: property,
      name: "Apt #{n + 1}",
      bedroom_count: rand(0..5),
      bathroom_count: rand(1..4),
      unit_size: rand(300..5000)
    )
  end
end

puts "Created #{Property.count} properties with #{Unit.count} units."
