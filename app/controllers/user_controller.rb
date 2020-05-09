class UserController < ApplicationController
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
