class Api::UserController < ApplicationController
  def index
    @users = User.all

    render :json => {
      params: params,
      users: @users,
    }
  end

  def show
    @user = User.find params[:id]
    render :json => {
      user: @user,
    }
  end

  def create
  end

  def destroy
  end
end
