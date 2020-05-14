class Api::PhotoController < ApplicationController
  def index
    photos = Photo.all

    unless params[:review_id].to_s.strip.empty?
      photos = photos.where(review_id: params[:review_id])
    end

    unless params[:company_id].to_s.strip.empty?
      photos = photos.where(company_id: params[:company_id])
    end

    unless params[:user_id].to_s.strip.empty?
      photos = photos.where(user_id: params[:user_id])
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
      company_id: params[:company_id],
      user_id: params[:user_id],
      photo_url: params[:photo_url],
    )
    render :json => {
      new_photo: photo,
    }
  end

  def destroy
  end
end
