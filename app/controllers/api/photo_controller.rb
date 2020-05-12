class Api::PhotoController < ApplicationController
  def index
    photos = Photo.all

    unless params[:review_id].to_s.strip.empty?
      photos = photos.where(review_id: params[:review_id])
    end

    render :json => {
      photos: photos,
    }
  end

  def show
    photo = Photo.find params[:id]
    render :json => {
      photo: photo,
    }
  end

  def create
    photo = Photo.create(
      review_id: params[:review_id],
      photo_url: params[:photo_url],
    )
    render :json => {
      new_photo: photo,
    }
  end

  def destroy
  end
end
