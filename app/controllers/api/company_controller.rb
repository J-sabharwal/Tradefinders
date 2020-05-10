class Api::CompanyController < ApplicationController
  def index
    @companies = Company.all

    if params[:trade_type]
      @companies = @companies.where(trade_type: params[:trade_type])
    end

    render :json => {
      params: params,
      companies: @companies,
    }
  end

  def show
    @company = Company.find params[:id]
    render :json => {
      company: @company,
    }
  end

  def create
  end

  def destroy
  end
end
