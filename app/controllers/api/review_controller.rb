class Api::ReviewController < ApplicationController
  def index
    @reviews = Review.all
    render :json => {
      reviews: @reviews
    }
  end 

  def show
    @review = Review.find params[:id]
    render :json => {
      review: @review
    }
  end

  def create
  end

  def destroy
  end

  # def bad_path_name
  #   render :json => {
  #     review: "lel"
  #   }
  # end
  
  # def reviews_for_company_1
  #   @reviews_for_company_1 = Review.find_by(company_id: 1)
  #   render :json => {
  #     review: @reviews_for_company_1
  #   }
  # end

  # def given_company
  #   @reviews_for_given_company = Review.find_by(company_id: params[:company_id])
  #   render :json => {
  #     review: @reviews_for_given_company
  #   }
  # end
end