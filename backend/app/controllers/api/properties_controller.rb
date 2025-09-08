module Api
  class PropertiesController < ApplicationController
    def index
      @properties = Property.includes(:units).all
      render json: @properties.as_json(include: :units)
    end

    def show
      @property = Property.find(params[:id])
      render json: @property.as_json(include: :units)
    end
  end
end
