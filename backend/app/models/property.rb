class Property < ApplicationRecord
  US_STATES = %w[
    AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD
    MA MI MN MS MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI
    SC SD TN TX UT VT VA WA WV WI WY DC
  ].freeze
  has_many :units, dependent: :destroy

  validates :name, presence: true
  validates :address1, presence: true
  validates :city, presence: true
  validates :state,
    presence: true,
    inclusion: { in: US_STATES }
  validates :zip,
    presence: true,
    format: { with: /\A\d{5}(-\d{4})?\z/,
      message: "should be in the format 12345 or 12345-6789" }
  validates :year_built,
    numericality: {
      only_integer: true,
      greater_than: 1600,
      less_than_or_equal_to: Date.current.year
    },
    allow_nil: true
end
