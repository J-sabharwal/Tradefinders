class Api::UserController < ApplicationController
  def index
    @users = User.all
    render :json => {
      users: @users
    }
  end 

  def show
    render :json => {
      company: User.all
    }
  end

  def create
  end

  def destroy
  end
end