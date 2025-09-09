class OpenAiService
  def initialize(property:)
    @property = property
    @client = OpenAI::Client.new
  end

  def call
    response = @client.chat.completions.create(
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are a multifamily property manager, generate a property description based on the property information given." },
        { role: "user", content: @property }
      ],
      temperature: 0.7
    )

    content = response.choices.first.message.content
  rescue => e
    Rails.logger.error("OpenAI error: #{e.message}")
    nil
  end
end
