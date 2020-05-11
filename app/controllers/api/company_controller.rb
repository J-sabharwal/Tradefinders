class Api::CompanyController < ApplicationController
  def index
    @companies = Company.all

    #TODO Find an easier way to implement this.
    if params[:trade_type]
      @companies = @companies.where(trade_type: params[:trade_type].downcase)
    elsif params[:location]
      @companies = @companies.where(location: params[:location])
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
