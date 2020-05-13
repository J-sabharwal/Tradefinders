class Api::UserController < ApplicationController
  def index
    users = User.all

    # Get photo
    users = users.left_outer_joins(:photos).select(
      "users.*",
      "photos.photo_url as #{:photo_url}",
    )

    render :json => {
      params: params,
      users: users,
    }
  end

  def show
    # Get photo
    users = User.all.left_outer_joins(:photos).select(
      "users.*",
      "photos.photo_url as #{:photo_url}",
    )

    # Find user
    user = users.find params[:id]

    render :json => {
      user: user,
    }
  end

  def create
  end

  def destroy
  end
end
