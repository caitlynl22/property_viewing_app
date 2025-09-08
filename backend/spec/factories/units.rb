FactoryBot.define do
  factory :unit do
    sequence(:name) { |n| "Apt #{n}" }
    bedroom_count { Faker::Number.between(from: 0, to: 5) }
    bathroom_count { Faker::Number.between(from: 0, to: 4) }
    unit_size { Faker::Number.between(from: 300, to: 5000) }
    property
  end
end
