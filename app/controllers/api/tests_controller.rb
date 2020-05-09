class Api::TestsController < ApplicationController
  def index
    @company = Company.all
    render :json => {
      company: @company
    }
  end
end