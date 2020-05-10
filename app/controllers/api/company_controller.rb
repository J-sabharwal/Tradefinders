class Api::CompanyController < ApplicationController
  def index
    if params[:trade_type]
      @companies = Company.where(trade_type: params[:trade_type])
      render :json => {
        params: params,
        companies: @companies,
      }
    else
      @companies = Company.all
      render :json => {
        params: params,
        companies: @companies,
      }
    end
  end

  def show
    @company = Company.all
    render :json => {
      companies: @company,
    }
  end

  def getCompaniesByTrade
    @company = Company.find params[:trade_type]
  end
end
