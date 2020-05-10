class Api::PhotoController < ApplicationController
  def index
    @photos = Photo.all

    if params[:review_id]
      @photos = @photos.where(review_id: params[:review_id])
    end

    render :json => {
      params: params,
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
