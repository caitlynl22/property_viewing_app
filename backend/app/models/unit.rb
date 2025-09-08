class Unit < ApplicationRecord
  belongs_to :property

  validates :name,
    presence: true,
    uniqueness: { scope: :property_id,
                  message: "must be unique within a property" }
  validates :bedroom_count,
    presence: true,
    numericality: { only_integer: true, greater_than_or_equal_to: 0 }
  validates :bathroom_count,
    presence: true,
    numericality: { only_integer: true, greater_than_or_equal_to: 0 }
  validates :unit_size, numericality: { only_integer: true, greater_than: 0 }, allow_nil: true
end
