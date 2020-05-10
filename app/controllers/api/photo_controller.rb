class Api::PhotoController < ApplicationController
  def index
    @photos = Photo.all
    render :json => {
      photos: @photos,
    }
  end

  def show
    @photo = Photo.find params[:id]
    render :json => {
      photo: @photo,
    }
  end

  def create
  end

  def destroy
  end
end
