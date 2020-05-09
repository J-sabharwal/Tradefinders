class Api::CompanyController < ApplicationController
 def index
  @company = Company.all
    render :json => {
      companies: @company
    }
 end
  def show
    @company = Company.all
    render :json => {
      companies: @company
    }
  end

  def getCompaniesByTrade
    @company = Company.find params[:trade_type]
  end
end
