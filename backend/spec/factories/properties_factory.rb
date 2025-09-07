FactoryBot.define do
  factory :property do
    name { Faker::Company.name }
    address1 { Faker::Address.street_address }
    address2 { Faker::Address.secondary_address }
    city { Faker::Address.city }
    state { Faker::Address.state_abbr }
    zip { Faker::Address.zip_code }
    year_built { Faker::Number.between(from: 1900, to: 2024) }
    website { Faker::Internet.url }
  end
end
