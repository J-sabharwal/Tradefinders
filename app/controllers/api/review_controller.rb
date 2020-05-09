class Api::ReviewController < ApplicationController
  def index
    @users = User.all
    render :json => {
      users: @users
    }
  end 

  def show
    render :json => {
      company: Review.id
    }
  end

  def create
  end

  def destroy
  end

  def bad_path_name
    render :json => {
      review: "lel"
    }
  end
  
  def reviews_for_company_1
    @reviews_for_company_1 = Review.find_by(company_id: 1)
    render :json => {
      review: @reviews_for_company_1
    }
  end

  def given_company
    @reviews_for_given_company = Review.find_by(company_id: params[:company_id])
    render :json => {
      review: @reviews_for_given_company
    }
  end
end