class GeneratePropertyDescriptionJob < ApplicationJob
  queue_as :default

  def perform(property_id)
    property = Property.find(property_id)
    return if property.description.present?

    description = OpenAiService.new(property).call
    property.update(description: description)
  rescue => e
    Rails.logger.error("Failed to generate description for Property ID #{property_id}: #{e.message}")
  end
end
